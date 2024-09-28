import { Review } from "../../types/metalType";
import './review.scss';

type Props = {
  review: Review
}

export const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <div className="review__card">
      <img src={review.image} className="review__card-img" alt={review.name} />
      <div>
        <h2 className="review__card__title">{review.name}</h2>
        <h3 className="review__card__subtitle">{review.position}</h3>
      </div>
    </div>
  )
}