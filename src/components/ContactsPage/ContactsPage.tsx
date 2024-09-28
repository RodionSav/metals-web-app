import "./contacts.scss";
import "../../styles/page.scss";
// import "./form.scss";
import "../Form/form.scss";
import "../../styles/adress.scss";
import { useEffect } from "react";

export const ContactsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="contacts__header">
        <div className="contacts__header-container">
          <h1 className="page__title-large contacts__title">
            Контакты ООО "ДСР"
          </h1>
        </div>
      </section>
      <section className="page__section contacts">
        <form className="form">
          <div className="form__field-container">
            <h2 className="form__title">Имя</h2>
            <input type="text" className="form__field"></input>
          </div>
          <div className="form__field-container">
            <h2 className="form__title">Телефон</h2>
            <input type="number" className="form__field"></input>
          </div>
          <div className="form__field-container">
            <h2 className="form__title">E-Mail</h2>
            <input type="email" className="form__field"></input>
          </div>
          <div className="form__field-container">
            <h2 className="form__title">Комментарий</h2>
            <textarea className="form__field form__field__textarea"></textarea>
          </div>
          <div className="form__button-container">
            <button className="page__button form__button">
              Отправить сообщение
            </button>
          </div>
        </form>
        <p className="page__paragraph form__paragraph">
          ЩЩЩ <br></br> ДСР <br></br> 624760, Россия, Свердловская область,
          Верхняя Салда, ул. Парковая 1 <br></br> Телефон: +7 (34345) 6-23-66,
          +7 (34345) 6-00-01 <br></br> Факс: +7 (34345) 5-14-98, +7 (34345)
          6-20-68 E-mail: info@vsmpo-avisma.ru, td-info@vsmpo-avisma.ru
        </p>
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
