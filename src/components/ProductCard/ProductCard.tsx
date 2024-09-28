  import { NavLink } from "react-router-dom";
  import "./product.scss";

  type Props = {
    imageLink: string;
    title: string;
  };

  export const ProductCard: React.FC<Props> = ({ imageLink, title }) => {
    return (
      <NavLink to='/contacts' className='product__link'>
        <div className="product__card">
          <img src={imageLink} className="product-img" alt="title" />
          <h2 className="product__title">{title}</h2>
        </div>
      </NavLink>
    );
  };
