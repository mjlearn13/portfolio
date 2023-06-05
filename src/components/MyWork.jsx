import {Link, useSearchParams} from 'react-router-dom'
import allProjectsData from '../allProjectsData'


export default function MyWork(){
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  const displayedProjects = typeFilter
    ? allProjectsData.filter(
        (project) => project.type.toLowerCase() === typeFilter)
    : allProjectsData

  const projectElements = displayedProjects.map(project => {
    return (
      <Link
        to={project.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        key={project.id}
        className="portfolio__item"
      >
        <img src={project.imageSquare} alt={`{${project.name} web app}`} className="portfolio__img" title={project.name}/>
      </Link>
    )
  })

  return (
    <section className="my-work">
      <h2 className="section__title section__title--work">My projects</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className='projects-filter-buttons'>
        <button
          onClick={() => setSearchParams({type: "react"})}
          className={
            `btn project-type react ${typeFilter === "react" ? "selected" : ""}`
          }
        >
          React
        </button>

        <button
          onClick={() => setSearchParams({type: "javascript"})}
          className={
            `btn project-type javascript ${typeFilter === "javascript" ? "selected" : ""}`
          }
        >
          JavaScript
        </button>

        {typeFilter && <button
          onClick={() => setSearchParams({})}
          className='btn project-type clear-filters'
        >
          All
        </button>}
      </div>
      <div className="portfolio">{projectElements}</div>
    </section>
  )
}

