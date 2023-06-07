import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import allProjectsData from '../allProjectsData'
import reactLogo from '../assets/logos/react.png'
import javaScriptLogo from '../assets/logos/javaScript.png'

export default function MyWork() {
  const [showButton, setShowButton] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    })
  }

  const typeFilter = searchParams.get('type')

  const displayedProjects = typeFilter
    ? allProjectsData.filter(
        (project) => project.type.toLowerCase() === typeFilter
      )
    : allProjectsData

  const projectElements = displayedProjects.map((project) => {
    return (
      <Link
        to={project.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        key={project.id}
        className="portfolio__item"
      >
        <img
          src={project.imageSquare}
          alt={`{${project.name} web app}`}
          className="portfolio__img"
          title={project.name}
        />
      </Link>
    )
  })



  return (
    <section className="my-work">
      <h2 className="section__title section__title--work">My projects</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="projects-filter-buttons">
        <button
          onClick={() => setSearchParams({ type: 'react' })}
          className={`btn-logos project-type react ${
            typeFilter === 'react' ? 'selected' : ''
          }`}
        >
          <img src={reactLogo} className="react-logo" />
        </button>

        <button
          onClick={() => setSearchParams({ type: 'javascript' })}
          className={`btn-logos project-type javascript ${
            typeFilter === 'javascript' ? 'selected' : ''
          }`}
        >
          <img src={javaScriptLogo} className="javaScript-logo" />
        </button>

        {typeFilter && (
          <button
            onClick={() => setSearchParams({})}
            className="btn project-type clear-filters"
          >
            All 
          </button>
        )}
      </div>
      <div className="portfolio">
        {projectElements}
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}
      </div>
    </section>
  )
}
