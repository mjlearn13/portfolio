import { useEffect, useState } from 'react'
import mjHeadShot from '../assets/mjPhotos/mj-headShot.jpg'
import mjBjj from '../assets/mjPhotos/mj-bjj.jpeg'
import reactLogo from '../assets/logos/reactLogo.png'
import javaScriptLogo from '../assets/logos/javaScriptLogo.png'
import cssLogo from '../assets/logos/cssLogo.png'
import firebaseLogo from '../assets/logos/firebaseLogo.png'
import gitLogo from '../assets/logos/gitLogo.png'
import githubLogo from '../assets/logos/githubLogo.png'
import htmlLogo from '../assets/logos/htmlLogo.png'

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

      <section className="tech-stack">
        <h3 className="logos-heading">🛠️ Tech Stack</h3>
        <div className="logos-container">
          <a href="https://react.dev/">
            <img src={reactLogo} title="React" alt="React Logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img src={cssLogo} title="CSS3" alt="CSS Logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img src={htmlLogo} title="HTML5" alt="HTML Logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
            <img
              src={javaScriptLogo}
              title="JavaScript"
              alt="JavaScript Logo"
            />
          </a>
          <a href="https://firebase.google.com/">
            <img src={firebaseLogo} title="Firebase" alt="Firebase Logo" />
          </a>
          <a href="https://git-scm.com/">
            <img src={gitLogo} title="Git" alt="Git Logo" />
          </a>
          <a href="https://github.com/mjlearn13">
            <img src={githubLogo} title="Github Logo" alt="Github Logo Logo" />
          </a>
          <a href="https://reactrouter.com/en/main">
            <img
              src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-router-logo.png"
              title="React Router"
              alt="React Router Logo"
            />
          </a>
        </div>
      </section>

      <section className="about-me">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Front-End Developer and martial artist from Berkshire, U.K.
        </p>

        <div>
          <p>
            I&apos;m a Front-End React Developer based out of Berkshire, UK. My
            specialities include React JS, JavaScript, CSS and HTML. My focus is
            on developing user-friendly web applications with a strong emphasis
            on responsiveness.
          </p>
          <p>
            I&apos;m passionate, self-motivated and eager to learn and develop.
          </p>
          <p>
            I was a London Fire-Fighter for 14 years and also a plumber,
            carrying out heating and gas work. I have an Associate in
            Specialised Technology degree in Personal Computer and Network
            Technology from Allentown Business School. I&apos;m a purple belt in
            Brazilian Jiu-Jitsu and a wrestler.
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
