import { useParams } from 'react-router-dom'
import allProjectsData from '../allProjectsData'


export default function Project() {
    const {id} = useParams()
    const currentProject = allProjectsData.find(project => project.id === id)
    
  return (
    <>
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
          <a className="" target="_blank" rel="noreferrer" href={currentProject.github}>
            <i className="fab fa-github"></i> GitHub Repo
          </a>
          <a className="" target="_blank" rel="noreferrer" href={currentProject.url}>
            <i className="fas fa-eye"></i> Live version{' '}
          </a>
        </div>
        <p>
          This is the main layout of an Instagram clone. It is built using
          vanilla CSS, and is utilizing Flexbox, CSS Grid, and CSS Variables. It
          was built as a part of Scrimbas Frontend Developer Career Path.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
          amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
          incidunt?
        </p>
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
      </div>
    </>
  )
}





// export default function Project() {
//   return (
//     <>
//       <section className="intro portfolio-intro">
//         <h1 className="section__title section__title--intro">
//           Oldagram<strong>web app</strong>
//         </h1>
//         <p className="section__subtitle section__subtitle--intro">HTML & CSS</p>
//         <img src={oldagram} alt="" className="intro__img" />
//       </section>

//       <div className="portfolio-item-individual">
//         <div>
//           <a className="" target="_blank" href="#">
//             <i className="fab fa-github"></i> GitHub Repo
//           </a>
//           <a className="" target="_blank" href="#">
//             <i className="fas fa-eye"></i> Live version{' '}
//           </a>
//         </div>
//         <p>
//           This is the main layout of an Instagram clone. It is built using
//           vanilla CSS, and is utilizing Flexbox, CSS Grid, and CSS Variables. It
//           was built as a part of Scrimbas Frontend Developer Career Path.
//         </p>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
//           amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
//           incidunt?
//         </p>
//         <p>
//           Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
//           molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
//           magnam ipsum eius earum?
//         </p>
//       </div>
//     </>
//   )
// }


 