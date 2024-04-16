import { useState } from 'react'

import '../styles/components/pages/about/about.sass'

const About = () => {

    const [cvIsOpen, setCvIsOpen] = useState(false)

    const handleClick = () => {
        setCvIsOpen(true)
    }

    const handleOutsideClick = (e) => {
        !e.target.matches('img') ? setCvIsOpen(false) : ''
    }

    const download = () => {
        const downloadLink = document.createElement('a')
        downloadLink.href = '/imgs/curriculum/CV.pdf'
        downloadLink.download = 'Lucas-AdM.pdf'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    return (
        <section>
            <div className="container-about">
                <div className="background">
                    <div className="button">
                        <button onClick={handleClick}>Curriculum</button>
                        <div className={`curriculum ${cvIsOpen ? 'open' : ''}`} onClick={handleOutsideClick}>
                            <img src="/imgs/curriculum/CV.png" alt="Imagem do curriculum" />
                            <button onClick={download}>Download</button>
                        </div>
                    </div>
                </div>
                <div className="history">
                    <div className="title-history">
                        <p>Um pouco da minha história</p>
                        <hr className="hr-1" />
                        <hr className="hr-2" />
                    </div>
                    <div className="history-blocks">
                        <div className="history-block">
                            <div className="title-block">
                                <h4>Quem sou?</h4>
                            </div>
                            <div className="info-block">
                                <p>Sou Lucas Aguiar de Moraes, natural de Santa Rita do Sapucaí, MG. Vascaíno desde sempre. Fui autodidata para aprender Inglês e Design, hoje me aprofundo na programação.</p>
                                <br />
                                <i>Que honra ser!</i>
                            </div>
                        </div>
                        <div className="history-block">
                            <div className="title-block">
                                <h4>Primeiro contato</h4>
                            </div>
                            <div className="info-block">
                                <p>Foi no mundo dos jogos que tive meu primeiro contato com programação, jamais esquecerei do saudoso Minecraft que me introduziu ao universo <strong>Java</strong> e suas funções.</p>
                                <br />
                                <i>time set 0</i> <i>keepInventory true</i>
                            </div>
                        </div>
                        <div className="history-block">
                            <div className="title-block">
                                <h4>Iniciação</h4>
                            </div>
                            <div className="info-block">
                                <p>Foi em uma Escola Técnica que aprendi os fundamento de Desenvolivmento de Sitemas, experenciei pela primeira vez uma <strong>Base de Dados</strong>, <strong>POO</strong>, <strong>Back-End</strong> e <strong>Front-End</strong>.</p>
                                <br />
                                <i>TRUNCATE TABLE GAVEA;</i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About