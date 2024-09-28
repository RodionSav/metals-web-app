import "./price.scss";
import "../../styles/page.scss";
import { metals } from "../../utils/base";
import { PriceProductCard } from "../PriceProductCard/PriceProductCard";

export const PricePage = () => {
  return (
    <>
      <header className="price__header">
        <div className="price-container">
          <h1 className="page__title-large price__title">Цены</h1>
        </div>
      </header>
      <section className="price__section">
        <h2 className="price__section__title">Цены на продукцию</h2>
        <div>
          {metals.map((metal) => (
            <PriceProductCard metal={metal} />
          ))}
        </div>
      </section>
    </>
  );
};
