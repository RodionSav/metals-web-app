import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { useState } from "react";
import i18n from "i18next";
import { Button, HStack } from "@chakra-ui/react";
import { useLang } from "../../context/LangContext";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const [lang, setLang] = useState("ru");
  const {lang, setLang} = useLang();

  const handleSetActive = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const changeLang = (newLang: string) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
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
                {i18n.t("header.working_hours")}
              </h2>
            </div>
            <div className="header-about__item">
              <img src="images/email-img.svg" alt="email" />
              <h2 className="header-about__item__title">sales@dsr-metal.com</h2>
            </div>
            <div className="header-about__item">
              <img src="images/phone-img.svg" alt="phone" />
              <h2 className="header-about__item__title">
                +79263717420 / +79263693819
              </h2>
            </div>
          </div>

          {/* Compact language switch */}
          <HStack spacing={1} className="header-lang-container" width="20" ml="auto">
            <Button onClick={() => changeLang("ru")} size="sm" variant="outline">
              RU
            </Button>
            <Button onClick={() => changeLang("en")} size="sm" variant="outline">
              EN
            </Button>
          </HStack>
        </div>

        <nav className="header__nav">
          <NavLink
            to="about"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700 header__title">
              {i18n.t("header.about_company")}
            </h2>
          </NavLink>
          <NavLink
            to="products"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700 header__title">
              {i18n.t("header.products")}
            </h2>
          </NavLink>
          <NavLink
            to="delivery"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700 header__title">
              {i18n.t("header.delivery")}
            </h2>
          </NavLink>
          <NavLink
            to="contacts"
            className="header__nav__title"
            onClick={closeMenu}
          >
            <h2 className="page__title-700 header__title">
              {i18n.t("header.contacts")}
            </h2>
          </NavLink>
        </nav>
        <div className="header__nav-phone">
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
              <h2 className="page__title-700">{i18n.t("header.about_company")}</h2>
            </NavLink>
            <NavLink
              to="products"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <h2 className="page__title-700">{i18n.t("header.products")}</h2>
            </NavLink>
            <NavLink
              to="delivery"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <h2 className="page__title-700">{i18n.t("header.delivery")}</h2>
            </NavLink>
            <NavLink
              to="contacts"
              className="header__nav__title"
              onClick={closeMenu}
            >
              <h2 className="page__title-700">{i18n.t("header.contacts")}</h2>
            </NavLink>
          </div>
          <div className="nav-container">
            <div className="header-about__item-container-phone">
              <div className="header-about__item">
                <img src="images/oclock-img.svg" alt="time-logo" />
                <h2 className="header-about__item__title">
                  {i18n.t("header.working_hours_phone")}
                </h2>
              </div>
              <div className="header-about__item">
                <img src="images/email-img.svg" alt="email" />
                <h2 className="header-about__item__title">
                  {i18n.t("header.email")}
                </h2>
              </div>
              <div className="header-about__item">
                <img src="images/phone-img.svg" alt="phone" />
                <h2 className="header-about__item__title">
                  {i18n.t("header.phone_numbers")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
