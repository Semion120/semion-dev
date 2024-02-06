import { Text, Button, Icon, Link } from '@gravity-ui/uikit'
import {
  Moon,
  Bars,
  ArrowRight,
  Xmark,
  Envelope,
  LogoTelegram,
  Sun,
} from '@gravity-ui/icons'
import { DARK, LIGHT } from '@/app/components/wrapper'
import './Header.scss'
import block from 'bem-cn-lite'
import React from 'react'
import GitHubLogo from '@/app/components/Footer/GitHubLogo'

const b = block('header')

type HeaderProps = {
  isDark: boolean
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ isDark, setTheme }: HeaderProps) {
  const [menuProps, setMenuProps] = React.useState<MenuProps>({
    isOpenMenu: false,
    isFirstOpening: true,
  })

  let animationRule: string | boolean = getAnimationRule(
    menuProps,
    setMenuProps
  )

  const links = [{ name: 'Мой GitHub', href: 'https://github.com/Semion120' }]

  return (
    <header>
      <div className={b()}>
        <div className={b('buttons', { mobile: true })}>
          <Button
            size="m"
            view="outlined"
            onClick={() => {
              setTheme(isDark ? LIGHT : DARK)
            }}
          >
            <Icon data={isDark ? Sun : Moon} />
          </Button>
        </div>
        <div className={b('logo')}>
          <Text variant="header-2">SEMION.DEV</Text>
        </div>
        <div className={b('navs', { desktop: true })}></div>
        <div className={b('socials', { desktop: true })}>
          <div className={b('buttons', { desktop: true })}>
            <Button
              size="m"
              view="outlined"
              onClick={() => {
                setTheme(isDark ? LIGHT : DARK)
              }}
            >
              <Icon data={isDark ? Sun : Moon} />
            </Button>
          </div>
          <Link
            href="https://github.com/Semion120"
            target="_blank"
            view="primary"
            className="social-nav"
          >
            <Icon data={GitHubLogo} size={19} />
            <Text variant="body-2">GitHub</Text>
          </Link>
          <Link
            href="https://t.me/Semion_b"
            target="_blank"
            view="primary"
            className="social-nav"
          >
            <Icon data={LogoTelegram} size={19} />
            <Text variant="body-2">Telegram</Text>
          </Link>
        </div>
        <div className={b('buttons', { mobile: true })}>
          <Button
            size="m"
            view="outlined"
            onClick={() => {
              setMenuProps({
                isOpenMenu: !menuProps.isOpenMenu,
                isFirstOpening: false,
              })
            }}
            className={b('hamburger')}
          >
            <Icon data={!menuProps.isOpenMenu ? Bars : Xmark} />
          </Button>
        </div>
        <div
          className={b('hamburger-wrapper', {
            animation: animationRule,
          })}
        >
          <div className={b('hamburger-wrapper_content')}>
            {links.map((el) => {
              return (
                <HamburgerNav key={el.name} name={el.name} href={el.href} />
              )
            })}
            <p className="contact-head">
              <Text variant="header-1">Способы связи:</Text>
            </p>
            <Link
              href="https://t.me/Semion_b"
              target="_blank"
              view="primary"
              className="contact-link"
            >
              <Icon data={LogoTelegram} size={19} />
              <Text variant="body-2">Telegram</Text>
            </Link>
            <Link
              href="mailto:babaksemion@gmail.com"
              view="primary"
              className="contact-link"
            >
              <Icon data={Envelope} size={19} />
              <Text variant="body-2">babaksemion@gmail.com</Text>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function HamburgerNav({ name, href }: { name: string; href: string }) {
  return (
    <div className={b('hamburger-nav')}>
      <Link href={href} target="_blank" view="primary">
        {name}
        <Icon data={ArrowRight} />
      </Link>
    </div>
  )
}

function getAnimationRule(
  menuProps: MenuProps,
  setMenuProps: React.Dispatch<React.SetStateAction<MenuProps>>
): string | boolean {
  if (menuProps.isFirstOpening) {
    return false
  } else if (menuProps.isOpenMenu && !menuProps.isFirstOpening) {
    return 'open'
  } else if (!menuProps.isOpenMenu && !menuProps.isFirstOpening) {
    setTimeout(() => {
      setMenuProps({
        isOpenMenu: false,
        isFirstOpening: true,
      })
    }, 500)
    return 'close'
  } else {
    return false
  }
}

type MenuProps = {
  isOpenMenu: boolean
  isFirstOpening: boolean
}
