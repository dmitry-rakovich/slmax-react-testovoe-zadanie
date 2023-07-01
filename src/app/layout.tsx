import Header from '@/components/Header'
import './globals.css'
import './page.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
