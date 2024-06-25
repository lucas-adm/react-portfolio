import Icons from '../components/icons'

import '../styles/components/pages/experience/experience.sass'

const Experience = () => {
    return (
        <section>
            <div className="container-section">
                <div className="title">
                    <span>Minha experiência através de</span>
                    <h2>Projetos pessoais.</h2>
                </div>
                <div className="container-projects">

                    <div className="project">
                        <h3>Posts (Front-End)</h3>
                        <a href="https://srs-posts.onrender.com" target="_blank"><img src="imgs/projects/Posts-frontend.png" alt="Imagem da rede social Posts" /></a>
                        <p>Rede Social ou Microblog construído utilizando TypeScript e React consumindo uma RESTful API feita em Java 17 e armazenando dados em uma base PostgreSQL</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="TypeScript" name="TypeScript" w="50" h="50" />
                                <Icons src="React" name="React" w="50" h="50" />
                                <Icons src="Redux" name="Redux" w="50" h="50" />
                                <Icons src="Sass" name="Sass" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://srs-posts.onrender.com" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/react-posts" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <h3>Posts (Back-End)</h3>
                        <a href="https://api-srs-posts.onrender.com" target="_blank"><img src="imgs/projects/Posts-backend.png" alt="Imagem da interface Swagger para a Restful API de Posts" /></a>
                        <p>RESTful API para uma rede social e microblog, construída em Arquitetura Hexagonal em Java 17 utilizando Spring Boot 3 e os serviços de mensageria de CloudAMQP, API documentada pelo SpringDoc</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="PostgreSQL" name="PostgreSQL" w="50" h="50" />
                                <Icons src="Java" name="Java" w="50" h="50" />
                                <Icons src="Spring" name="Spring" w="50" h="50" />
                                <Icons src="JWT" name="JWT" w="50" h="50" />
                                <Icons src="RabbitMQ" name="RabbitMQ" w="50" h="50" />
                                <Icons src="OpenAPI" name="OpenAPI" w="50" h="50" />
                                <Icons src="Docker" name="Docker" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://posts-i9sv.onrender.com/swagger-ui.html" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/springboot-posts" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <h3>Quiz</h3>
                        <a href="https://dio-angular-quiz.onrender.com/" target="_blank"><img src="imgs/projects/Quiz.png" alt="Imagem do Quiz feito com Angular" /></a>
                        <p>Réplica do quiz do BuzzFeed feita utilizando Angular e TypeScript</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="JavaScript" name="JavaScript" w="50" h="50" />
                                <Icons src="Angular" name="Angular" w="50" h="50" />
                                <Icons src="TypeScript" name="TypeScript" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://dio-angular-quiz.onrender.com/" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/dio-challenge-angular-quiz" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <h3>Blog</h3>
                        <a href="https://angular-blog-2mq9.onrender.com/" target="_blank"><img src="imgs/projects/Blog.png" alt="Imagem do Blog feito com Angular" /></a>
                        <p>Blog responsivo feito com Angular e TypeScript com carregamento dinâmico geral e individual para cada artigo vindo de um DB artificial.</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="JavaScript" name="JavaScript" w="50" h="50" />
                                <Icons src="Angular" name="Angular" w="50" h="50" />
                                <Icons src="TypeScript" name="TypeScript" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://angular-blog-2mq9.onrender.com/" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/dio-challenge-angular-blog" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience