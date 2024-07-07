// Reviews.jsx
import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Tru P',
    date: '2024-04-29',
    rating: 5,
    review: 'Amazing cleaning job on roof tiles with quite a bit of moss build up. Firstly Tim was great in organising everything an...'
  },
  {
    name: 'Kevin Kay',
    date: '2024-04-26',
    rating: 5,
    review: 'Had my roof and render cleaned by Aaron and his team this week what a fantastic service from a very...'
  },
  {
    name: 'Sheilina Shah',
    date: '2024-04-17',
    rating: 5,
    review: 'I had my roof and gutters cleaned by Aaron and Nathan yesterday. They did a phenomenal job. The roof...'
  }
];

const Review = ({ name, date, rating, review }) => (
  <div className="review">
    <div className="review-header">
      <span className="reviewer-initial">{name.charAt(0)}</span>
      <div>
        <span className="reviewer-name">{name}</span>
        <span className="review-date">{date}</span>
      </div>
      <span className="google-icon">G</span>
    </div>
    <div className="review-rating">
      {Array(rating).fill('★').join('')}
    </div>
    <div className="review-text">
      {review}
    </div>
  </div>
);

const Reviews = () => (
  <div className="reviews-container">
    <div className="reviews-content">
      <div className="reviews-summary">
        <span className="summary-rating">Excellent</span>
        <div className="summary-stars">★★★★★</div>
        <span className="summary-count">Based on 185 reviews</span>
        <div className="google-logo">Google</div>
      </div>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  </div>
);

export default Reviews;
