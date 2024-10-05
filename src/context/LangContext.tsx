import React, { createContext, useContext, useState, ReactNode } from 'react';

// Определяем типы для контекста
interface LangContextType {
  lang: string;
  setLang: (lang: string) => void;
}

// Создаем контекст с начальным значением null
const LangContext = createContext<LangContextType | undefined>(undefined);

// Провайдер контекста с типизацией
export const LangProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<string>('ru');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

// Хук для использования контекста с типизацией
export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
