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
                        <summary><h4>Escola Técnica</h4></summary>
                        <span><strong>2023 -</strong> Concluí um curso técnico de nível médio onde tive meu primeiro contato com POO utilizando Java, persistir dados em uma base de dados e utilizar a tríde básica do Front-End.</span>
                    </details>
                    <details>
                        <summary><h4>Oracle Next Education</h4></summary>
                        <span><strong>2023 -</strong> Me tornei AlumniONE por ter completado a trilha Back-end do Projeto ONE, formado pela união das empresas Oracle e Alura a fim de lançar desenvolvedores júnior ao mercado.</span>
                    </details>
                    <details>
                        <summary className="open"><h4>Digital Innovation One</h4></summary>
                        <span><strong>2024 -</strong> Concluído o Bootcamp Front-end organizado pela parceia entre DIO e Banco Pan focado em Angular e TypeScript.</span>
                        <span><strong>2024 -</strong> Concluído o Bootcamp Back-end organizado pela parceia entre DIO e Tonnie focado em Java Frameworks e AWS.</span>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default HomeFormation