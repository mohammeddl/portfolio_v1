import { Children, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Masked word reveal (yeqq-style): each word sits inside an overflow-hidden
// mask and slides up from y:110% with a stagger on first scroll into view.
// String children are split per word; element children (e.g. styled bracket
// spans) are masked as a single unit so their styling is preserved.
function splitNodes(node) {
  return Children.map(node, (child, i) => {
    if (child == null) return null
    if (typeof child === 'string') {
      return child.split(/(\s+)/).map((word, j) => {
        if (!word) return null
        if (/\s+/.test(word)) return word
        return (
          <span className="word-mask" key={`${word}-${i}-${j}`}>
            <span data-split-word className="word-mask-inner">
              {word}
            </span>
          </span>
        )
      })
    }
    return (
      <span className="word-mask" key={i}>
        <span data-split-word className="word-mask-inner">
          {child}
        </span>
      </span>
    )
  })
}

export function AnimatedSplit({
  text,
  children,
  className = '',
  tagName: Tag = 'span',
  stagger = 0.05,
  duration = 1.2,
  start = 'top 80%',
  ...props
}) {
  const ref = useRef(null)
  const content = text ?? children
  const plain = typeof content === 'string' ? content : undefined

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const words = el.querySelectorAll('[data-split-word]')
    if (!words.length) return

    const anim = gsap.fromTo(
      words,
      { y: '110%' },
      { y: '0%', duration, ease: 'power4.out', stagger, paused: true }
    )

    let played = false
    const play = () => {
      if (played) return
      played = true
      anim.play()
    }
    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: play,
      onRefresh: (self) => {
        if (self.start > ScrollTrigger.maxScroll(window)) play()
      },
    })

    return () => {
      trigger.kill()
      anim.kill()
    }
  }, [plain, stagger, duration, start])

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={props['aria-label'] ?? plain}
      {...props}
    >
      {splitNodes(content)}
    </Tag>
  )
}
