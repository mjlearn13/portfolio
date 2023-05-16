import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import MyServices from './components/MyServices'
import MyWork from './components/MyWork'
import Project from './components/Project'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Introduction/>} />
          <Route path="/myservices" element={<MyServices/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/mywork" element={<MyWork/>} />
          <Route path="/project" element={<Project/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

 