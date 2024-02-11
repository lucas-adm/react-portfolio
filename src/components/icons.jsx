import '../styles/components/icons.sass'

const icons = ({ src, name, w, h }) => {

    const data_icon = {
        MySQL: 'https://i.imgur.com/denuprB.png',
        PostgreSQL: 'https://i.imgur.com/pYOtjsr.png',
        Java: 'https://i.imgur.com/PYuVCME.png',
        Spring: 'https://i.imgur.com/X4DkoRI.png',
        Node: 'https://i.imgur.com/b40seLt.png',
        Express: 'https://i.imgur.com/xeNn9RX.png',
        Python: 'https://i.imgur.com/5CNebiv.png',
        Anaconda: 'https://i.imgur.com/jOp5INg.png',
        JavaScript: 'https://i.imgur.com/tslK9s8.png',
        TypeScript: 'https://i.imgur.com/VDrHa2s.png',
        Sass: 'https://i.imgur.com/vcM42bY.png',
        React: 'https://i.imgur.com/RMUkH5B.png',
        Angular: 'https://i.imgur.com/dNjzRS3.png',
        Puppeteer: 'https://i.imgur.com/jqoBUOz.png',
        Docker: 'https://i.imgur.com/rnNYoco.png'
    }

    const icon_src = data_icon[src]

    return (
        <div className="icon-block">
            <span>{name}</span>
            <img width={`${w}px`} height={`${h}px`} src={`${icon_src}`} alt={`${name}-icon`} />
        </div>
    )
}

export default icons