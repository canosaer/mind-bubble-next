import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {auth, strapiBaseUrl} from '../../strapi/api'

export default function Events() {

    const  [ events, setEvents ] = useState([])

    const getEvents = async () => {
        try{
            const response = await axios.get(`${strapiBaseUrl}/api/events/preview`, auth)
            setEvents(response || ['no data'])
            console.log(response)
        } catch(err) {
            console.log(err.message, err.code)
        }
    }

    useEffect(() => {
        if(events.length < 1){
            getEvents()
        }
    }, [events])

    return(
        <section className="upcoming">
            <h3 className="upcoming__heading">Upcoming Events</h3>
            <div id="upcoming-events" className="py-16">
                <table className="upcoming-events">
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>When</th>
                            <th>Summary</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            &nbsp;					</td>
                            <td>June 22, 2022 at 6:15 pm &ndash; 8:15 pm</td>
                            <td>
                            Wednesday Tutoring					</td>
                            <td>
                            &nbsp;					</td>
                        </tr>
                        <tr>
                            <td>
                            &nbsp;					</td>
                            <td>June 26, 2022 at 2:00 pm &ndash; 4:00 pm</td>
                            <td>
                            Sunday Tutoring					</td>
                            <td>
                            &nbsp;					</td>
                        </tr>
                        <tr>
                            <td>
                            &nbsp;					</td>
                            <td>June 28, 2022 at 6:15 pm &ndash; 8:15 pm</td>
                            <td>
                            Wednesday Tutoring					</td>
                            <td>
                            &nbsp;					</td>
                        </tr>
                    </tbody>
                </table>
                    
            </div>
        </section>

    )
}