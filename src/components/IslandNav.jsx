import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import gsap from 'gsap'

import siteMeta from '@/data/siteMeta'
import { useSite } from '@/lib/siteContext'

const LINKS = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
]

export function IslandNav() {
  const [open, setOpen] = useState(false)
  const islandRef = useRef(null)
  const overlayRef = useRef(null)
  const linkRefs = useRef([])
  const router = useRouter()
  const { theme, toggleTheme } = useSite()

  useEffect(() => {
    const island = islandRef.current
    const overlay = overlayRef.current
    const links = linkRefs.current.filter(Boolean)
    const isMobile = window.matchMedia('(max-width: 600px)').matches

    if (open) {
      gsap.to(island, {
        width: isMobile ? 'min(92vw, 22rem)' : '26rem',
        height: '17rem',
        borderRadius: '1.1rem',
        duration: 0.6,
        ease: 'expo.inOut',
      })
      gsap.to(overlay, {
        autoAlpha: 1,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.1,
      })
      gsap.fromTo(
        links,
        { y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.45,
          ease: 'power3.out',
          delay: 0.25,
          overwrite: true,
          clearProps: 'transform',
        }
      )
    } else {
      gsap.to(links, {
        autoAlpha: 0,
        y: 12,
        stagger: 0.03,
        duration: 0.25,
        ease: 'power2.in',
        overwrite: true,
      })
      gsap.to(overlay, { autoAlpha: 0, duration: 0.35, ease: 'power2.in' })
      gsap.to(island, {
        width: isMobile ? '14rem' : '17rem',
        height: '2.6rem',
        borderRadius: '1.3rem',
        duration: 0.55,
        ease: 'expo.inOut',
        delay: 0.1,
      })
    }
  }, [open])

  // Close menu on navigation + Escape.
  useEffect(() => {
    const close = () => setOpen(false)
    const onKey = (e) => e.key === 'Escape' && close()
    router.events.on('routeChangeStart', close)
    window.addEventListener('keydown', onKey)
    return () => {
      router.events.off('routeChangeStart', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [router.events])

  return (
    <>
      <div className="nav-bar-left">daali mohammed — full stack developer</div>
      <div className="nav-bar-right">
        <Clock />
      </div>

      <div
        ref={overlayRef}
        className="nav-overlay"
        onClick={() => setOpen(false)}
      />

      <header ref={islandRef} className="island" data-open={open}>
        <Link href="/" className="island-brand">
          <span className="bracket">[</span>daali
          <span className="bracket">]</span>
        </Link>

        <button
          type="button"
          className="island-theme"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          <span className="theme-dot" data-on={theme === 'dark'} />
          {theme === 'dark' ? 'dark' : 'light'}
        </button>

        <button
          type="button"
          className="island-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span>{open ? 'close' : 'menu'}</span>
        </button>

        <nav className="island-links" aria-label="Main navigation">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="island-link"
              data-active={router.pathname === link.href}
              ref={(el) => (linkRefs.current[i] = el)}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className="island-social"
          ref={(el) => (linkRefs.current[LINKS.length] = el)}
        >
          <a href={siteMeta.author.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={siteMeta.author.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a href={siteMeta.author.instagram} target="_blank" rel="noreferrer">
            instagram
          </a>
        </div>
      </header>
    </>
  )
}

function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return <span>morocco — {time}</span>
}
