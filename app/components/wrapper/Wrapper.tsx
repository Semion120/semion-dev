'use client'

import React from 'react'
import block from 'bem-cn-lite'
import { Button, Icon, Theme, ThemeProvider } from '@gravity-ui/uikit'
import { Moon, Sun } from '@gravity-ui/icons'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

import './Wrapper.scss'

const b = block('wrapper')

export const DARK = 'dark-hc'
export const LIGHT = 'light-hc'
const DEFAULT_THEME = DARK

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`

export type AppProps = {
  children: React.ReactNode
}

export const Wrapper: React.FC<AppProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME)

  const isDark = theme === DARK

  return (
    <ThemeProvider theme={theme}>
      <div className={b()}>
        <Header isDark={isDark} setTheme={setTheme} />
        <div className={b('layout')}>
          <div className={b('content')}>{children}</div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
