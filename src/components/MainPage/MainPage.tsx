import { NavLink, useNavigate } from "react-router-dom";
import "./main.scss";
import "./about.scss";
import "../../styles/adress.scss";
import "../../styles/page.scss";
import { ProductCard } from "../ProductCard/ProductCard";
import { metals, reviews } from "../../utils/base";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/LangContext";

export const MainPage = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { lang, setLang } = useLang();

  const handleContainerClick = () => {
    navigate("/products");
  };

  return (
    <>
      <section className="main">
        <div className="main-container">
          <div className="main__title-container">
            <h1
              className="page__title-large main__title"
              dangerouslySetInnerHTML={{ __html: t("main.title") }}
            />
            <p
              className="main__subtitle"
              dangerouslySetInnerHTML={{ __html: t("main.subtitle") }}
            />
            <NavLink to={"/"} className="main__button page__button">
              {t("main.view_catalog")}
            </NavLink>
          </div>
          <div className="main-phone-container">
            <div className="main-pluses__main-container">
              <div className="main-pluses-container">
                <h3 className="main-pluses__title">
                  {t("main.benefits.price")}
                </h3>
                <h3 className="main-pluses__title">
                  {t("main.benefits.range")}
                </h3>
                <h3 className="main-pluses__title">
                  {t("main.benefits.delivery")}
                </h3>
              </div>
            </div>
            <NavLink to="/contacts">
              <img
                src="images/phone-link-img.svg"
                className="main-phone__link main-phone__link-desktop"
                alt={t("pricePage.phone_link_alt")}
              />
            </NavLink>
          </div>
          <NavLink to="/contacts">
            <img
              src="images/phone-link-img.svg"
              className="main-phone__link main-phone__link-mobile"
              alt={t("pricePage.phone_link_alt")}
            />
          </NavLink>
        </div>
      </section>

      <section className="about page__section">
        <div className="main-pluses__main-container-phone">
          <h2 className="main-pluses__title-phone main-pluses__title-phone-first">
            {t("main.benefits.price")}
          </h2>
          <h2 className="main-pluses__title-phone main-pluses__title-phone-second">
            {t("main.benefits.range")}
          </h2>
          <h2 className="main-pluses__title-phone">
            {t("main.benefits.delivery")}
          </h2>
        </div>
        <div className="about__title-container">
          <h3 className="page__title-400 about__subtitle">
            {t("about.info_title")}
          </h3>
          <h2 className="page__title-600 about__title">
            {t("about.company_title")}
          </h2>
        </div>
        <div className="about__paragraph-container">
          <p className="page__paragraph about__paragraph">
            {t("about.description_1")}
          </p>
          <br />
          <p className="page__paragraph about__paragraph">
            {t("about.description_2")}
          </p>
          <br />
          <p className="page__paragraph about__paragraph">
            {t("about.description_3")}
          </p>
        </div>
      </section>

      <section className="catalog page__section">
        <h1 className="page__title-600 catalog__title page__title-main">
          {t("catalog.title")} {/* Заголовок каталога */}
        </h1>
        <div className="catalog-container" onClick={handleContainerClick}>
          {metals.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              imageLink={item.card_image}
              title={i18n.language === "en" ? item.type.en : item.type.ru} // Получаем название металла в зависимости от языка
            />
          ))}
        </div>
        <div className="catalog-container-phone">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
          >
            {metals.map((item) => (
              <SwiperSlide
                key={item.type.ru}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductCard
                  key={item.id} // Добавим ключ для каждого элемента
                  imageLink={item.card_image}
                  title={i18n.language === "en" ? item.type.en : item.type.ru} // Получаем название металла в зависимости от языка
                />{" "}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <NavLink to={"/products"} className="page__button catalog__button">
          {t("catalog.view_full_catalog")} {/* Текст кнопки */}
        </NavLink>
      </section>
      <section className="question">
        <h2 className="question__title question__title-phone page__title-300">
          {t("question.title")}
        </h2>
        <div className="question-container">
          <div className="question__title-container">
            <h2 className="question__title question__title-first page__title-300">
              {t("question.title")}
            </h2>
            <h2 className="question__title question__title-blue page__title-700">
              {t("question.consultation_title")}
            </h2>
            <h3 className="question__subtitle page__title-300">
              {t("question.consultation_subtitle")}
            </h3>

            <NavLink to="/" className="question__button page__button-secondary">
              {t("question.consultation_button")}
            </NavLink>
          </div>
          <div>
            <img
              src="images/decoration-img.png"
              className="question-img-decoration"
              alt="decoration"
            />
            <picture className="question-img">
              <source
                media="(max-width: 1000px)"
                srcSet="images/man-img-mobile.png"
              />
              <img src="images/man-img.png" alt="man" />
            </picture>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2 className="reviews__title page__title-main">
          {t("reviews.title")}
        </h2>
        <div className="reviews-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            className="custom-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  review={review}
                  // @ts-ignore
                  language={lang}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="page__section partners">
        <h2 className="partners__title page__title-main">
          {t("partners.title")}
        </h2>
        <Swiper
          // className="partners-container-slider"
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // loop={true}
          breakpoints={{
            390: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <img src="images/novosibirsk-zavod.svg" alt="novosibirsk-zavod" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/evraz.png" alt="evraz" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/arcelor.png" alt="arcelor" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/magnitogorsk.png" alt="magnitogorsk" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/hlmk.png" alt="hlmk" />
          </SwiperSlide>
        </Swiper>
        <h2 className="partners__title page__title-main">
          {t("clients.title")}
        </h2>
        <Swiper
          // className="partners-container-slider"
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // loop={true}
          breakpoints={{
            390: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <img src="images/svetly-img.png" alt="nso" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/domarsh.png" alt="domarsh" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/novomarusino.png" alt="novomarusino" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ogni-sibiry.png" alt="ogni-sibiry" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="adress__section">
        <h2 className="adress__title page__title-main"> {t("adress.title")}</h2>
        <div className="adress-img-container">
          <picture className="adress-img">
            <source
              media="(max-width: 767px)"
              className="adress-img"
              srcSet="images/map-img-phone.png"
            />
            <img
              src="images/adress-img.png"
              className="adress-img"
              alt="adress-map"
            />
          </picture>

          <picture className="adress-img-map">
            <source
              media="(max-width: 767px)"
              className="adress-img-map"
              srcSet="images/map-data-img-phone.png"
            />
            <img
              src="images/map-data-img.png"
              className="adress-img-map"
              alt="adress-map-data"
            />
          </picture>
        </div>
      </section>
    </>
  );
};
