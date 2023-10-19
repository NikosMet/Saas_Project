
import HeaderTop from '@/components/HeaderTop'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eBook Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <HeaderTop />
        {children}
        </body>
    </html>
  )
}
