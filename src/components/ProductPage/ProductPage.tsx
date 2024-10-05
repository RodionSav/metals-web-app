import "./productPage.scss";
import "../../styles/page.scss";
import { ProductCard } from "../ProductCard/ProductCard";
import { Metal } from "../../types/metalType";
import { metals } from "../../utils/base";
import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Импортируем хук для переводов

export const ProductPage = () => {
  const { t, i18n } = useTranslation(); // Инициализируем перевод

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="product__header">
        <div className="page__section">
          <h1 className="page__title-large product__main-title">
            {t("header.products")}
          </h1>
        </div>
      </section>
      <section className="page__section">
        <div className="product-container">
          {metals.map((item: Metal) => (
            <ProductCard
              key={item.id}
              imageLink={item.card_image}
              title={i18n.language === "en" ? item.type.en : item.type.ru} // Получаем название металла в зависимости от языка
            />
          ))}
        </div>
      </section>
    </>
  );
};
