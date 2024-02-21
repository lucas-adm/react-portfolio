import CertificateImgs from '../components/certificates/certificates-imgs'

import '../styles/components/pages/certificates/certificates.sass'

const Certificates = () => {
    return (
        <section className="certificates-section">
            <div className="container-section">
                <div className="title">
                    <span>Algumas de minhas</span>
                    <h2>Certificações:</h2>
                </div>
                <div className="container-certificates">

                    <div className="certificate">
                        <CertificateImgs course="senai" certified="conclusao" hasBack="n" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="one" certified="conclusao" hasBack="y" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="dio" certified="conclusao" hasBack="n" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="one" certified="mysql" hasBack="y" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="one" certified="poo" hasBack="y" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="one" certified="springx" hasBack="y" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="dio" certified="angular" hasBack="n" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="dio" certified="typescript" hasBack="n" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="dio" certified="fundamentos" hasBack="n" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="one" certified="spring" hasBack="y" />
                    </div>

                    <div className="certificate">
                        <CertificateImgs course="one" certified="datascience" hasBack="y" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Certificates