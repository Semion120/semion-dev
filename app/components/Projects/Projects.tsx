'use client'

import { Button, Text } from '@gravity-ui/uikit'
import './Projects.scss'

import block from 'bem-cn-lite'
import { useState } from 'react'
import projects from '@/app/data/projects'
import { Project } from '@/app/data/projects'
import ProjectList from './ProjectList'

const b = block('projects')

export type ActiveButtonType = {
  name: string
  selected: boolean
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ActiveButtonType[]>([
    { name: 'сommerce', selected: false },
    { name: 'open-source', selected: false },
  ])

  const emptyArr: Project[] = []
  let filteredProjects = Object.assign(emptyArr, projects)
  const filter = activeFilter.filter((el) => {
    return el.selected
  })
  if (filter.length > 0 && filteredProjects.length > 0) {
    const filterField = filter[0].name
    filteredProjects = filteredProjects.filter((el) => {
      return el.type === filterField
    })
  }

  function changeFilter(name: string) {
    const defaultFilter = [
      { name: 'сommerce', selected: false },
      { name: 'open-source', selected: false },
    ]

    let nowActive = undefined
    if (filter.length > 0) {
      nowActive = filter[0].name
    }

    if (name == nowActive) {
      setActiveFilter(defaultFilter)
    } else if (name == 'сommerce') {
      defaultFilter[0].selected = true
      setActiveFilter(defaultFilter)
    } else if (name == 'open-source') {
      defaultFilter[1].selected = true
      setActiveFilter(defaultFilter)
    }
  }

  return (
    <div className={b()}>
      <h2>
        <Text variant="display-1">Проекты</Text>
      </h2>
      <div className={b('nav-btns')}>
        <Button
          onClick={() => {
            changeFilter('сommerce')
          }}
          view="outlined"
          size="l"
          selected={activeFilter[0].selected}
        >
          <Text variant="body-1">commerce</Text>
        </Button>
        <Button
          onClick={() => {
            changeFilter('open-source')
          }}
          view="outlined"
          size="l"
          selected={activeFilter[1].selected}
        >
          <Text variant="body-1">open-source</Text>
        </Button>
      </div>
      <ProjectList projects={filteredProjects} />
    </div>
  )
}
