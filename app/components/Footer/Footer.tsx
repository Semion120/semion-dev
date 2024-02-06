import { Link, Icon, Text } from '@gravity-ui/uikit'
import { LogoTelegram } from '@gravity-ui/icons'
import GitHubLogo from './GitHubLogo'

import block from 'bem-cn-lite'
import './Footer.scss'

const b = block('footer')

export default function Footer() {
  return (
    <div className={b()}>
      <Text className={b('text')} variant="body-3">
        @ 2024 Бабак Семен
      </Text>
      <div className={b('links')}>
        <Link
          href="https://github.com/Semion120"
          target="_blank"
          view="primary"
        >
          <Icon data={GitHubLogo} size={19} />
          <Text variant="body-2">GitHub</Text>
        </Link>
        <Link href="https://t.me/Semion_b" target="_blank" view="primary">
          <Icon data={LogoTelegram} size={19} />
          <Text variant="body-2">Telegram</Text>
        </Link>
      </div>
    </div>
  )
}
