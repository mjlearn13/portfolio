import {Link, NavLink, useSearchParams} from 'react-router-dom'
import allProjectsData from '../allProjectsData'


export default function MyWork(){
  const [searchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  const displayedProjects = typeFilter
    ? allProjectsData.filter(
        (project) => project.type.toLowerCase() === typeFilter)
    : allProjectsData

  const projectElements = displayedProjects.map(project => {
    return <Link 
        to={`/myWork/${project.id}`}
        key={project.id}
        className="portfolio__item"
      >
        <img src={project.imageSquare} alt="" className="portfolio__img" />
    </Link>
  })

    const activeStyles = {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616',
    }

  return (
    <section className="my-work">
      <h2 className="section__title section__title--work">My projects</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <nav>
        <NavLink
          to="?type=react"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          React
        </NavLink>

        <NavLink
          to="?type=javascript"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          JavaScript
        </NavLink>

        <NavLink
          to="."
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          All
        </NavLink>
      </nav>
      <div className="portfolio">{projectElements}</div>
    </section>
  )
}

