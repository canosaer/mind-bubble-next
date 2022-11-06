// React Components
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import {useWindowSize} from '../utilities'

// Images
import search from '../../img/magnifying-glass.svg'

export default function Header() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    
    const windowSize = useWindowSize()

    const ref = useRef()

    const animateBars = (topToggle, middleToggle, bottomToggle, menuOpen) => {
        if(menuOpen){
            topToggle.style.top = '50%'
            topToggle.style.transform = 'rotate(-45deg) translateY(-50%)'
            middleToggle.style.display = 'none'
            bottomToggle.style.top = '50%'
            bottomToggle.style.transform = 'rotate(45deg) translateY(-50%)'
        }
        else{
            topToggle.style.top = '0%'
            topToggle.style.transform = ''
            middleToggle.style.display = 'block'
            bottomToggle.style.top = '80%'
            bottomToggle.style.transform = ''
        }
    }

    const toggleBurgerMenu = () => {
        
        const barContainer = ref.current.children[0].children[0].children[1].children[0].children[1]
        const topToggleBar = barContainer.children[0]
        const middleToggleBar = barContainer.children[1]
        const bottomToggleBar = barContainer.children[2]

        animateBars(topToggleBar, middleToggleBar, bottomToggleBar, !menuOpen)
        setMenuOpen(!menuOpen)        
    }

    const navMenu = (
        <>
            <li className="menu__item"><Link href="/"><a className="menu__link">Home</a></Link></li>
            <li className="menu__item"><Link href="#"><a className="menu__link">Tutoring</a></Link></li>
            <li className="menu__item"><Link href="#"><a className="menu__link">Workshops</a></Link></li>
            <li className="menu__item"><Link href="#"><a className="menu__link">About Us</a></Link></li>
            <li className="menu__item"><Link href="#"><a className="menu__link">Volunteer</a></Link></li>
            <li className="menu__item"><Link href="#"><a className="menu__link">Donate</a></Link></li>
        </>
    )


    return(
        <header className="header">
            <div className="nav" ref={ref}>
                { windowSize.width < 1200 ? 
                        <div onClick={toggleBurgerMenu}>
                            <Menu>
                                {navMenu}
                            </Menu>
                        </div>
                    :
                    <nav className="menu">
                        <ul className="menu__list">
                            {navMenu}
                        </ul> 
                    </nav>
                }
            </div>

            <figure className="logo">
                <a className="logo__link" href="#"></a>
            </figure>
            <form className="search-bar">
                <button className="search-bar__button">
                    <Image 
                        className="search-bar__button-icon"
                        src={search}
                        alt="search"
                        layout="fill"
                    />
                </button>
                <input className="search-bar__input" placeholder="Search" />
            </form>
        </header>
    )
}