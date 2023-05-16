import {Link} from 'react-router-dom'
import devJane from '../assets/devjane.png'


export default function Header(){

    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={devJane} alt="Jane smiling" />
          </Link>
        </div>

        <nav>
          <Link to="/myservices">My Services</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="mywork/">My Work</Link>
          <Link to="/project">Projects</Link>
        </nav>
      </header>
    )
}

