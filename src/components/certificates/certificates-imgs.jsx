import { Link } from 'react-router-dom'

import { GiAchievement } from "react-icons/gi";

const CertificateImgs = ({ course, certified, hasBack }) => {
    const data_certificate = {
        one: {
            conclusao: {
                front: '/imgs/certificates/one/conclusao/front.png',
                back: '/imgs/certificates/one/conclusao/back.png',
                credential: 'https://cursos.alura.com.br/program/certificate/0d7e0597-9600-4960-873d-11ca9d729d46'
            },
            mysql: {
                front: '/imgs/certificates/one/mysql/front.png',
                back: '/imgs/certificates/one/mysql/back.png',
                credential: 'https://cursos.alura.com.br/degree/certificate/075a5d64-b5c7-4b93-907b-3e88d22ec023'
            },
            poo: {
                front: '/imgs/certificates/one/java-poo/front.png',
                back: '/imgs/certificates/one/java-poo/back.png',
                credential: 'https://cursos.alura.com.br/degree/certificate/a03ae222-7671-4901-a6dd-710d0c75fcd8'
            },
            springx: {
                front: '/imgs/certificates/one/spring-x/front.png',
                back: '/imgs/certificates/one/spring-x/back.png',
                credential: 'https://cursos.alura.com.br/degree/certificate/fa674708-8a71-4ddd-8a8e-2c01b9718439'
            },
            spring: {
                front: '/imgs/certificates/one/spring/front.png',
                back: '/imgs/certificates/one/spring/back.png',
                credential: 'https://cursos.alura.com.br/degree/certificate/aaa3655b-c4c9-4dd7-82cc-0d20ea6c0b73'
            },
            datascience: {
                front: '/imgs/certificates/one/data-science/front.png',
                back: '/imgs/certificates/one/data-science/back.png',
                credential: 'https://cursos.alura.com.br/degree/certificate/7a2cfd9f-f07c-485f-9607-1a39882f74e1'
            }
        },
        dio: {
            angular_conclusao: {
                front: '/imgs/certificates/dio/angular-ts/conclusao/front.png',
                credential: 'https://hermes.digitalinnovation.one/certificates/KVH68PHU.pdf'
            },
            angular: {
                front: '/imgs/certificates/dio/angular-ts/angular-conclusao/front.png',
                credential: 'https://hermes.digitalinnovation.one/certificates/YOLLMNZL.pdf'
            },
            angular_fundamentos: {
                front: '/imgs/certificates/dio/angular-ts/angular-fundamentos/front.png',
                credential: 'https://hermes.digitalinnovation.one/certificates/3C214241.pdf'
            },
            typescript: {
                front: '/imgs/certificates/dio/angular-ts/typescript/front.png',
                credential: 'https://hermes.digitalinnovation.one/certificates/981AD550.pdf'
            },
            java_ai: {
                front: '/imgs/certificates/dio/java-aws/conclusao/front.png',
                credential: 'https://hermes.dio.me/certificates/WYHSEKNP.pdf'
            },
            aws: {
                front: '/imgs/certificates/dio/java-aws/aws/front.png',
                credential: 'https://hermes.dio.me/certificates/HWYRMDEV.pdf'
            },
            quarkus: {
                front: '/imgs/certificates/dio/java-aws/quarkus/front.png',
                credential: 'https://hermes.dio.me/certificates/DVWROROC.pdf'
            },
            microsservicos: {
                front: '/imgs/certificates/dio/java-aws/microsservicos/front.png',
                credential: 'https://hermes.dio.me/certificates/0IEZFBNN.pdf'
            },
            kafka: {
                front: '/imgs/certificates/dio/java-aws/kafka/front.png',
                credential: 'https://hermes.dio.me/certificates/KO1OWW0F.pdf'
            },
            mockito: {
                front: '/imgs/certificates/dio/java-aws/mockito/front.png',
                credential: 'https://hermes.dio.me/certificates/GSWOTX7O.pdf'
            },
            junit: {
                front: '/imgs/certificates/dio/java-aws/junit/front.png',
                credential: 'https://hermes.dio.me/certificates/1I9MX2HY.pdf'
            },
            arquitetura_hexagonal: {
                front: '/imgs/certificates/dio/java-aws/arquitetura-hexagonal/front.png',
                credential: 'https://hermes.dio.me/certificates/AT7OHFMT.pdf'
            }
        },
        senai: {
            conclusao: {
                front: '/imgs/certificates/senai/conclusao/front.png'
            }
        }
    }

    const frontImg = data_certificate[course][certified].front
    const backImg = data_certificate[course][certified].back
    const credential = data_certificate[course][certified].credential

    return (
        <>
            {hasBack === "y" ? (
                <>
                    <Link to={`/certificados/${course}/${certified}/${hasBack}`} className="link hasBack">
                        <img src={frontImg} alt={certified} className="front-img" />
                        <img src={backImg} alt={certified} className="back-img" />
                    </Link>
                    <a href={credential} target="_blank" className="a"><GiAchievement /></a>
                </>
            ) : (
                <>
                    <Link to={`/certificados/${course}/${certified}/${hasBack}`} className="link hasNot">
                        <img src={frontImg} alt={certified} />
                    </Link>
                    <a href={credential} target="_blank" className="a"><GiAchievement /></a>
                </>
            )}
        </>
    )
}

export default CertificateImgs