import { useEffect, useState } from 'react'
import mjHeadShot from '../assets/mj-headShot.jpg'
import mjBjj from '../assets/mj-bjj.jpeg'

export default function Introduction() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }

  return (
    <>
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Manmeet Johal</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Front-End Developer
        </p>
        <img src={mjHeadShot} alt="a picture of MJ" className="intro__img" />
      </section>

      <section className="about-me">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Front-End Developer and martial artist from Berkshire.
        </p>

        <div className="">
          <p>
            I'm a web developer based out of Berkshire, UK. My specialities
            include React JS, JavaScript, CSS and HTML. My focus is on
            developing user-friendly web applications with a strong emphasis on
            responsiveness.
          </p>
          <p>
            I'm a passionate and self-motivated developer who is eager to learn
            and develop.
          </p>
          <p>
            My background is in fire fighting and plumbing/heating/gas work. I
            have an Associate in Specialised Technology degree in Personal
            Computer and Network Technology from Allentown Business School. I'm
            a purple belt in Brazilian Jiu-Jitsu and have three adorable rabbits
            and a hamster.
          </p>
        </div>

        <img
          src={mjBjj}
          alt="MJ sparring against team mate"
          className="about-me__img"
        />

        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}
      </section>
    </>
  )
}
