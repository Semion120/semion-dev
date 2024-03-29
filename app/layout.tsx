import type { Metadata } from 'next'
import { DEFAULT_BODY_CLASSNAME, Wrapper } from '@/app/components/wrapper'

import '@gravity-ui/uikit/styles/fonts.css'
import '@gravity-ui/uikit/styles/styles.css'
import '@/app/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Gravity UI – Next.js App Example',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={DEFAULT_BODY_CLASSNAME}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
