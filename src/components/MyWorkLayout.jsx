import { NavLink, Outlet } from 'react-router-dom'

export default function MyWorkLayout() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

  return (
    <>
      <nav>
        <NavLink
          to="/myWork"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          All
        </NavLink>

        <NavLink
          to="/myWork/react"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          React
        </NavLink>

        <NavLink
          to="/myWork/javaScript"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          JavaScript
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
