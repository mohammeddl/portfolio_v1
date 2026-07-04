import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const fillRef = useRef(null)

  useEffect(() => {
    let raf
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`
      }
      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={fillRef} className="scroll-progress-fill" />
    </div>
  )
}
