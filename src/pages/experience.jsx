import Icons from '../components/icons'

import '../styles/components/experience/experience.sass'

import imgHotel from '../imgs/projects/Hotel.png'
import imgMoviesLib from '../imgs/projects/MoviesLib.png'
import imgBlog from '../imgs/projects/Blog.png'
import imgPokedex from '../imgs/projects/Pokedex.png'
import imgForum from '../imgs/projects/Forum.png'

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
                        <h3>Hotel Alura</h3>
                        <a href="https://one-challenge-hotel.onrender.com" target="_blank"><img src={imgHotel} alt="Imagem do Hotel Alura" /></a>
                        <p>Aplicação Full Stack para o cadastro de reservas e hóspedes em um hotel utilizando Spring Boot 3</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="PostgreSQL" name="PostgreSQL" w="50" h="50" />
                                <Icons src="Java" name="Java" w="50" h="50" />
                                <Icons src="Spring" name="Spring" w="50" h="50" />
                                <Icons src="JavaScript" name="JavaScript" w="50" h="50" />
                                <Icons src="Docker" name="Docker" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://one-challenge-hotel.onrender.com" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/one-challenge-springboot-hotel" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <h3>Movies Lib</h3>
                        <a href="https://react-vite-imdb.onrender.com" target="_blank"><img src={imgMoviesLib} alt="Imagem do site Movies Lib" /></a>
                        <p>Aplicação feita com React+Vite utilizando a RESTful API de IMDb para fim de estudo</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="JavaScript" name="JavaScript" w="50" h="50" />
                                <Icons src="React" name="React" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://react-vite-imdb.onrender.com" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/react-vite-imdb" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <h3>Pokédex</h3>
                        <a href="https://lucas-adm.github.io/dio-challenge-javascript-pokedex/" target="_blank"><img src={imgPokedex} alt="Imagem do Pokémon Zangoose" /></a>
                        <p>Aplicação feita em Vanilla JS consumindo a RESTful API de PokéAPI</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="JavaScript" name="JavaScript" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://lucas-adm.github.io/dio-challenge-javascript-pokedex/" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/dio-challenge-javascript-pokedex" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <h3>Fórum Alura</h3>
                        <a href="https://forum-cg7l.onrender.com/swagger-ui.html" target="_blank"><img src={imgForum} alt="Imagem da interface Swagger para a API Rest do Fórum Alura" /></a>
                        <p>API REST simbolizando o fórum Alura disponibilizado para usuários postarem perguntas e respostas</p>
                        <div className="container-languages">
                            <span>Tecnologia utilizada</span>
                            <div className="language">
                                <Icons src="PostgreSQL" name="PostgreSQL" w="50" h="50" />
                                <Icons src="Java" name="Java" w="50" h="50" />
                                <Icons src="Spring" name="Spring" w="50" h="50" />
                                <Icons src="Docker" name="Docker" w="50" h="50" />
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="https://forum-cg7l.onrender.com/swagger-ui.html" target="_blank"><button>Site</button></a>
                            <a href="https://github.com/lucas-adm/one-challenge-springboot-forum" target="_blank"><button>Repositório</button></a>
                        </div>
                    </div>

                    <div className="project">
                        <h3>Blog</h3>
                        <a href="https://angular-blog-2mq9.onrender.com/" target="_blank"><img src={imgBlog} alt="Imagem do Blog feito com Angular" /></a>
                        <p>Blog responsivo feito com Angular e TypeScript com carregamento dinâmico geral e individual para cada artigo vindo de um DB artificial localizado em: src/app/pages/data e utilizando o conceito SPA</p>
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