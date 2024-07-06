import '../styles/components/pages/reviews/reviews.sass';
import { TiArrowSortedUp } from 'react-icons/ti';

import Form from '../components/review/form/form';
import List from '../components/review/list';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Reviews = () => {

  const [aware, setAware] = useState(() => localStorage.getItem("aware") === "true");
  const navigate = useNavigate();

  const [toReview, setToReview] = useState(false);

  const openReview = () => {
    setToReview(!toReview);
  }

  const [showReviews, setShowReviews] = useState(true);

  const handleReviewsBox = () => {
    setShowReviews(!showReviews);
  }

  const [randomKey, setRandomKey] = useState(Math.random);

  return (
    <section>
      {!aware &&
        <div className="warning-background">
          <div className="warning">
            <div className="site">
              <img src="vite.svg" alt="favico" />
              <h1>Portfolio</h1>
            </div>
            <div className="aware">
              <h4>Você é maior de idade?</h4>
              <p>A partir deste momento você está ciente de que esta parte é destinada à maiores de 18 anos.</p>
              <button className="btn-yes" onClick={() => { localStorage.setItem("aware", "true"), setAware(true) }}>Sim, tenho mais de 18 anos.</button>
              <button className="btn-no" onClick={() => { navigate("/") }}>Não</button>
            </div>
          </div>
        </div>
      }
      <div className="container-page-reviews">
        <div className="container-invite-to-review">
          <div className="top-title" onClick={openReview} >
            <div className="title">
              <h2 className="star">★</h2>
              <h2>Faça sua avaliação</h2>
            </div>
            <TiArrowSortedUp className={toReview ? "" : "close"} />
          </div>
          {toReview && <Form toReview={(boolean) => setToReview(boolean)} randomKey={(key) => setRandomKey(key)} showReviews={(boolean) => setShowReviews(boolean)} />}
        </div>
        <div className="container-reviews">
          <div className="top-title" onClick={handleReviewsBox} >
            <div className="title">
              <h2 className="star">★</h2>
              <h2>Reviews</h2>
            </div>
            <TiArrowSortedUp className={showReviews ? "" : "close"} />
          </div>
          {showReviews && <List key={randomKey} />}
        </div>
      </div>
    </section >
  )
}

export default Reviews