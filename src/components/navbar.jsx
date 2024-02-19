import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FaBars } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";

import '../styles/components/header.sass'

const Navbar = () => {

    const location = useLocation()

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
        <header className={`${isScrolling ? 'scrolling' : ''} ${location.pathname.startsWith('/sobre') ? 'scrolling' : ''}`}>
            <nav>
                <div className={`name ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/">
                        <h1 className="alvinegro">Lucas</h1>
                        <h1 className="gradient">AdM</h1>
                    </Link>
                </div>
                <div className='icons' onClick={toggleMenu}>
                    <FaBars className={`bars ${isMenuOpen ? 'open' : ''}`} />
                    <IoMdClose className={`close ${isMenuOpen ? 'open' : ''}`} />
                </div>
                <ul className={isMenuOpen ? 'open' : ''}>
                    <Link to="/sobre"><li>Sobre</li></Link>
                    <Link to="/experiencia"><li>Experiência</li></Link>
                    <Link to="/certificados"><li>Certificados</li></Link>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar