'use client';
import { GlobalStyle } from '@/styles/global';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
