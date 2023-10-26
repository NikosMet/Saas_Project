import HeaderTop from '@/components/HeaderTop'
import { Inter } from 'next/font/google'
import HeaderMain from '@/components/HeaderMain'
import Navbar from '@/components/navbar'


import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from '@/components/Hero'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eBook Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        {children}
        </body>
    </html>
  )
}