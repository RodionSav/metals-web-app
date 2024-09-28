import { NavLink } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <div className="footer-container">
          <div className="footer-logo__main-container footer-item-container-first">
            <div className="footer-logo-container">
              <NavLink to="/">
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
              Компания «ДСР» является крупной передовой компанией в сфере
              металлоторговли.
            </p>
          </div>
          <div className="footer-item-container-second">
            <h2 className="footer__title">Меню</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink to="/about" className="footer__link">
                  О компании
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/products" className="footer__link">
                  Каталог
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/delivery" className="footer__link">
                  Доставка
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/contacts" className="footer__link">
                  Контакты
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/reviews" className="footer__link">
                  Отзывы
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-container footer-container-second">
          <div className="footer-item-container-third">
            <h2 className="footer__title">График работы:</h2>
            <div className="footer-adress-container">
              <p className="footer-adress__paragraph">Пн - Сб : 9:00 - 18:00</p>
              <h3 className="footer-adress__title">Адрес:</h3>
              <p className="footer-adress__paragraph">
                Киев, ул. Красноткацкая 87 <br />
                <br />
                Konstruktorska 13, Warszawa, Poland
              </p>
            </div>
          </div>
          <div className="footer-item-container-fourth">
            <h2 className="footer__title">Связаться с нами</h2>
            <div className="footer-networks-container">
              <p className="footer-networks-phone-numbers">
                +79263717420
                <br />
                <br />
                +79263693819
              </p>
              <div className="footer-networks-logo-container">
                <img src="images/viber-logo.svg" alt="viber-logo" />
                <img src="images/telegram-logo.svg" alt="telegram-logo" />
                <img src="images/whatsapp-logo.svg" alt="whatsapp-logo" />
              </div>
              <p>sale@asynt.net</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
