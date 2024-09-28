import "./price.scss";
import "../../styles/page.scss";
import { metals } from "../../utils/base";
import { PriceProductCard } from "../PriceProductCard/PriceProductCard";
import { NavLink } from "react-router-dom";

export const PricePage = () => {
  return (
    <>
      <header className="price__header">
        <div className="price-container">
          <h1 className="page__title-large price__title">Цены</h1>
        </div>
      </header>
      <section className="price__section">
        <NavLink to="/contacts" className='price-phone'>
          <img
            src="images/phone-link-img.svg"
            className="main-phone__link main-phone__link-desktop"
            alt="phone-link"
          />
        </NavLink>
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
