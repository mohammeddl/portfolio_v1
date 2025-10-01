import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Loading({ onComplete }) {
  const loaderRef = useRef(null)
  const iconRefs = useRef([])
  const progressRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: onComplete,
        })
      },
    })

    // Icons animation
    tl.fromTo(
      iconRefs.current,
      { scale: 0, opacity: 0, rotation: -180 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)',
      }
    )
    // Progress bar animation
    .fromTo(
      progressRef.current,
      { width: '0%' },
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
      },
      '-=0.5'
    )
    // Wait before fading out
    .to({}, { duration: 0.5 })
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800"
    >
      {/* Three Icons */}
      <div className="mb-8 flex space-x-6">
        {/* Icon 1 - Code */}
        <div
          ref={(el) => (iconRefs.current[0] = el)}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
        >
          <svg
            className="h-8 w-8 text-teal-500 dark:text-teal-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>

        {/* Icon 2 - Laptop */}
        <div
          ref={(el) => (iconRefs.current[1] = el)}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
        >
          <svg
            className="h-8 w-8 text-teal-500 dark:text-teal-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Icon 3 - Rocket */}
        <div
          ref={(el) => (iconRefs.current[2] = el)}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
        >
          <svg
            className="h-8 w-8 text-teal-500 dark:text-teal-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </div>
      </div>

      {/* Progress bar container */}
      <div className="relative h-1 w-64 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div
          ref={progressRef}
          className="h-full rounded-full bg-teal-500 dark:bg-teal-400"
        />
      </div>
    </div>
  )
}
