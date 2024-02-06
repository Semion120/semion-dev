import { Text } from '@gravity-ui/uikit'
import Projects from '@/app/components/Projects'
import MainButtons from '@/app/components/MainButtons'
import Image from 'next/image'

import block from 'bem-cn-lite'
import '@/app/styles.scss'

const b = block('main-page')

export default function Home() {
  return (
    <div className={b()}>
      <div className={b('landing-section', { spaceAround: true })}>
        <div className={b('person-image')}>
          <Image
            src={'/person-image.JPG'}
            width={500}
            height={500}
            alt="Фото автора"
          />
        </div>

        <div className={b('landing-section', { text: true })}>
          <h1>
            <Text variant="display-3">Бабак Семён Павлович</Text>
          </h1>
          <p>
            <Text variant="subheader-2">Фронтенд && Бекенд</Text>
          </p>
          <MainButtons pdfLink />
        </div>
      </div>
      <Projects />
    </div>
  )
}
