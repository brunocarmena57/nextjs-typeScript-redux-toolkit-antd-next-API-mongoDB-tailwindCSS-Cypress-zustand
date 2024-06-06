import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'
import 'react-phone-input-2/lib/style.css'
import StyledComponentsRegistry from '@/lib/AntdesignRegistry'
import { ReduxProvider } from '@/redux/provider'

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Painel de Educação',
  description: 'Painel de Educação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  )
}
