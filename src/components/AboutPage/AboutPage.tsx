import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/page.scss";
import "./aboutPage.scss";

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about__section">
        <div className="page__section">
          <h1
            className="page__title-large about__title-second"
            dangerouslySetInnerHTML={{ __html: t("about2.title") }}
          />
        </div>
      </section>
      <section className="about__article page__section">
        <p
          className="page__paragraph"
          dangerouslySetInnerHTML={{ __html: t("about2.paragraph") }}
        />
        <NavLink to="/contacts" className="about-phone">
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
