"use client";
import { Footer } from '@/components/templates/Footer';
import { Header } from '@/components/templates/Header';
import { GlobalStyle, theme } from '@/styles';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jakarta',
})

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <body className={`${poppins.variable} ${jakarta.variable}`} suppressHydrationWarning={true}>
          <ThemeProvider theme={{theme}}>
              <GlobalStyle />
              <Header />
              {children}
              <Footer />
          </ThemeProvider>
        </body>
    </html>
  )
}
