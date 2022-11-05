import hero from '../../img/hero.jpg'

export default function Hero() {


    return(
        <section className="hero">
            <img className="hero__image" src={hero} alt="hero image" />
            <h1 className="hero__heading">Mind Bubble</h1>
            <h2 className="hero__subheading">Tutoring, Workshops, and Games</h2>

            <div className="hero__menu">
                <h2 className="hero__cta">Join our light-hearted learning community!</h2>
                <a href="#" className="hero__button">Sign Up a Student</a>
                <a href="#" className="hero__last-button">Sign Up to Volunteer</a>
            </div>
            
        </section>
    )
}