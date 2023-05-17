import { Link, Outlet } from 'react-router-dom'

export default function MyWorkLayout() {
  return (
    <>
      <nav>
        <Link to="/myWork">React</Link>
        <Link to="/myWork/javaScript">JavaScript</Link>
      </nav>
      <Outlet />
    </>
  )
}
