import '../../styles/components/pages/reviews/list.sass';
import { FaSort } from 'react-icons/fa';

import Review from "./review"

import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

const List = () => {

    const [showSortOptions, setShowSortOptions] = useState(false);

    const openSortOptions = () => {
        setShowSortOptions(true);
    }

    const ref = useRef(null);

    useEffect(() => {
        const optionsHandler = (event) => {
            if (!ref.current.contains(event.target)) setShowSortOptions(false);
        }
        document.addEventListener("mousedown", optionsHandler);
        document.addEventListener("touchstart", optionsHandler);
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                optionsHandler(event)
            }
        })
        return () => {
            document.removeEventListener("mousedown", optionsHandler);
            document.removeEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    optionsHandler(event)
                }
            })
        }
    }, [])

    const [loading, setLoading] = useState(false)

    const [loadingMore, setLoadingMore] = useState(false)

    const [comments, setComments] = useState([]);

    const [numbers, setNumbers] = useState({
        total: "",
        avg: ""
    });

    const [page, setPage] = useState(0);

    const [sort, setSort] = useState("sort=dateTime,desc")

    const [max, setMax] = useState(false);

    const API = import.meta.env.VITE_API;

    useEffect(() => {
        setLoading(true), setPage(0);

        const uri = `${API}?${sort}`

        axios.get(`${API}/numbers`)
            .then((response) => setNumbers(response.data))
            .catch(() => { return })

        axios.get(uri)
            .then((response) => { setComments(response.data), response.data.length === 10 ? setMax(false) : setMax(true) })
            .catch(() => { return })
            .finally(() => setLoading(false))
    }, [sort])

    const loadMore = () => {
        const nextPage = page + 1;

        setLoadingMore(true), setPage(nextPage);

        const uri = `${API}?page=${nextPage}&${sort}`;

        axios.get(uri)
            .then((response) => { setComments(comments => [...comments, ...response.data]), response.data.length === 10 ? setMax(false) : setMax(true) })
            .catch(() => { return })
            .finally(() => setLoadingMore(false))
    }

    return (
        <div className="container-review-list">
            {loading ?
                <>
                    <div className="loading">
                        <img src="/svgs/loading.svg" alt="ícone de carregando" />
                    </div>
                </> :
                <>
                    <div className="top">
                        <div className="average">
                            <h1>{Number(numbers.avg).toFixed(2)}</h1>
                            <div className="total">
                                <span>({numbers.total} {numbers.total > 1 ? "avaliações" : "avaliação"})</span>
                                <span className="star">★★★★★</span>
                            </div>
                        </div>
                        <div className="filter">
                            <FaSort />
                            <p>Ordenar por:</p>
                            <div className="search-buttons">
                                {sort === "sort=dateTime,desc" && (
                                    <button className="change-btn" onClick={openSortOptions}>recentes</button>
                                )}
                                {sort === "sort=dateTime,asc" && (
                                    <button className="change-btn" onClick={openSortOptions}>antigos</button>
                                )}
                                {showSortOptions && (
                                    <ul ref={ref}>
                                        <li>
                                            <button onClick={() => { setSort("sort=dateTime,desc"), setShowSortOptions(false) }}>recentes</button>
                                        </li>
                                        <li>
                                            <button onClick={() => { setSort("sort=dateTime,asc"), setShowSortOptions(false) }}>antigos</button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="reviews">
                        {comments.map(comment => (
                            <Review
                                name={comment.name}
                                dateTime={comment.dateTime}
                                photo={comment.photo}
                                socialMedia={comment.socialMedia}
                                content={comment.content}
                                stars={comment.stars}
                            />
                        ))}
                        {loadingMore &&
                            <>
                                <div className="svg">
                                    <img src="/svgs/loading.svg" alt="ícone de carregando" />
                                </div>
                            </>
                        }
                        {!max && !loadingMore &&
                            <div className="svg">
                                <img src="/svgs/loadmore.svg" alt="ícone de carregar mais" onClick={loadMore} />
                            </div>
                        }
                    </div>
                </>}
        </div>
    )
}

export default List