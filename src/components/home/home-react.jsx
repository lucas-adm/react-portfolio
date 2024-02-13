import { FaCode } from "react-icons/fa";

import Icons from '../icons'

import '../../styles/components/pages/home/home-react.sass'

const HomeReact = () => {
    return (
        <section>
            <div className="container">
                <div className="container-react">
                    <div className="title">
                        <span>Por quê</span>
                        <h2>React?</h2>
                    </div>
                    <div className="container-logo">
                        <div className="logo">
                            <Icons src="React" name="React" w="100" h="100" />
                            <hr className="hr-1" />
                            <hr className="hr-2" />
                        </div>
                    </div>
                    <p>Este portfólio foi desenvolvido na linguagem <strong>React</strong> e <strong>Sass</strong> para demonstrar conhecimento pessoal, garantir eficiência e torná-lo facilmente escalável</p>
                    <p>Para transimitir boa experiência ao usuário devemos nos atentar à atualidade, isto é, manejar o conceito de <strong>SPA</strong> e <strong>componentização</strong>.</p>
                    <p>Este projeto foi inspirado na criação de <a href="https://marcosramoss.dev" target="_blank">@Marcos Ramos</a>.</p>
                    <p>Você pode acesar o repositório clicando no botão abaixo.</p>
                    <a href="https://github.com/lucas-adm/react-profile" target="_blank"><button><FaCode /></button></a>
                </div>
            </div>
        </section>
    )
}

export default HomeReact