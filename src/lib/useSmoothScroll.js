import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll() {
  const router = useRouter()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const onRoute = () => {
      lenis.scrollTo(0, { immediate: true })
      ScrollTrigger.refresh()
    }
    router.events.on('routeChangeComplete', onRoute)

    return () => {
      router.events.off('routeChangeComplete', onRoute)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [router.events])
}
