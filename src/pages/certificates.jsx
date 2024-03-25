import CertificateImgs from '../components/certificates/certificates-imgs'

import '../styles/components/pages/certificates/certificates.sass'

const Certificates = () => {

    const alwaysOpen = (event) => {
        event.preventDefault();
    }

    return (
        <section className="certificates-section">
            <div className="container-section">
                <div className="title">
                    <span>Algumas de minhas</span>
                    <h2>Certificações:</h2>
                </div>

                <details open onClick={alwaysOpen}>
                    <summary><h4>Bootcamps</h4></summary>
                    <div className="container-certificates">
                        <div className="certificate">
                            <CertificateImgs course="one" certified="conclusao" hasBack="y" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="java_ai" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="angular_conclusao" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="senai" certified="conclusao" hasBack="n" />
                        </div>
                    </div>
                </details>

                <details>
                    <summary><h4>Cursos</h4></summary>
                    <div className="container-certificates">
                        <div className="certificate">
                            <CertificateImgs course="one" certified="mysql" hasBack="y" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="one" certified="springx" hasBack="y" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="one" certified="spring" hasBack="y" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="one" certified="datascience" hasBack="y" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="quarkus" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="microsservicos" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="kafka" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="junit" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="mockito" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="angular" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="typescript" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="angular_fundamentos" hasBack="n" />
                        </div>
                    </div>
                </details>

                <details>
                    <summary><h4>Arquitetura</h4></summary>
                    <div className="container-certificates">
                        <div className="certificate">
                            <CertificateImgs course="one" certified="poo" hasBack="y" />
                        </div>

                        <div className="certificate">
                            <CertificateImgs course="dio" certified="arquitetura_hexagonal" hasBack="n" />
                        </div>
                        <div className="certificate">
                            <CertificateImgs course="dio" certified="aws" hasBack="n" />
                        </div>
                    </div>
                </details>

            </div>
        </section>
    )
}

export default Certificates