export default function Footer(){
    return (
           <footer className="footer">
                <a href="mailto:mjlearn13@gmail.com" className="footer__link">mjlearn13@gmail.com</a>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://linkedin.com">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://github.com">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </footer>
    )
}