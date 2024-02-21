import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import './styles/components/scrollToTop.sass'

const ScrollToTop = () => {

    const [wasScrolled, setWasScrolled] = useState(false)

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleScroll = () => {
        const { scrollHeight, clientHeight } = document.documentElement;
        const isBottom = window.scrollY + clientHeight >= scrollHeight;

        setWasScrolled(isBottom);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toTop = () => {
        document.documentElement.style.scrollBehavior = 'smooth';

        setTimeout(() => {
            window.scrollTo(0, 0);
            
            document.documentElement.style.scrollBehavior = 'auto';
        }, 0);
    }

    return (
        <>
            {wasScrolled && (
                <MdKeyboardDoubleArrowUp className="to-top" onClick={toTop} />
            )}
        </>
    )
};

export default ScrollToTop;