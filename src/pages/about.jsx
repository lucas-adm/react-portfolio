import '../styles/components/pages/about/about.sass'

const About = () => {
    return (
        <section>
            <div className="container-about">
                <div className="background"></div>
                <div className="button">
                    <button>Curriculum</button>
                    {/* <div className="curriculum"> */}
                        {/* <img src="" alt="" /> */}
                    {/* </div> */}
                </div>
                <div className="history">
                    <div className="title-history">
                        <p>Um pouco da minha história</p>
                        <hr className="hr-1"/>
                        <hr className="hr-2"/>
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
                                <i>set timeout 0</i> <i>keepInventory true</i>
                            </div>
                        </div>
                        <div className="history-block">
                            <div className="title-block">
                                <h4>Interesse</h4>
                            </div>
                            <div className="info-block">
                                <p>Foi em uma Escola Técnica que aprendi os fundamento de Desenvolivmento de Sitemas, experenciei pela primeira vez uma <strong>Base de Dados</strong>, <strong>POO</strong>, <strong>Back-End</strong> e <strong>Front-End</strong>.</p>
                                <br />
                                <i>TRUNCATE * FROM GAVEA</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About