import '../styles/globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Portfolio — UI/UX Designer',
  description: 'Product Designer crafting intuitive digital experiences that connect users with value.',
  openGraph: {
    title: 'Portfolio — UI/UX Designer',
    description: 'Product Designer crafting intuitive digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
