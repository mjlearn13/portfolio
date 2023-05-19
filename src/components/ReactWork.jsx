import { Link } from 'react-router-dom'

export default function ReactWork() {
  return (
    <>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all projects</span>
      </Link>

      <h1>ReactWork</h1>
    </>
  )
}
