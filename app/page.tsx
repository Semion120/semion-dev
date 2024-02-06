import { Text } from '@gravity-ui/uikit'
import MainPageAnimation from '@/app/components/MainPageAnimation'
import Projects from '@/app/components/Projects'
import MainButtons from '@/app/components/MainButtons'

import block from 'bem-cn-lite'
import '@/app/styles.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Разработка Web-приложений любой сложности с использованием современных технологий',
  description:
    'Личная страница для связи с разработчиком. Фронтенд, бекенд, настройка сервера.',
}

const b = block('main-page')

export default function Home() {
  return (
    <div className={b()}>
      <div className={b('landing-section')}>
        <MainPageAnimation />
        <div className={b('landing-section', { text: true })}>
          <h1>
            <Text variant="display-3">Разработка WEB-приложений</Text>
          </h1>
          <p>
            <Text variant="subheader-2">
              Создаю Frontend и Backend под бизнес-процессы клиентов.
            </Text>
          </p>
          <MainButtons />
        </div>
      </div>
      <Projects />
    </div>
  )
}
