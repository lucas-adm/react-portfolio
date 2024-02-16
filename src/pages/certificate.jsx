import { Link, useParams } from "react-router-dom"

import CertificateImgs from "../components/certificates/certificates-imgs";

import '../styles/components/pages/certificates/certificate/certificate.sass'

const Certificate = () => {

    const { course, certified, hasBack } = useParams();

    return (
        <section className="section">
            <div className="container-section">
                <div className="button">
                    <Link to="/certificados">
                        <button>Voltar</button>
                    </Link>
                </div>
                <div className="imgs">
                    <CertificateImgs course={course} certified={certified} hasBack={hasBack} />
                    <div className="icon">
                        <a href="/">
                            <img src="" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificate