import {Link, NavLink} from 'react-router-dom'
import devJane from '../assets/devjane.png'


export default function Header(){
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={devJane} alt="Jane smiling" />
          </Link>
        </div>

        <nav>
          <NavLink 
            to="/myservices"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            My Services
          </NavLink>

          <NavLink 
            to="/aboutme"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About Me
          </NavLink>

          <NavLink 
            to="mywork/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            My Work
          </NavLink>

          <NavLink 
            to="/project"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Projects
          </NavLink>
        </nav>
      </header>
    )
}

