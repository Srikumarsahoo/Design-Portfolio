import { use } from 'react'
import { config } from '../../../config/portfolio'
import ProjectDetailClient from './ProjectDetailClient'

export function generateStaticParams() {
  return config.projects.map((p) => ({ id: String(p.id) }))
}

export default function ProjectDetailPage({ params }) {
  const { id } = use(params)
  const project = config.projects.find((p) => p.id === parseInt(id)) ?? null

  return (
    <ProjectDetailClient
      project={project}
      allProjects={config.projects}
      authorName={config.name}
    />
  )
}