import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import Icons from '../icons'

import '../../styles/components/pages/home/home-react.sass'

const HomeReact = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Components.", "Hooks.", "SPA.", "APIRest"],
            startDelay: 55,
            typeSpeed: 55,
            backSpeed: 55,
            backDelay: 55,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section>
            <div className="container-homereact">
                <div className="container-language">
                    <div>
                        <span>feito em</span>
                        <h2>Java Spring Boot</h2>
                        <h2>& React.js</h2>
                    </div>
                    <div>
                        <h4>com <i ref={el} className="typed"></i></h4>
                    </div>
                    <div>
                        <h4 className="reference">go to<a href="https://github.com/lucas-adm/react-portfolio" target="_blank">repo</a></h4>
                    </div>
                </div>
                <div className="container-tools">
                    <Icons src="React" name="React" w="175" h="175" />
                </div>
            </div>
        </section>
    )
}

export default HomeReact