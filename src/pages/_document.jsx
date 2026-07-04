import { Head, Html, Main, NextScript } from 'next/document'

// Apply the saved theme before first paint (dark is the default).
const themeScript = `
  try {
    var t = localStorage.getItem('theme')
    if (t !== 'light' && t !== 'dark') t = 'dark'
    document.documentElement.setAttribute('data-theme', t)
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
`

export default function Document() {
  return (
    <Html lang="en" className="antialiased">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#0e0e0e" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
