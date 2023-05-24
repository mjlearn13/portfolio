import { Link, useOutletContext } from 'react-router-dom'


export default function JavaScriptWork(){
  const {allData} = useOutletContext()
  const javaScriptProjects = allData.filter((project) => project.type === 'JavaScript')

  const javaScriptProjectsElements = javaScriptProjects.map((project) => {
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
        My JavaScript Projects
      </h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my JavaScript work
      </p>

      <nav>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all projects</span>
        </Link>
      </nav>

      <div className="portfolio">{javaScriptProjectsElements}</div>
    </section>
  )
}




    



 