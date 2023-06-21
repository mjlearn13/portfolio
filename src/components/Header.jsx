import {Link, NavLink} from 'react-router-dom'
import devMJ from '../assets/logos/devMJLogo.png'



export default function Header(){
  const activeStyles = {
    textDecoration: 'underline',
    color: 'var(--color-dark)',
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

