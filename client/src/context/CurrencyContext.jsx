import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD"); // Default currency is USD
  const [exchangeRates, setExchangeRates] = useState({}); // Stores exchange rates

  const updateExchangeRates = (rates) => {
    setExchangeRates(rates);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, exchangeRates, updateExchangeRates }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
