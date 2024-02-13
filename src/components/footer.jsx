import { Link } from 'react-router-dom'

import '../styles/components/footer.sass'

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="name">
                    <Link to="/">
                        <h1 className="alvinegro">Lucas</h1>
                        <h1 className="gradient">AdM</h1>
                    </Link>
                </div>
                <div className="footer-list">
                    <h2>Seção</h2>
                    <ul>
                        <Link to="/sobre"><li>Sobre</li></Link>
                        <Link to="/experiencia"><li>Experiências</li></Link>
                        <Link to="/certificados"><li>Certificados</li></Link>
                    </ul>
                </div>
                <div className="footer-list">
                    <h2>Contato</h2>
                    <ul>
                        <a href="https://web.whatsapp.com/send/?phone=5535998963318" target="_blank"><li className='underline'>+35 9 9896-3318</li></a>
                        <a href="https://www.linkedin.com/in/lucas-admoraes" target="_blank"><li className='underline'>in/lucas-admoraes</li></a>
                        <a href="mailto:vintesetelucas@gmail.com" ><li className='underline'>vintesetelucas@gmail.com</li></a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer