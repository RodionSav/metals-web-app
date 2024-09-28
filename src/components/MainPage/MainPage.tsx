import { NavLink } from "react-router-dom";
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

export const MainPage = () => {
  return (
    <>
      <section className="main">
        <div className="main-container">
          <div className="main__title-container">
            <h1 className="page__title-large main__title">
              Продажа и доставка <br></br> металлопроката <br></br> по всему
              миру
            </h1>
            <p className="main__subtitle">
              Ежедневно с нами работают и остаются <br></br> довольными более 30
              клиентов
              <br></br>
              <br></br> Качество и надежность.
            </p>
            <NavLink to={"/"} className="main__button page__button">
              Смотреть каталог
            </NavLink>
          </div>
          <div className="main-phone-container">
            <div className="main-pluses__main-container">
              <div className="main-pluses-container">
                <h3 className="main-pluses__title">Выгодные цены</h3>
                <h3 className="main-pluses__title">
                  Большой ассортимент товаров
                </h3>
                <h3 className="main-pluses__title">Доставка</h3>
              </div>
            </div>
            <img
              src="images/phone-link-img.svg"
              className="main-phone__link main-phone__link-desktop"
              alt="phone-link"
            />
          </div>
          <img
              src="images/phone-link-img.svg"
              className="main-phone__link main-phone__link-mobile"
              alt="phone-link"
            />
        </div>
      </section>
      <section className="about page__section">
        <div className="main-pluses__main-container-phone">
          <h2 className="main-pluses__title-phone main-pluses__title-phone-first">
            Выгодные цены
          </h2>
          <h2 className="main-pluses__title-phone main-pluses__title-phone-second">
            Большой ассортимент товаров
          </h2>
          <h2 className="main-pluses__title-phone">Доставка</h2>
        </div>
        <div className="about__title-container">
          <h3 className="page__title-400 about__subtitle">Информация о нас</h3>
          <h2 className="page__title-600 about__title">Наша компания</h2>
        </div>
        <div className="about__paragraph-container">
          <p className="page__paragraph about__paragraph">
            Наша компания уже более 9 лет является надежным партнером на рынке
            металлопроката, предлагая широкий ассортимент металлопроката оптом и
            в розницу.
          </p>
          <br></br>
          <p className="page__paragraph about__paragraph">
            Мы гордимся тем, что за годы работы установили прочные деловые связи
            с ключевыми предприятиями авиа промышленности, машиностроения и
            цветной металлургии.
          </p>
          <br></br>
          <p className="page__paragraph about__paragraph">
            Опытный коллектив компании быстро и грамотно произведет расчет
            покупаемой продукции, оформит все необходимые документы на отгрузку.
          </p>
        </div>
        <div className="about__card-container">
          <p className="about__card__title about__card-first">
            Приоритет нашей работы – это интерес клиента. <br></br> А основные
            принципы: бережное отношение к заказчику и расширение ассортимента
            продукции.{" "}
          </p>
          <div className="about__card about__card-second">
            <img
              src="images/hands-img.svg"
              className="about__card-img"
              alt="hands"
            />
            <h2 className="page__title-400 about__card__subtitle">
              Работаем с ведущими металлургическими компаниями
            </h2>
          </div>
          <div className="about__card about__card-third">
            <img
              src="images/car-img.svg"
              className="about__card-img"
              alt="hands"
            />
            <h2 className="page__title-400 about__card__subtitle">
              Возможность поставки ЛЮБОЙ продукции стали и сплавов
            </h2>
          </div>
          <div className="about__card about__card-fourth">
            <img
              src="images/time-img.svg"
              className="about__card-img about__card-img-third"
              alt="hands"
            />
            <h2 className="page__title-400 about__card__subtitle">
              Быстрая обработка заявок
            </h2>
          </div>
          <div className="about__card about__card-fifth">
            <img
              src="images/earth-img.svg"
              className="about__card-img  about__card-img-fourth"
              alt="hands"
            />
            <h2 className="page__title-400 about__card__subtitle">
              Доставка по всему миру
            </h2>
          </div>
          <div className="about__card about__card-sixth">
            <img
              src="images/dnk-img.svg"
              className="about__card-img about__card-img-fifth"
              alt="hands"
            />
            <h2 className="page__title-400 about__card__subtitle">
              Индивидуальный подход
            </h2>
          </div>
        </div>
      </section>
      <section className="catalog page__section">
        <h1 className="page__title-600 catalog__title page__title-main">
          Каталог продукции
        </h1>
        <div className="catalog-container">
          {metals.slice(0, 4).map((item) => (
            <ProductCard title={item.type} imageLink={item.card_image} />
          ))}
        </div>
        <div className="catalog-container-phone">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            breakpoints={{
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
            {metals.map((item) => (
              <SwiperSlide
                key={item.type}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductCard title={item.type} imageLink={item.card_image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <NavLink to={"/"} className="page__button catalog__button">
          Смотреть весь каталог
        </NavLink>
      </section>
      <section className="delivery page__section">
        <div className="delivery-container">
          <h2 className="page__title-main delivery__title">Доставка</h2>
          <p className="page__paragraph delivery__paragraph">
            Чтобы максимально сократить временные затраты и транспортные расходы
            наших клиентов, наша компания предоставляет услуги по доставке
            металлопроката и труб на объект Заказчика по всему мира. <br></br>
            <br></br>
            Наши менеджеры составляют график доставки на объект, учитывая все
            Ваши требования и пожелания по поводу времени доставки, и сделают
            все от них зависящее, чтобы продукция была доставлена в оговоренные
            сроки.
          </p>
        </div>
        <div className="delivery-img-container">
          <img
            src="images/truck-img.png"
            className="delivery-img"
            alt="truck"
          />
        </div>
      </section>
      <section className="question">
        <h2 className="question__title question__title-phone page__title-300">
          У вас остались вопросы?
        </h2>
        <div className="question-container">
          <div className="question__title-container">
            <h2 className="question__title question__title-first page__title-300">
              У вас остались вопросы?
            </h2>
            <h2 className="question__title question__title-blue page__title-700">
              Закажите консультацию специалиста
            </h2>
            <h3 className="question__subtitle page__title-300">
              Мы подробно ответим на все ваши вопросы и подберем наиболее
              удобный вариант вклада
            </h3>

            <NavLink to="/" className="question__button page__button-secondary">
              Заказать консультацию
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
                media="(max-width: 767px)"
                srcSet="images/man-img-mobile.png"
              />
              <img src="images/man-img.png" alt="man" />
            </picture>
          </div>
        </div>
      </section>
      <section className="reviews">
        <h2 className="reviews__title page__title-main">Отзывы клиентов</h2>
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
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="adress__section">
        <h2 className="adress__title page__title-main">Адресс</h2>
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
