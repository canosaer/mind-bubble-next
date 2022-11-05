// React Components
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import {useWindowSize} from '../utilities'

// Images
import search from '../../img/magnifying-glass.svg'

export default function Header() {

    const windowSize = useWindowSize()

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

            { windowSize.width < 1200 ? 
                <Menu>
                    {navMenu}
                </Menu>
                :
                <nav className="menu">
                    <ul className="menu__list">
                        {navMenu}
                    </ul> 
                </nav>
            }

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