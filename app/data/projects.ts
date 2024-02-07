export type Project = {
  name: string
  companyActivityType: string
  type: 'сommerce' | 'open-source'
  gitLink?: string
  projectLink?: string
  stack: string[]
  specials: string[]
}

const projects: Project[] = [
  {
    name: 'Красна изба',
    companyActivityType: 'Строительная компания',
    type: 'сommerce',
    projectLink: 'https://krasna-izba.ru/',
    stack: [
      'Админка: Vue.js',
      'Фронтенд: Nuxt.js',
      'Бекенд: express.js + MongoDB',
    ],
    specials: [
      'Алгоритм ресайза изображений под нужные размеры после загрузки через админку',
      'Полностью реактивные фильтры',
      'CRUD для проектов, простроенных домов и категорий через админку',
    ],
  },

  {
    name: 'Подиатри Лаб',
    companyActivityType: 'Медицинская клиника',
    type: 'сommerce',
    projectLink: 'https://podiatrylab.ru/',
    stack: [
      'Фронтенд: Nuxt.js',
      'Бекенд на Express.js для отправки данных заявок',
    ],
    specials: [
      'Переписан с проекта на Wordpress',
      'Увеличена скорость загрузки страниц более чем в 2 раза',
      'После переноса на Nuxt.js увеличился трафик на 15%',
      'Свой mail-агент для рассылки заявок',
    ],
  },
  {
    name: 'ssarynails.ru',
    companyActivityType: 'Личный сайт',
    type: 'сommerce',
    projectLink: 'https://ssarynails.ru/',
    stack: ['Фронтенд: Nuxt.js', 'Pinia, как Store'],
    specials: [
      'Небольшой проект с упопром на фотографии',
      'Авторский дизайн',
      'Свой сервер для обработки заявок',
    ],
  },
  {
    name: 'Сайт Semion-web',
    companyActivityType: 'Личный сайт',
    type: 'open-source',
    projectLink: 'https://semion-web.ru/',
    gitLink: 'https://github.com/Semion120/semion-dev',
    stack: ['React', 'Next.js'],
    specials: ['Сайт для личных целей и проб нового функционала'],
  },
  {
    name: 'Ворди',
    companyActivityType: 'Бот-помощник',
    type: 'open-source',
    projectLink: 'https://t.me/wordy_en_bot',
    gitLink: 'https://github.com/Semion120/wordy',
    stack: [
      'TypeScript',
      'Express.js используются как сервер',
      '@grammyjs как библиотека для доступа к API',
      'База данных: Mongo',
    ],
    specials: [
      'Для запоминания используется кривая забывания или кривая Эббингауза',
      'Бот помогает запомнить 3000 самых популярных слов английского языка',
      'Для каждого слова бот приводит несколько возможных переводов + несколько примеров',
    ],
  },
  {
    name: 'WebP конвертер',
    companyActivityType: 'Конвертор изображений',
    type: 'open-source',
    projectLink: 'https://webp.convert-file.ru/',
    gitLink: 'https://github.com/Semion120/webp-converter',
    stack: [
      'JavaScript как основа',
      'Express.js используются как сервер',
      'Fluent ffmpeg для обработки изображений',
    ],
    specials: [
      'Написан без использования фреймворков, только ванильный JS',
      'Позволяет конвертировать изображение в WebP из популярных форматов и обратно',
    ],
  },
  {
    name: 'Скрипт для перевода',
    companyActivityType: 'Массовый перевод',
    type: 'open-source',

    gitLink: 'https://github.com/Semion120/dict-parse',
    stack: ['TypeScript'],
    specials: [
      'Основан на Lbre Translate',
      'Используется для програмного перевода большого количества слов',
    ],
  },
]

export default projects
