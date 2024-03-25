import { Link } from 'react-router-dom'

import '../../styles/components/pages/home/home-skills.sass'

const HomeSkills = () => {
    return (
        <section>
            <div className="section-skills">
                <div className="container-title">
                    <span>não é só código, é também</span>
                    <h2>Filosofia.</h2>
                </div>
                <div className="container-skills">
                    <div className="container-concepts">
                        <div className="concept">
                            <img width="55px" height="55px" src="https://www.svgrepo.com/show/288169/layer.svg" alt="Ícone de camadas" />
                            <h4>Arquitetura</h4>
                            <p>Já tendo compreendido os fundamentos de uma <strong>API RESTful</strong> e <strong>Microservices</strong>, venho aprimorando minha abstração em camadas, estudando o padrão <strong>MVC</strong>, <strong>Onion</strong> e <strong>Hexagonal</strong>.</p>
                        </div>
                        <div className="concept">
                            <img width="55px" height="55px" src="https://www.svgrepo.com/show/494585/clean-code-program.svg" alt="Ícone de clean code" />
                            <h4>Clean Code</h4>
                            <p>Desde o ínicio aprendi a importância de um código limpo, por isso sempre busco respeitar os cinco princípios <strong>S.O.L.I.D</strong> e os princípios de uma <strong>Clean Architeture</strong>.</p>
                        </div>
                        <div className="concept">
                            <img width="55px" height="55px" src="https://www.svgrepo.com/show/420618/developer-development-object.svg" alt="Ícone de programação orientada a objetos" />
                            <h4>Orientação</h4>
                            <p>Praticando com a <strong>Programação Orientada à Objetos</strong> desde o início, hoje estou na jornadada de me aprofundar na <strong>Programação Orientada à Eventos</strong>.</p>
                        </div>
                        <div className="concept">
                            <img width="55px" height="55px" src="https://www.svgrepo.com/show/424458/problem-process-solution.svg" alt="Ícone de paradigmas" />
                            <h4>Paradigma</h4>
                            <p>Valorizando o início na mesma medida que o final, comecei a me atentar à padrões de projeto como <strong>API First, BFF, TDD, DDD</strong>, para um processo mais efetivo.</p>
                        </div>
                    </div>
                    <div className="container-invite">
                        <h3>Confira meus projetos</h3>
                        <p>Navegue até a seção de experiência para visualizar meus projetos mais completos!</p>
                        <Link to="/experiencia">seção</Link>
                        <p>Ou se preferir poderá visualizar todos os meus repositórios de projetos pessoais finalizados dos mais antigos ao mais atuais.</p>
                        <a href="https://github.com/lucas-adm?tab=repositories" target="_blank">repositórios</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSkills