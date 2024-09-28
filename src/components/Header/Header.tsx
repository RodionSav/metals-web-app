import { NavLink } from "react-router-dom";
import "./header.scss";
import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSetActive = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header-logo-container" onClick={closeMenu}>
          <img src="images/logo.svg" className="header-logo" alt="logo" />
          <img
            src="images/logo-text.svg"
            className="header-logo-text"
            alt="footer-logo-text"
          />
        </NavLink>
        <div className="header-about__item-container">
          <div className="header-about__item">
            <img src="images/oclock-img.svg" alt="time-logo" />
            <h2 className="header-about__item__title">
              Пн - Сб : 9:00 - 18:00
            </h2>
          </div>
          <div className="header-about__item">
            <img src="images/email-img.svg" alt="email" />
            <h2 className="header-about__item__title">sale@asynt.net</h2>
          </div>
          <div className="header-about__item">
            <img src="images/phone-img.svg" alt="phone" />
            <h2 className="header-about__item__title">
              +79263717420 / +79263693819
            </h2>
          </div>
        </div>
        <nav className="header__nav">
          <NavLink
            to="about"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700">О Компании</h2>
          </NavLink>
          <NavLink
            to="products"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700">Продукция</h2>
          </NavLink>
          <NavLink
            to="delivery"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700">Доставка</h2>
          </NavLink>
          <NavLink
            to="contacts"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700">Контакты</h2>
          </NavLink>
          <NavLink
            to="prices"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <img src="images/store-img.svg" alt="store-logo" />
          </NavLink>
        </nav>
        <div className="header__nav-phone">
          <NavLink
            to="prices"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <img src="images/store-img.svg" alt="store-logo" />
          </NavLink>
          <button className="header__nav__button" onClick={handleSetActive}>
            <img src="images/burger-img.png" alt="burger" />
          </button>
        </div>
      </header>
      {isActive && (
        <div className="nav__menu">
          <div className="nav__menu-container">
            <NavLink to="/" onClick={closeMenu}>
              <img src="images/logo.svg" className="header-logo" alt="logo" />
            </NavLink>
            <button className="header__nav__button" onClick={handleSetActive}>
              <img src="images/cross-img.svg" alt="cross" />
            </button>
          </div>
          <div className="nav__item-container">
            <NavLink
              to="about"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <h2 className="page__title-700">О Компании</h2>
            </NavLink>
            <NavLink
              to="products"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <h2 className="page__title-700">Продукция</h2>
            </NavLink>
            <NavLink
              to="delivery"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <h2 className="page__title-700">Доставка</h2>
            </NavLink>
            <NavLink
              to="contacts"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <h2 className="page__title-700">Контакты</h2>
            </NavLink>
            <NavLink
              to="prices"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <img src="images/store-img.svg" alt="store-logo" />
            </NavLink>
          </div>
          <div className="nav-container">
            <div className="header-about__item-container-phone">
              <div className="header-about__item">
                <img src="images/oclock-img.svg" alt="time-logo" />
                <h2 className="header-about__item__title">
                  Пн - Сб : 9:00 - 18:00
                </h2>
              </div>
              <div className="header-about__item">
                <img src="images/email-img.svg" alt="email" />
                <h2 className="header-about__item__title">sale@asynt.net</h2>
              </div>
              <div className="header-about__item">
                <img src="images/phone-img.svg" alt="phone" />
                <h2 className="header-about__item__title">
                  +79263717420 / +79263693819
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
