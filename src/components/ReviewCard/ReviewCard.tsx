import { Review } from "../../types/metalType";
import './review.scss';

type Props = {
  review: Review;
  language: 'ru' | 'en'; // добавлено свойство для выбора языка
}

export const ReviewCard: React.FC<Props> = ({ review, language }) => {
  return (
    <div className="review__card">
      <img src={review.image} className="review__card-img" alt={review.name[language]} />
      <div>
        <h2 className="review__card__title">{review.name[language]}</h2>
        <h3 className="review__card__subtitle">{review.position[language]}</h3>
      </div>
    </div>
  )
}
