import { useEffect } from 'react'
import devJane from '../assets/devjane.png'


export default function Header(){

    // const navToggle = document.querySelector('.nav-toggle')
    // const navLinks = document.querySelectorAll('.nav__link')

   

    // useEffect(()=> {
    //     navToggle.addEventListener('click', () => {
    //       document.body.classList.toggle('nav-open')
    //     })
    // }, [])

    // useEffect(() => {
    //     function removeNavOpen() {
    //         document.body.classList.remove('nav-open')
    //     }

    //     navLinks.forEach((link) => {
    //       link.addEventListener('click', removeNavOpen)
    //       })

    //     return function(){
    //         navLinks.forEach((link) => {
    //           link.removeEventListener('click', removeNavOpen)
    //         })
    //     }

    // }, )

    return (
        <header>
            <div className="logo">
                <img src={devJane} alt="Jane smiling"/>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}