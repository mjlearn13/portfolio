import {Link} from 'react-router-dom'
import allProjectData from '../allProjectsData'


export default function MyWork(){
    const allProjectElements = allProjectData.map(project => {
      console.log(project)
      return <Link 
         to={`/myWork/${project.id}`}
         key={project.id}
         className="portfolio__item"
        >
         <img src={project.imageSquare} alt="" className="portfolio__img" />
      </Link>
    })

    return (
         <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
               
               {allProjectElements}
                

            </div>
        </section>
    )
}

