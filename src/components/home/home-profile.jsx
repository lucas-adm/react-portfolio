import { useState, useEffect, useRef } from 'react'

import Typed from 'typed.js';

import { FaGithub, FaLinkedinIn, FaWhatsapp, FaCopy } from 'react-icons/fa'

import '../../styles/components/pages/home/home-profile.sass'

const HomeProfile = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Java Web", "React.js"],
            startDelay: 75,
            typeSpeed: 75,
            backSpeed: 75,
            backDelay: 75,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const [isCopied, setIsCopied] = useState(false)

    const handleCopyClick = () => {

        navigator.clipboard.writeText('vintesetelucas@gmail.com')

        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        }, 1000);
    }

    return (
        <section>
            <div className="container-apresentation">
                <div className="container-grid">
                    <div className="apresentation-text">
                        <h1>Desenvolvedor <br /> Full Stack <br /> <i ref={el}></i></h1>
                        <p><strong>sout</strong>("Olá mundo 👋🏻!"). Sempre em busca de conhecimento trilho o caminho do <strong>Full Stack</strong>, espero um dia fazer parte de um projeto revolucionário. </p>
                        <div className="svgs">
                            <a href="https://github.com/lucas-adm" target="_blank"><FaGithub id="github" /></a>
                            <a href="https://www.linkedin.com/in/lucas-admoraes" target="_blank"><FaLinkedinIn id="in" /></a>
                            <a href="https://web.whatsapp.com/send/?phone=5535998963318" target="_blank"><FaWhatsapp id="wpp" /></a>
                            <div className="svg-email">
                                <button onClick={handleCopyClick} onTouchEnd={handleCopyClick}><FaCopy /></button>
                                <input type="text" value="vintesetelucas@gmail.com" disabled />
                                <div className={`copied ${isCopied ? '' : 'none'}`}>
                                </div>
                                <p className={`${isCopied ? '' : 'none'}`} >copied to clipboard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="apresentation-art">
                        <div className="image">
                            <img src='/imgs/profile/aiphoto.png' alt="Profile picture" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProfile