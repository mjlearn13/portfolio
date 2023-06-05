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
            Services
          </NavLink>

          <NavLink 
            to="mywork"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Projects
          </NavLink>
        </nav>
      </header>
    )
}

