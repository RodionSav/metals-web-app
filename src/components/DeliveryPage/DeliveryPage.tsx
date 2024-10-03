import "./delivery.scss";
import "../../styles/page.scss";
import { NavLink } from "react-router-dom";

export const DeliveryPage = () => {
  return (
    <>
      <section className="delivery__section">
        <div className="delivery-container-page">
          <h1 className="page__title-large delivery__section__title">
            Доставка от DSR Metal
          </h1>
        </div>
      </section>
      <section className="page__section delivery__article">
        <p className="page__paragraph">
          Чтобы максимально сократить временные затраты и транспортные расходы
          наших клиентов, компания DSR Metal предоставляет услуги по доставке
          металлопроката и труб на объект Заказчика по всему мира. <br></br>
          <br></br>
          Все, что необходимо Вам сделать – это оформить заказ и указать
          желаемый способ доставки. <br></br>
          <br></br>
          Наши менеджеры составляют график доставки на объект, учитывая все Ваши
          требования и пожелания по поводу времени доставки, и сделают все от
          них зависящее, чтобы продукция была доставлена в оговоренные сроки.
          <br></br>
        </p>
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
