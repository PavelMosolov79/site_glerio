import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Venera - Место, где красота становится реальностью',
  description: 'Наши услуги создают незабываемые моменты.Забудьте о повседневных заботах и поарите себе красоту в Venera.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta name="keywords" content="Ключевые слова" />
        
        <meta name = "robots" content = "index, follow" />
        <meta name="yandex-verification" content="bf6af11ba967ce68" />
        
        <meta property="og:image" content="/networks.jpg" />
        <meta property="og:title" content="Venera - Место, где красота становится реальностью"/>
        <meta property="og:description" content="СНаши услуги создают незабываемые моменты.Забудьте о повседневных заботах и поарите себе красоту в Venera."/>
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
