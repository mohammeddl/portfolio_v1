import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function Preloader({ onComplete }) {
  const rootRef = useRef(null)
  const counterRef = useRef(null)
  const doneRef = useRef(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const counter = { value: 0 }
    const el = counterRef.current

    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      gsap.to(rootRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.25,
        onStart: onComplete,
        onComplete: () => setMounted(false),
      })
    }

    // Count towards 99 while the page is still loading, jump to 100 on load.
    const tween = gsap.to(counter, {
      value: 99,
      duration: 2.4,
      ease: 'power2.out',
      onUpdate: () => {
        if (el) el.textContent = `${Math.round(counter.value)}%`
      },
    })

    const complete = () => {
      tween.kill()
      gsap.to(counter, {
        value: 100,
        duration: 0.4,
        ease: 'power1.out',
        onUpdate: () => {
          if (el) el.textContent = `${Math.round(counter.value)}%`
        },
        onComplete: finish,
      })
    }

    // Wait for both a minimum duration and the real window load.
    const minDelay = new Promise((resolve) => setTimeout(resolve, 1800))
    const loaded = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', resolve, { once: true })
    })
    Promise.all([minDelay, loaded]).then(complete)

    // Safety: never hang past 5s.
    const failsafe = setTimeout(complete, 5000)

    return () => {
      clearTimeout(failsafe)
      tween.kill()
    }
  }, [onComplete])

  if (!mounted) return null

  return (
    <div ref={rootRef} className="preloader" aria-hidden="true">
      <span ref={counterRef} className="preloader-counter">
        0%
      </span>
      <span className="preloader-brand">[daali mohammed]</span>
      <span className="preloader-hint">full stack web developer</span>
    </div>
  )
}
