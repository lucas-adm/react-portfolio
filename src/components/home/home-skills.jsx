import Icons from '../icons'

import '../../styles/components/pages/home/home-skills.sass'

const HomeSkills = () => {
    return (
        <section>
            <div className="section-skills">
                <div className="container-title">
                    <span>Minhas habilidades.</span>
                    <h2>Tech Stack.</h2>
                </div>
                <div className="container-skills">
                    <div className="container-areas">
                        <div className="container-area">
                            <h3>Back-End</h3>
                            <div className="container-languages">
                                <div className="strong-languages">
                                    <h4>Fortes</h4>
                                    <div className="languages">
                                        <Icons src="MySQL" name="MySQL" w="50" h="50" />
                                        <Icons src="Java" name="Java" w="60" h="60" />
                                        <Icons src="Spring" name="Spring" w="60" h="60" />
                                        <Icons src="Node" name="Node.js" w="60" h="60" />
                                        <Icons src="Puppeteer" name="Puppeteer" w="50" h="66.6" />
                                        <Icons src="Docker" name="Docker" w="60" h="60" />
                                    </div>
                                </div>
                                <div className="weak-languages">
                                    <h4>Desenvolvendo</h4>
                                    <div className="languages">
                                        <Icons src="PostgreSQL" name="PostgreSQL" w="60" h="60" />
                                        <Icons src="Python" name="Python" w="60" h="60" />
                                        <Icons src="Anaconda" name="Anaconda" w="60" h="60" />
                                        <Icons src="Express" name="Express.js" w="60" h="60" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-area">
                            <h3>Front-End</h3>
                            <div className="container-languages">
                                <div className="strong-languages">
                                    <h4>Fortes</h4>
                                    <div className="languages">
                                        <Icons src="JavaScript" name="JavaScript" w="66.6" h="66.6" />
                                        <Icons src="Sass" name="Sass" w="60" h="60" />
                                        <Icons src="React" name="React" w="60" h="60" />
                                    </div>
                                </div>
                                <div className="weak-languages">
                                    <h4>Desenvolvendo</h4>
                                    <div className="languages">
                                        <Icons src="TypeScript" name="TypeScript" w="66.6" h="66.6" />
                                        <Icons src="Angular" name="Angular" w="60" h="60" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-invite">
                        <h3>Confira meus projetos</h3>
                        <p>Navegue até a seção de experiência para visualizar meus projetos mais completos!</p>
                        <button>Ver seção</button>
                        <p>Ou se preferir poderá visualizar todos os meus repositórios de projetos pessoais finalizados dos mais antigos ao mais atuais.</p>
                        <a href="https://github.com/lucas-adm?tab=repositories" target="_blank"><button>Ver repositórios</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSkills