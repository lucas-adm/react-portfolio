import { useState, useEffect } from 'react';

import { FaBars } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";

import '../styles/components/header.sass'

const Navbar = () => {

    const [isScrolling, setIsScrolling] = useState(false)

    const handleScroll = () => {
        window.scrollY > 0 ? setIsScrolling(true) : setIsScrolling(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${isScrolling ? 'scrolling' : ''}`}>
            <nav>
                <div className={`name ${isMenuOpen ? 'open' : ''}`}>
                    <a href="/">
                        <h1 className="alvinegro">Lucas</h1>
                        <h1 className="gradient">AdM</h1>
                    </a>
                </div>
                <div className='icons' onClick={toggleMenu}>
                    <FaBars className={`bars ${isMenuOpen ? 'open' : ''}`} />
                    <IoMdClose className={`close ${isMenuOpen ? 'open' : ''}`} />
                </div>
                <ul className={isMenuOpen ? 'open' : ''}>
                    <a href="/"><li>Sobre</li></a>
                    <a href="/"><li>Experiência</li></a>
                    <a href="/"><li>Certificados</li></a>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar