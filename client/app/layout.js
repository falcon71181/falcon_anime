import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AniWatch',
    description: 'Made by falcon71181',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`relative max-w-6xl mx-auto ${inter.className}`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
