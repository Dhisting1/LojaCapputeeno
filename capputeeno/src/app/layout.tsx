import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'


const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Projeto Capputeeno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
