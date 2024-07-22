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

        setIsMenuOpen(false);

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [location])

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${isScrolling ? 'scrolling' : ''} ${location.pathname.startsWith('/sobre') ? 'scrolling' : ''}`}>
            <nav className={`${isMenuOpen ? "open" : ""}`}>
                <div className={`name ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/">
                        <h1 className="alvinegro">Lucas</h1>
                        <h1 className="gradient">AdM</h1>
                    </Link>
                </div>
                <div className='icons' onClick={toggleMenu}>
                    <FaBars className={`bars ${isMenuOpen ? 'open' : ''}`} />
                </div>
                <ul className={isMenuOpen ? 'open' : ''}>
                    <Link to="/sobre"><li>Sobre</li></Link>
                    <Link to="/experiencia"><li>Experiência</li></Link>
                    <Link to="/certificados"><li>Certificados</li></Link>
                    {/* <Link to="/reviews"><li>Reviews</li></Link> */}
                </ul>
            </nav>
        </header >
    )
}

export default Navbar