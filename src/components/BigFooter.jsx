import Link from 'next/link'
import siteMeta from '@/data/siteMeta'

export function BigFooter() {
  return (
    <footer className="big-footer">
      <div className="big-footer-inner">
        <div className="big-footer-top">
          <div className="footer-contact">
            <span className="footer-label">let&apos;s work together</span>
            <a
              href={`mailto:${siteMeta.author.email}`}
              className="footer-contact-link"
            >
              {siteMeta.author.email}
            </a>
            <Link href="/contact" className="footer-contact-link">
              get in touch →
            </Link>
          </div>

          <div className="footer-columns">
            <div className="footer-links">
              <span className="footer-label">pages</span>
              <Link href="/" className="footer-link">
                home
              </Link>
              <Link href="/projects" className="footer-link">
                projects
              </Link>
              <Link href="/contact" className="footer-link">
                contact
              </Link>
            </div>
            <div className="footer-links">
              <span className="footer-label">socials</span>
              <a
                href={siteMeta.author.github}
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <a
                href={siteMeta.author.linkedin}
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <a
                href={siteMeta.author.instagram}
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
            </div>
            <div className="footer-links">
              <span className="footer-label">resume</span>
              <a href="/CV_Daali_Mohammed.pdf" download className="footer-link">
                download cv
              </a>
            </div>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          <span className="bracket">[</span>daali
          <span className="bracket">]</span>
        </div>

        <div className="big-footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteMeta.copyright} — all rights
            reserved
          </span>
          <span>full stack web developer — morocco</span>
        </div>
      </div>
    </footer>
  )
}
