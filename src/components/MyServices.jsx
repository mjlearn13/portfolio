import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MyServices() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    })
  }

  return (
    <section className="my-services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Development</h3>
          <p>
            As a Frontend Developer with 2 years of experience, I have a strong
            focus on frontend development using technologies such as HTML5,
            CSS3, JavaScript, React and React Router 6. I have good knowledge of
            the best practices for web design, user experience, and speed. I
            possess excellent problem-solving, communication and teamwork
            skills.
          </p>
        </div>

        <div className="service">
          <h3>Design</h3>
          <p>
            I strive to create beautiful and intuitive web apps, with both
            aesthetics and usability in mind.
          </p>
        </div>

        <div className="service">
          <h3>Ongoing Learning</h3>
          <p>
            I currently have a basic understanding of the frontend technologies
            like Typescript, Unit Testing, Figma and Markdown, however i&apos;m
            constantly learning and improving. I am passionate about using my
            knowledge and experience to help organisations achieve their goals
            through the use of technology.
          </p>
        </div>
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
