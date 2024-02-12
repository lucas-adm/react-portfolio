import { FaGithub, FaLinkedinIn, FaWhatsapp, FaCopy } from 'react-icons/fa'

import '../styles/components/pages/home-profile.sass'

import avatar from '../imgs/Samurai.png'

const HomeProfile = () => {
    return (
        <section>
            <div className="container-apresentation">
                <div className="container-grid">
                    <div className="apresentation-text">
                        <h1>Desenvolvedor Back-end & <br /> Java Web.</h1>
                        <p>👋🏻 Olá mundo! Sou Lucas A. de Moraes. Após meu primeiro sysout(`Hello World!`) fui iniciado pela rota do cafézinho e dominei algumas das artes do Spring Boot, atualmente estou expandindo meu domínio também para o End.</p>
                        <div className="svgs">
                            <a href="https://github.com/lucas-adm" target="_blank"><FaGithub id="github" /></a>
                            <a href="https://www.linkedin.com/in/lucas-admoraes" target="_blank"><FaLinkedinIn id="in" /></a>
                            <a href="https://web.whatsapp.com/send/?phone=5535998963318" target="_blank"><FaWhatsapp id="wpp" /></a>
                            <div className="svg-email">
                                <button><FaCopy /></button>
                                <input type="text" value="vintesetelucas@gmail.com" disabled />
                                <div className="copied">
                                    <p>Copied to clipboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="apresentation-art">
                        <img src={avatar} alt="Profile picture" />
                        <div className="square-1"></div>
                        <div className="square-2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProfile