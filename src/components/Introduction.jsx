import mj1 from '../assets/mj-1.jpg'

export default function Introduction() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Manmeet Johal</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Front-End Developer
      </p>
      <img
        src={mj1}
        alt="a picture of Jane Smith smiling"
        className="intro__img"
      />
    </section>
  )
}
