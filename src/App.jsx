import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import MyServices from './components/MyServices'
import MyWork from './components/MyWork'
import Project from './components/Project'
import Layout from './components/Layout'
import NotFound from './components/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path="myservices" element={<MyServices />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="mywork" element={<MyWork />}/>
          <Route path="mywork/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

