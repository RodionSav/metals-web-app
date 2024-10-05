import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import "./i18n";
import { LangProvider } from "./context/LangContext";
// import { IntlProvider } from "react-intl";
// import messages_en from "./translations/en.json";
// import messages_ru from "./translations/ru.json";
// import { LangProvider, useLang } from "./context/LangContext";

// const messages = {
// en: messages_en,
// ru: messages_ru,
// };

function App() {
  // const { lang } = useLang();

  return (
    // @ts-ignore
    // <IntlProvider locale={lang} messages={messages[lang]} defaultLocale={'ru'}>
    <ChakraProvider>
      <LangProvider>
        <div className="App">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </LangProvider>
    </ChakraProvider>
    // </IntlProvider>
  );
}

// function App() {
//   return (
//     <LangProvider>
//       <AppContent />
//     </LangProvider>
//   );
// }

export default App;
