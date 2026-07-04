import { useCallback, useEffect, useState } from 'react'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

import { IslandNav } from '@/components/IslandNav'
import { BigFooter } from '@/components/BigFooter'
import { Preloader } from '@/components/Preloader'
import { ScrollProgress } from '@/components/ScrollProgress'
import { SiteContext } from '@/lib/siteContext'
import { useSmoothScroll } from '@/lib/useSmoothScroll'
import SEO from '@/lib/next-seo.config'

import '@/styles/tailwind.css'
import '@/styles/globals.css'
import 'focus-visible'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  const [loaderDone, setLoaderDone] = useState(false)
  const [theme, setTheme] = useState('dark')

  useSmoothScroll()

  // Sync with the no-flash script in _document.
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    if (current === 'light' || current === 'dark') setTheme(current)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch (e) {}
      return next
    })
  }, [])

  // Lock scrolling while the preloader is up.
  useEffect(() => {
    document.documentElement.style.overflow = loaderDone ? '' : 'hidden'
  }, [loaderDone])

  const handleLoaderDone = useCallback(() => setLoaderDone(true), [])

  return (
    <SiteContext.Provider value={{ loaderDone, theme, toggleTheme }}>
      <div className={outfit.variable} style={{ fontFamily: 'var(--font-outfit), Outfit, system-ui, sans-serif' }}>
        <DefaultSeo {...SEO} />
        <Preloader onComplete={handleLoaderDone} />
        <IslandNav />
        <main className="page-main" id="main">
          <Component {...pageProps} />
        </main>
        <BigFooter />
        <ScrollProgress />
        <Analytics />
      </div>
    </SiteContext.Provider>
  )
}
