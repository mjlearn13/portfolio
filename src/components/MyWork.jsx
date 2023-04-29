import oldagramSquare from '../assets/oldagram-square.png'
import tenzies from '../assets/tenzies.jpg'
import passwordGenerator from '../assets/password-generator.jpg'
import memeGenerator from '../assets/meme-generator.jpg'
import personalDashboard from '../assets/personal-dashboard.png'
import experiences from '../assets/experiences.png'

export default function MyWork(){
    return (
         <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
               
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src={oldagramSquare} alt="" className="portfolio__img"/>
                </a>
                
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src={tenzies} alt="" className="portfolio__img"/>
                </a>
                
              
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src={passwordGenerator} alt="" className="portfolio__img"/>
                </a>
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src={memeGenerator} alt="" className="portfolio__img"/>
                </a>
                
               
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src={personalDashboard} alt="" className="portfolio__img"/>
                </a>
                
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src={experiences} alt="" className="portfolio__img"/>
                </a>
                

            </div>
        </section>
    )
}