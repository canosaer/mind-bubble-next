export default function Programs() {


    return(
        <section className="featured-programs">
            {/* <h2 className="featured-programs__heading">{featuredPrograms.heading}</h2>

            {featuredPrograms.programs.map((program, i) => {
                const programKey = `program--${i}`
                const topCardClass = `program__card ${i%2==0 ? "program__card_top-left" : "program__card_top-right"}`
                const spotlightCardClass = `program__card ${i%2==0 ? "program__card_right-spotlight" : "program__card_left-spotlight"}`
                const bottomCardClass = `program__card ${i%2==0 ? "program__card_bottom-left" : "program__card_bottom-right"}`

                return(
                    <div key={programKey} className="width-fixer">
                        <div className="program">
                            <h3 className="program__heading">{program.heading}</h3>
                            <p className="program__caption">{program.caption}</p>

                            {program.cards.map((card, i) => {
                                const cardKey = `card--${i}`
                                let cardClass = ''

                                if(i===0) cardClass = topCardClass
                                else if(i===1) cardClass = spotlightCardClass
                                else cardClass = bottomCardClass
                              
                                return(
                                    <a href={card.link} className={cardClass}>
                                        <figure className="program__image-slot">
                                            <img className="program__card-image" src={card.image} loading="lazy" alt="program card" />
                                        </figure>
                                        {card.spotlight ?
                                            <div className="program__card-description">
                                                <h4 className="program__card-heading">{card.heading}</h4>
                                                <p className="program__card-text">{card.text}</p>
                                            </div>
                                            
                                            :

                                            <h4 className="program__card-heading">{card.heading}</h4>
                                        }
                                    </a>
                                )
                            })}

                            <a className="program__button" href="#">Learn more about {program.name} </a>
                        </div>
                    </div>
                )              
            })}
 */}

            
        </section>
    )
}