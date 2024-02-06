import { Project } from '@/app/data/projects'
import { Card, Icon, Text, Button, Modal } from '@gravity-ui/uikit'
import { Link as LinkComp } from '@gravity-ui/uikit'
import { Link } from '@gravity-ui/icons'
import GitHubLogo from '@/app/components/Footer/GitHubLogo'
import { ChevronRight } from '@gravity-ui/icons'
import { useState } from 'react'

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="list">
      {projects.map((el) => {
        return <Project key={el.name} project={el} />
      })}
    </div>
  )
}

function Project({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  return (
    <Card view="outlined" className="project-card">
      <div className="card-text">
        <h3>
          <Text variant="header-1">{project.name}</Text>
        </h3>
        <p>
          <Text variant="body-2">{project.companyActivityType}</Text>
        </p>
      </div>
      <div className="card-actions">
        <div className="examples">
          {project.projectLink ? (
            <Button href={project.projectLink} view="outlined" size="l">
              <Icon data={Link} size={20} />
            </Button>
          ) : (
            <Button
              href={project.projectLink}
              view="outlined"
              size="l"
              disabled
            >
              <Icon data={Link} size={20} />
            </Button>
          )}

          {project.gitLink ? (
            <Button href={project.gitLink} view="outlined" size="l">
              <Icon data={GitHubLogo} size={20} />
            </Button>
          ) : (
            <Button href={project.gitLink} view="outlined" size="l" disabled>
              <Icon data={GitHubLogo} size={20} />
            </Button>
          )}
        </div>
        <p>
          <LinkComp onClick={() => setOpen(true)}>
            Подробнее <Icon data={ChevronRight} size={20} />
          </LinkComp>
        </p>
        <Modal className="modal" open={open} onClose={() => setOpen(false)}>
          <h1>
            <Text variant="display-1">{project.name}</Text>
          </h1>
          <p>
            <Text variant="subheader-1">{project.companyActivityType}</Text>
          </p>
          <h2>
            <Text variant="header-1">Стак проекта</Text>
          </h2>
          <ul>
            {project.stack.map((el) => {
              return <li key={el}>{el}</li>
            })}
          </ul>
          <h2>
            <Text variant="header-1">Особенности</Text>
          </h2>
          <ul>
            {project.specials.map((el) => {
              return <li key={el}>{el}</li>
            })}
          </ul>

          <div className="view">
            <h2 style={{ textAlign: 'center' }}>Посмотреть проект</h2>
            <div className="view-btns">
              {project.projectLink ? (
                <Button
                  href={project.projectLink}
                  view="outlined"
                  size="l"
                  style={{ marginRight: '10px' }}
                >
                  <Icon data={Link} size={20} />
                  <Text>Вживую</Text>
                </Button>
              ) : (
                <Button
                  href={project.projectLink}
                  view="outlined"
                  size="l"
                  style={{ marginRight: '10px' }}
                  disabled
                >
                  <Icon data={Link} size={20} />
                  <Text>Вживую</Text>
                </Button>
              )}

              {project.gitLink ? (
                <Button
                  href={project.gitLink}
                  view="outlined"
                  size="l"
                  style={{ marginLeft: '10px' }}
                >
                  <Icon data={GitHubLogo} size={25} />
                  <Text>GitHub</Text>
                </Button>
              ) : (
                <Button
                  href={project.gitLink}
                  view="outlined"
                  size="l"
                  style={{ marginLeft: '10px' }}
                  disabled
                >
                  <Icon data={GitHubLogo} size={25} />
                  <Text>GitHub</Text>
                </Button>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </Card>
  )
}
