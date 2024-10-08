import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contacts.scss";
import "../../styles/page.scss";
import "../Form/form.scss";
import "../../styles/adress.scss";
import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const ContactsPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Функция для проверки поля на ошибки
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return t("contacts.errors.nameRequired");
        }
        return "";
      case "phone":
        const phoneRegex = /^[0-9]{10,14}$/; // Простой regex для проверки номера телефона
        if (!value.trim()) {
          return t("contacts.errors.phoneRequired");
        } else if (!phoneRegex.test(value)) {
          return t("contacts.errors.phoneInvalid");
        }
        return "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простой regex для проверки email
        if (!value.trim()) {
          return t("contacts.errors.emailRequired");
        } else if (!emailRegex.test(value)) {
          return t("contacts.errors.emailInvalid");
        }
        return "";
      case "comment":
        if (!value.trim()) {
          return t("contacts.errors.commentRequired");
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      phone: validateField("phone", formData.phone),
      email: validateField("email", formData.email),
      comment: validateField("comment", formData.comment),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://web.dsr-metal.com/api/submit-form",
          formData
        );
        console.log(t("contacts.successMessage"), response.data);
      } catch (error) {
        console.error(t("contacts.errorMessage"), error);
      }
    } else {
      console.log(t("contacts.formErrors"));
    }
  };

  return (
    <>
      <section className="contacts__header">
        <div className="contacts__header-container">
          <h1 className="page__title-large contacts__title" dangerouslySetInnerHTML={{ __html: t("contacts.title") }} />
        </div>
      </section>
      <section className="page__section contacts">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__field-container">
            <h2 className="form__title">{t("contacts.name")}</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form__field ${errors.name ? "form__field--error" : ""}`}
            />
            {errors.name && (
              <Text
                color="red.500"
                fontSize="sm"
                mt="2"
                position="absolute"
                className="form__error"
              >
                {errors.name}
              </Text>
            )}
          </div>
          <div className="form__field-container">
            <h2 className="form__title">{t("contacts.phone")}</h2>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form__field ${errors.phone ? "form__field--error" : ""}`}
            />
            {errors.phone && (
              <Text
                color="red.500"
                fontSize="sm"
                mt="2"
                position="absolute"
                className="form__error"
              >
                {errors.phone}
              </Text>
            )}
          </div>
          <div className="form__field-container">
            <h2 className="form__title">{t("contacts.email")}</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form__field ${errors.email ? "form__field--error" : ""}`}
            />
            {errors.email && (
              <Text
                color="red.500"
                fontSize="sm"
                mt="2"
                position="absolute"
                className="form__error"
              >
                {errors.email}
              </Text>
            )}
          </div>
          <div className="form__field-container">
            <h2 className="form__title">{t("contacts.comment")}</h2>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className={`form__field form__field__textarea ${errors.comment ? "form__field--error" : ""}`}
            ></textarea>
            {errors.comment && (
              <Text
                color="red.500"
                fontSize="sm"
                mt="2"
                position="absolute"
                className="form__error"
              >
                {errors.comment}
              </Text>
            )}
          </div>
          <div className="form__button-container">
            <button type="submit" className="page__button form__button">
              {t("contacts.submitButton")}
            </button>
          </div>
        </form>
        <p className="page__paragraph form__paragraph" dangerouslySetInnerHTML={{ __html: t("contacts.address") }} />
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
