const CertificateImgs = ({ course, certified, hasBack }) => {
    const data_certificate = {
        one: {
            conclusao: {
                front: 'imgs/certificates/one/conclusao/front.png',
                back: 'imgs/certificates/one/conclusao/back.png'
            },
            mysql: {
                front: 'imgs/certificates/one/mysql/front.png',
                back: 'imgs/certificates/one/mysql/back.png'
            },
            poo: {
                front: 'imgs/certificates/one/java-poo/front.png',
                back: 'imgs/certificates/one/java-poo/back.png'
            },
            springx: {
                front: 'imgs/certificates/one/spring-x/front.png',
                back: 'imgs/certificates/one/spring-x/back.png'
            },
            spring: {
                front: 'imgs/certificates/one/spring/front.png',
                back: 'imgs/certificates/one/spring/back.png'
            },
            datascience: {
                front: 'imgs/certificates/one/data-science/front.png',
                back: 'imgs/certificates/one/data-science/back.png'
            }
        },
        dio: {
            conclusao: {
                front: 'imgs/certificates/dio/conclusao/front.png'
            },
            angular: {
                front: 'imgs/certificates/dio/angular-conclusao/front.png'
            },
            fundamentos: {
                front: 'imgs/certificates/dio/angular-fundamentos/front.png'
            },
            typescript: {
                front: 'imgs/certificates/dio/typescript/front.png'
            }
        },
        senai: {
            conclusao: {
                front: 'imgs/certificates/senai/conclusao/front.png'
            }
        }
    }

    const frontImg = data_certificate[course][certified].front
    const backImg = data_certificate[course][certified].back

    return (
        <>
            {hasBack === "y" ? (
                <a href="/" className="hasBack">
                    <img src={frontImg} alt={certified} className="front-img" />
                    <img src={backImg} alt={certified} className="back-img" />
                </a>
            ) : (
                <a href="/" className="hasNot">
                    <img src={frontImg} alt={certified} />
                </a>
            )}
        </>
    )
}

export default CertificateImgs