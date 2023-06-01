import {Link, NavLink} from 'react-router-dom'
import devMJ from '../assets/devMJLogo.png'



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
            <img src={devMJ} alt="MJ logo" />
          </Link>
        </div>

        <nav>
          <NavLink 
            to="myservices"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            My Services
          </NavLink>

          <NavLink 
            to="aboutme"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About Me
          </NavLink>

          <NavLink 
            to="mywork"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            My Work
          </NavLink>
        </nav>
      </header>
    )
}

