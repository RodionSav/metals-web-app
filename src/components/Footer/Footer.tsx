import { Link, NavLink } from "react-router-dom";
import "./footer.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__main-container">
        <div className="footer-container">
          <div className="footer-logo__main-container footer-item-container-first">
            <div className="footer-logo-container">
              <NavLink to="/" className="footer-logo__link">
                <img
                  src="images/logo.svg"
                  className="footer-img"
                  alt="footer-logo"
                />
                <img
                  src="images/logo-text.svg"
                  className="footer-img-text"
                  alt="footer-logo-text"
                />
              </NavLink>
            </div>
            <p className="page__title-500 footer-logo__paragraph">
              {t("footer.companyDescription")}
            </p>
          </div>
          <div className="footer-item-container-second">
            <h2 className="footer__title">{t("footer.menu")}</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink to="/about" className="footer__link">
                  {t("footer.aboutCompany")}
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/products" className="footer__link">
                  {t("footer.catalog")}
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/delivery" className="footer__link">
                  {t("footer.delivery")}
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/contacts" className="footer__link">
                  {t("footer.contacts")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-container footer-container-second">
          <div className="footer-item-container-third">
            <h2 className="footer__title">{t("footer.workingHours")}</h2>
            <div className="footer-adress-container">
              <p className="footer-adress__paragraph">
                {t("footer.workingDays")}
              </p>
              <h3 className="footer-adress__title">
                {t("footer.addressTitle")}
              </h3>
              <p
                className="footer-adress__paragraph"
                dangerouslySetInnerHTML={{ __html: t("footer.address") }}
              />
            </div>
          </div>
          <div className="footer-item-container-fourth">
            <h2 className="footer__title">{t("footer.contactUs")}</h2>
            <div className="footer-networks-container">
              <p className="footer-networks-phone-numbers">
                +79263717420
                <br />
                <br />
                +79263693819
              </p>
              <div className="footer-networks-logo-container">
                <Link to="/">
                  <img src="images/viber-logo.svg" alt="viber-logo" />
                </Link>
                {/* <img src="images/telegram-logo.svg" alt="telegram-logo" /> */}
                <Link to="/">
                  <img src="images/whatsapp-logo.svg" alt="whatsapp-logo" />
                </Link>
              </div>
              <p>{t("footer.email")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
