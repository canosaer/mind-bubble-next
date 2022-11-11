import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {auth, strapiBaseUrl} from '../../strapi/api'
import Link from 'next/link'
import Image from 'next/image'

export default function Programs() {

    const  [ featuredPrograms, setFeaturedPrograms ] = useState([])

    const getFeaturedPrograms = async () => {
        try{
            const response = await axios.get(`${strapiBaseUrl}/api/featured-programs?populate=*&sort=order`, auth)
            setFeaturedPrograms(response.data.data || ['no data'])
            console.log(response.data.data)
        } catch(err) {
            console.log(err.message, err.code)
        }
    }

    useEffect(() => {
        if(featuredPrograms.length < 1){
            getFeaturedPrograms()
        }
    }, [featuredPrograms])


    return(
        <section className="featured-programs">
            <h2 className="featured-programs__heading">Fostering a Love of Learning</h2>

            {featuredPrograms.map((program, i) => {
                const programKey = `program--${program.id}`
                const topCardClass = `program__card ${i%2==0 ? "program__card_top-left" : "program__card_top-right"}`
                const spotlightCardClass = `program__card ${i%2==0 ? "program__card_right-spotlight" : "program__card_left-spotlight"}`
                const bottomCardClass = `program__card ${i%2==0 ? "program__card_bottom-left" : "program__card_bottom-right"}`

                return(
                    <div key={programKey} className="width-fixer">
                        <div className="program">
                            <h3 className="program__heading">{program.attributes.mainHeading}</h3>
                            <p className="program__caption">{program.attributes.caption}</p>
                            <Link href={program.attributes.detailLink1}><a className={topCardClass}>
                                <figure className="program__image-slot">
                                    <Image className="program__card-image" priority layout="fill" src={`${strapiBaseUrl}${program.attributes.detailImage1.data.attributes.url}`} alt="program card" />
                                </figure>
                                <h4 className="program__card-heading">{program.attributes.detailHeading1}</h4>
                            </a></Link>
                            <Link href={program.attributes.spotlightLink}><a className={spotlightCardClass}>
                                <figure className="program__image-slot">
                                    <Image className="program__card-image" priority layout="fill" src={`${strapiBaseUrl}${program.attributes.spotlightImage.data.attributes.url}`} alt="program card" />
                                </figure>
                                <div className="program__card-description">
                                    <h4 className="program__card-heading">{program.attributes.spotlightHeading}</h4>
                                    <p className="program__card-text">{program.attributes.spotlightText}</p>
                                </div>
                            </a></Link>
                            <Link href={program.attributes.detailLink2}><a className={bottomCardClass}>
                                <figure className="program__image-slot">
                                    <Image className="program__card-image" priority layout="fill" src={`${strapiBaseUrl}${program.attributes.detailImage2.data.attributes.url}`} alt="program card" />
                                </figure>
                                <h4 className="program__card-heading">{program.attributes.detailHeading2}</h4>
                            </a></Link>

                            <a className="program__button" href="#">Learn more about {program.attributes.name} </a>
                        </div>
                    </div>
                )              
            })}


            
        </section>
    )
}