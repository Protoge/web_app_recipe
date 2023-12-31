import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import ModalProvider from '@/providers/modal-provider'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={spaceMono.className}>
          <Toaster />
          <Navbar />
          <ModalProvider />
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
