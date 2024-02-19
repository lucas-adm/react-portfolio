import '../../styles/components/pages/home/home-formation.sass'

const HomeFormation = () => {
    return (
        <section>
            <div className="container-formation">
                <div className="container-title">
                    <span>Experiência técnica.</span>
                    <h2>Formação.</h2>
                </div>
                <div className="container-details">
                    <details open>
                        <summary><a href="https://www.fiemg.com.br/senai/unidades/senai-santa-rita-do-sapucai-cdtsve-stefan-bogdan-salej/" target="_blank"><h4>Escola Técnica</h4></a></summary>
                        <span><strong>2023 -</strong> Concluí um curso técnico de nível médio onde tive meu primeiro contato com POO utilizando Java, persistir dados em uma base de dados e utilizar a tríde básica do Front-End.</span>
                    </details>
                    <details>
                        <summary><a href="https://www.oracle.com/br/education/oracle-next-education/" target="_blank"><h4>Oracle Next Education</h4></a></summary>
                        <span><strong>2023 -</strong> Me tornei AlumniONE por ter completado a trilha Back-End do Projeto ONE, formado pela união das empresas Oracle e Alura a fim de lançar desenvolvedores júnior ao mercado.</span>
                    </details>
                    <details>
                        <summary className="open"><a href="https://www.dio.me" target="_blank"><h4>DIO</h4></a></summary>
                        <span><strong>2024 -</strong> Concluí a trilha de estudos Front-End organizada pela parceia DIO e Banco Pan focada em Angular e TypeScript.</span>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default HomeFormation