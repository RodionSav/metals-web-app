import "./delivery.scss";
import "../../styles/page.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const DeliveryPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="delivery__section">
        <div className="delivery-container-page">
          <h1
            className="page__title-large delivery__section__title"
            dangerouslySetInnerHTML={{ __html: t("delivery.title") }}
          />
        </div>
      </section>
      <section className="page__section delivery__article">
        <p
          className="page__paragraph"
          dangerouslySetInnerHTML={{ __html: t("delivery.paragraph") }}
        />
        <NavLink to="/contacts" className="delivery-phone">
          <img
            src="images/phone-link-img.svg"
            className="main-phone__link main-phone__link-desktop"
            alt="phone-link"
          />
        </NavLink>
      </section>
    </>
  );
};
