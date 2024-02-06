'use client'

import { Button, Icon } from '@gravity-ui/uikit'
import GitHubLogo from '@/app/components/Footer/GitHubLogo'
import { LogoTelegram, SquareDashedLetterT } from '@gravity-ui/icons'

import './MainButtons.scss'

export default function MainButtons({ pdfLink }: { pdfLink?: boolean }) {
  return (
    <div className="main-buttons">
      {pdfLink && (
        <Button
          href={'/resume-babak.pdf'}
          target="_blank"
          view="outlined-action"
          size="xl"
          className="left-btn"
        >
          <Icon data={SquareDashedLetterT} size={18} />
          Резюме.pdf
        </Button>
      )}
      {!pdfLink && (
        <Button
          href={'https://t.me/Semion_b'}
          target="_blank"
          view="outlined-action"
          size="xl"
          className="left-btn"
        >
          <Icon data={LogoTelegram} size={18} />
          Telegram
        </Button>
      )}

      <Button
        href={'https://github.com/Semion120'}
        target="_blank"
        view="outlined"
        size="xl"
        className="right-btn"
      >
        <Icon data={GitHubLogo} size={18} />
        GitHub
      </Button>
    </div>
  )
}
