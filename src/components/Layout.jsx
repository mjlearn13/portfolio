import {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import allProjectData from '../allProjectsData'

export default function Layout() {
  const [allData, setAllData] = useState(null)

  useEffect(() => {
    setAllData(allProjectData)
  }, [])

  if(!allData){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Header />
      <Outlet context={{allData}}/>
      <Footer />
    </>
  )
}
