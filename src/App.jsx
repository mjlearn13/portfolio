import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import MyServices from './components/MyServices'
import MyWork from './components/MyWork'
import Project from './components/Project'
import Layout from './components/Layout'
import ReactWork from './components/ReactWork'
import JavaScriptWork from './components/JavaScriptWork'

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
          <Route path="mywork/react" element={<ReactWork />} />
          <Route path="mywork/javaScript" element={<JavaScriptWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

