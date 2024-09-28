import "./form.scss";

export const Form = () => {
  return (
    <form className="form">
      <div className="form__field-container">
        <label htmlFor="name" className="form__title">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form__field"
          required
          placeholder="Введите ваше имя"
        />
      </div>
      <div className="form__field-container">
        <label htmlFor="phone" className="form__title">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form__field"
          required
          placeholder="Введите ваш телефон"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </div>
      <div className="form__field-container">
        <label htmlFor="email" className="form__title">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form__field"
          required
          placeholder="Введите ваш e-mail"
        />
      </div>
      <div className="form__field-container">
        <label htmlFor="comment" className="form__title">
          Комментарий
        </label>
        <textarea
          id="comment"
          name="comment"
          className="form__field form__field__textarea"
          placeholder="Введите ваш комментарий"
        />
      </div>
      <div className="form__button-container">
        <button type="submit" className="page__button form__button">
          Отправить сообщение
        </button>
      </div>
    </form>
  );
};
