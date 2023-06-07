import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MyServices() {
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
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design</h3>
          <p>
            I strive to create beautiful and intuitive web apps, with both
            aestetics and usability in mind.
          </p>
        </div>

        <div className="service">
          <h3>Development</h3>
          <p>
            I am a versatile frontend developer with a speciality in React JS. I
            also have a solid grip of the fundamentals of web development using
            HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      <div className="service">
        <h3>Development</h3>
        <p>
          I am a versatile frontend developer with a speciality in React JS. I
          also have a solid grip of the fundamentals of web development using
          HTML, CSS, and JavaScript.
        </p>
      </div>

      <Link to="../mywork" className="btn btn-myServices">
        Projects
      </Link>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </section>
  )
}
