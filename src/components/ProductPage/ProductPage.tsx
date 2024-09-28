import './productPage.scss';
import "../../styles/page.scss";
import { ProductCard } from "../ProductCard/ProductCard";
import { Metal } from "../../types/metalType";
import { metals } from "../../utils/base";

export const ProductPage = () => {
  return (
    <>
      <section className="product__header">
        <div className="page__section">
          <h1 className="page__title-large product__main-title">Продукция</h1>
        </div>
      </section>
      <section className='page__section'>
        <div className="product-container">
          {metals.map((item: Metal) => (
            <ProductCard imageLink={item.card_image} title={item.type} />
          ))}
        </div>
      </section>
    </>
  );
};
