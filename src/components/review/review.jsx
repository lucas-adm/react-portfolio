import '../../styles/components/pages/reviews/review.sass'

const Review = ({ name, socialMedia, photo, dateTime, stars, content }) => {
    return (
        <div className="review">
            <div className="top">
                <div className="photo">
                    <img src={photo} alt={`Foto do usuário ${name}`} />
                </div>
                <div className="user">
                    <div className="infos">
                        <p className="stars">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</p>
                        <span>{dateTime}</span>
                    </div>
                    <a className={`
                        ${socialMedia && "default"}
                        ${socialMedia && socialMedia.toLowerCase().includes("linkedin") && "linkedin"}
                        ${socialMedia && socialMedia.toLowerCase().includes("github") && "github"}
                        ${socialMedia && socialMedia.toLowerCase().includes("instagram") && "instagram"}
                        ${socialMedia && socialMedia.toLowerCase().includes("x.com") && "x"}
                        ${socialMedia && socialMedia.toLowerCase().includes("youtube") && "youtube"}
                        ${socialMedia && socialMedia.toLowerCase().includes("facebook") && "facebook"}
                        ${socialMedia && socialMedia.toLowerCase().includes("discord") && "discord"}
                        ${socialMedia && socialMedia.toLowerCase().includes("whatsapp") && "whatsapp"}
                        ${socialMedia && socialMedia.toLowerCase().includes("telegram") && "telegram"}
                        `} href={socialMedia ? socialMedia : null} target="_blank">
                        <h4>{name}</h4>
                    </a>
                </div>
            </div>
            <div className="body">
                <div className="content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Review