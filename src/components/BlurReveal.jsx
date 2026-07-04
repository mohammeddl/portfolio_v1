import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Word-by-word blur reveal (yeqq-style): the block starts blurred, each word
// starts transparent and slightly below its spot; on first scroll into view
// the block un-blurs while words fade up with a stagger.
export function BlurReveal({
  text,
  children,
  className = '',
  tagName: Tag = 'p',
  stagger = 0.05,
  duration = 1.1,
  start = 'top 85%',
  blur = 10,
  ...props
}) {
  const ref = useRef(null)
  const content = text ?? children
  const plain = typeof content === 'string' ? content : undefined

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const words = el.querySelectorAll('[data-blur-word]')
    if (!words.length) return

    gsap.set(el, { filter: `blur(${blur}px)` })
    gsap.set(words, { opacity: 0, yPercent: 42 })

    const tl = gsap.timeline({ paused: true })
    tl.to(
      el,
      { filter: 'blur(0px)', duration: duration * 1.2, ease: 'power2.out' },
      0
    )
    tl.to(
      words,
      { opacity: 1, yPercent: 0, duration, ease: 'power2.out', stagger },
      0
    )

    let played = false
    const play = () => {
      if (played) return
      played = true
      tl.play()
    }
    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: play,
      // Elements past the max scroll never fire onEnter — reveal them anyway.
      onRefresh: (self) => {
        if (self.start > ScrollTrigger.maxScroll(window)) play()
      },
    })

    return () => {
      trigger.kill()
      tl.kill()
    }
  }, [plain, stagger, duration, start, blur])

  const rendered =
    typeof content === 'string'
      ? content.split(/(\s+)/).map((word, i) => {
          if (!word) return null
          if (/\s+/.test(word)) return word
          return (
            <span data-blur-word className="blur-word" key={`${word}-${i}`}>
              {word}
            </span>
          )
        })
      : content

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={props['aria-label'] ?? plain}
      {...props}
    >
      {rendered}
    </Tag>
  )
}
