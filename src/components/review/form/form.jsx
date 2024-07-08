import '../../../styles/components/pages/reviews/form/form.sass';
import { MdOutlineClose } from 'react-icons/md';

import { useState, useEffect, useRef } from 'react';

import ReactCrop, { makeAspectCrop, centerCrop, convertToPixelCrop } from 'react-image-crop';
import { setCanvasPreview } from './canvas/canvasPreview';
import 'react-image-crop/src/ReactCrop.scss'

import axios from 'axios';

const Form = ({ toReview, showReviews, randomKey }) => {

    const initialState = {
        name: "",
        socialMedia: "",
        photo: "/imgs/reviews/default.png",
        stars: 1,
        content: ""
    };

    const [data, setData] = useState(initialState);

    const [dataContentLength, setDataContentLength] = useState(0);

    const [error, setError] = useState({
        name: "",
        socialMedia: "",
        photo: "",
        stars: "",
        content: ""
    })

    const [imgSrc, setImgSrc] = useState("/imgs/reviews/default.png");

    const modalRef = useRef(null);

    const [cropping, setCropping] = useState(false);

    const closeModal = () => {
        return setCropping(false);
    }

    useEffect(() => {
        const modalHandler = (event) => {
            if (!modalRef.current.contains(event.target)) setCropping(false);
        }
        document.addEventListener("mousedown", modalHandler);
        document.addEventListener("touchend", modalHandler);
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") modalHandler(event);
        });
        return () => {
            document.removeEventListener("mousedown", modalHandler);
            document.removeEventListener("touchend", modalHandler);
            document.removeEventListener("keydown", (event) => {
                if (event.key === "Escape") modalHandler(event);
            });
        }
    }, [])

    const imgRef = useRef(null);

    const [crop, setCrop] = useState({
        unit: '%',
        y: 75,
        x: 75,
        width: 75,
        height: 75
    })

    const loadImage = async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.size > 1 * 1024 * 1024) {
            setCropping(false);
            setError({ ...error, photo: "O tamanho não deve exceder 1 MB" })
            return setImgSrc("");
        }

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const imgElement = new Image();
            const imgUrl = reader.result?.toString() || "";
            imgElement.src = imgUrl;

            imgElement.addEventListener("load", (e) => {
                if (error.photo) setError({ ...error, photo: "" });
                const target = e.target;
                const { naturalWidth, naturalHeight } = target;
                if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                    setCropping(false);
                    setError({ ...error, photo: "O arquivo deve ter ao menos 256px²" })
                    return setImgSrc("");
                }
            });

            setCropping(true);
            setImgSrc(imgUrl);
        })
        reader.readAsDataURL(file);
        event.target.value = "";
    }

    const onImageLoad = (e) => {
        const { width, height } = e.currentTarget;
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: 75,
            },
            ASPECT_RATIO,
            width,
            height
        );

        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    }

    const previewCanvasRef = useRef(null);

    const ASPECT_RATIO = 1;
    const MIN_DIMENSION = 150;

    const saveCrop = () => {
        const croppedPhoto = setCanvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            convertToPixelCrop(
                crop,
                imgRef.current.naturalWidth,
                imgRef.current.naturalHeight
            )
        );
        setData({
            ...data,
            photo: croppedPhoto
        })
        setCropping(false);
    }

    const handleInputChange = (event) => {
        setError({
            ...error,
            [event.target.name]: ""
        })
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        if (event.target.name === "content" && event.key !== "Backspace") setDataContentLength(event.target.value.length);
    }


    const [activeStar, setActiveStar] = useState(1)
    const handleStarsClick = (value) => {
        setActiveStar(value);
        setData({
            ...data,
            stars: value
        })
    }

    const [requesting, setRequesting] = useState(false)
    const handleSubmit = (event) => {

        event.preventDefault(), setRequesting(true);

        const API = import.meta.env.VITE_API;
        axios.post(`${API}`, data)
            .then(() => {
                setData(initialState);
                setDataContentLength(0);
                toReview(false);
                showReviews(true);
                randomKey(Math.random);
            })
            .catch((error) => {
                if (error && error.response) {
                    const serverErrors = error.response.data;
                    if (Array.isArray(serverErrors)) {
                        serverErrors.forEach(error => {
                            setError(prevErrors => ({
                                ...prevErrors,
                                [error.field]: error.message
                            }));
                        });
                    }
                }
            })
            .finally(() => setRequesting(false))
    }

    return (
        <div className="container-form">
            <div className={`modal-background ${cropping && "cropping"}`}>
                <div className="modal" ref={modalRef}>
                    <div className="title">
                        <h4>Ajuste sua foto</h4>
                        <MdOutlineClose onClick={closeModal} />
                    </div>
                    <div className="crop-image">
                        {imgSrc &&
                            <ReactCrop
                                crop={crop}
                                circularCrop
                                keepSelection
                                aspect={ASPECT_RATIO}
                                minWidth={MIN_DIMENSION}
                                onChange={(percentCrop) => setCrop(percentCrop)}
                                style={{ maxHeight: '70vh' }}
                            >
                                <img src={imgSrc} alt="Picture" ref={imgRef} onLoad={onImageLoad} />
                            </ReactCrop>
                        }
                    </div>
                    <div className="crop-confirm">
                        <button onClick={saveCrop}>Confirmar</button>
                    </div>
                    {crop &&
                        <canvas ref={previewCanvasRef} className="display-none"></canvas>
                    }
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="data">
                    <div className="upload">
                        <div className="img">
                            <img src={data.photo} alt="foto de usuário" />
                            <span className="error">{error.photo}</span>
                        </div>
                        <div className="input">
                            <input id="photo" type="file" accept="image/*" onChange={loadImage} />
                            <label htmlFor="photo" tabIndex={0}>Escolher</label>
                        </div>
                    </div>
                    <div className="data-fields">
                        <div className="input">
                            <label htmlFor="name">Nome*</label>
                            <input id="name" name="name" type="text" placeholder="Digite seu nome" value={data.name} onChange={handleInputChange} required />
                            <span className="error">{error.name}</span>
                        </div>
                        <div className="input">
                            <label htmlFor="socialMedia">Rede social</label>
                            <input id="socialMedia" name="socialMedia" type="text" placeholder="GitHub, LinkedIn, X, Instagram, Youtube, Discord, Facebook, Whatsapp" value={data.socialMedia} onChange={handleInputChange} />
                            <span className="error">{error.socialMedia}</span>
                        </div>
                        <div className="input">
                            <label htmlFor="content">Mensagem*</label>
                            <textarea id="content" name="content" maxLength={777} placeholder="Opine, recomende, divulgue ou apenas se apresente" value={data.content} onChange={handleInputChange} required />
                            {!error.content && <span className="count">{dataContentLength}/777</span>}
                            <span className="error">{error.content}</span>
                        </div>
                        <div className="intStars">
                            <ul className="stars">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <li
                                        key={value}
                                        className={`star ${value === activeStar ? 'active' : ''}`}
                                        data-value={value}
                                        onClick={() => handleStarsClick(value)}
                                    ></li>
                                ))}
                            </ul>
                            <span className="error">{error.stars}</span>
                        </div>
                    </div>
                </div>
                <div className="submit">
                    <div className="condition">
                        <div className="checkbox">
                            <input type="checkbox" required />
                            <span>Concordo que, caso o moderador considere que meu comentário possui teor sexual ou criminoso demasiadamente, ele poderá ser removido a qualquer momento.</span>
                        </div>
                        <span className="error"></span>
                    </div>
                    <div className="submit-button">
                        {requesting ?
                            <>
                                <img src="/svgs/loading.svg" alt="ícone de carregando" style={{ width: "6.6rem" }} />
                            </>
                            :
                            <>
                                <button>Avaliar</button>
                            </>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form