import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { MainPage } from "./components/MainPage/MainPage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { DeliveryPage } from "./components/DeliveryPage/DeliveryPage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { ContactsPage } from "./components/ContactsPage/ContactsPage";
import { PricePage } from "./components/PricePage/PricePage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="prices" element={<PricePage />} />
        </Route>

      </Routes>
    </HashRouter>
  );
};
