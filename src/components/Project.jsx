import { useParams, Link, useLocation} from 'react-router-dom'
import { nanoid } from 'nanoid'
import allProjectsData from '../allProjectsData'


export default function Project() {
    const {id} = useParams()
    const location = useLocation()
    const currentProject = allProjectsData.find(project => project.id === id)
    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    const topicElements = currentProject.topics.map(topic => <li key={nanoid()}>{topic}</li>)

  return (
    <>
      <Link 
        to={`..${search}`}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to {type} projects</span>
      </Link>

      <section className="intro portfolio-intro">
        <h1 className="section__title section__title--intro">
          {currentProject.name}
          <strong>web app</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          {currentProject.type}
        </p>
        <img src={currentProject.image} alt="" className="intro__img" />
      </section>

      <div className="portfolio-item-individual">
        <div>
          <a
            className=""
            target="_blank"
            rel="noreferrer"
            href={currentProject.github}
          >
            <i className="fab fa-github"></i> GitHub Repo
          </a>
          <a
            className=""
            target="_blank"
            rel="noreferrer"
            href={currentProject.url}
          >
            <i className="fas fa-eye"></i> Live version{' '}
          </a>
        </div>
        <p>
          {currentProject.desc}
        </p>
        <ul>
          {topicElements}
        </ul>
      </div>
    </>
  )
}




 