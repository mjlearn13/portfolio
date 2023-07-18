export default function Footer(){
    return (
      <footer className="footer">
        <a href="mailto:mjlearn13@gmail.com" className="footer__link">
          mjlearn13@gmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mjlearn13/"
              aria-label="Go to mjlearn13 Linkedin account"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mjlearn13"
              aria-label="Go to mjlearn13 Github account"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
}