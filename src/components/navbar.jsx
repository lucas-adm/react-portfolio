import { FaBars } from 'react-icons/fa'

import '../styles/components/header.sass'

const navbar = () => {
    return (
        <header>
            <nav>
                <div className="name">
                    <a href="/">
                        <h1 className="alvinegro">Lucas</h1>
                        <h1 className="gradient">AdM</h1>
                    </a>
                </div>
                <FaBars/>
                <ul>
                    <a href="/"><li>Sobre</li></a>
                    <a href="/"><li>Experiência</li></a>
                    <a href="/"><li>Certificados</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default navbar