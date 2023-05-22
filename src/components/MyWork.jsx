import {Link, NavLink, useOutletContext} from 'react-router-dom'



export default function MyWork(){
  const {allData} = useOutletContext()

  const allProjectElements = allData.map(project => {
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
          to="react"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          React
        </NavLink>

        <NavLink
          to="javaScript"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          JavaScript
        </NavLink>
      </nav>

      <div className="portfolio">{allProjectElements}</div>
    </section>
  )
}

