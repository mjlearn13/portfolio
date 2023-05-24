import { Link, useOutletContext } from 'react-router-dom'


export default function ReactWork() {
  const {allData} = useOutletContext()
  const reactProjects = allData.filter((project) => project.type === 'React')

  const reactProjectsElements = reactProjects.map((project) => {
    return (
      <Link
        to={project.id}
        key={project.id}
        className="portfolio__item"
      >
        <img src={project.imageSquare} alt="" className="portfolio__img" />
      </Link>
    )
  })

  return (
    <section className="my-work">
      <h2 className="section__title section__title--work">
        My React Projects
      </h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my React work
      </p>

      <nav>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all projects</span>
        </Link>
      </nav>

      <div className="portfolio">{reactProjectsElements}</div>
    </section>
  )
}
