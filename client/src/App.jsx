import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExchangeRatesPage from "./pages/ExchangeRatesPage";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "./context/ThemeContext";
import { CurrencyProvider } from "./context/CurrencyContext";

const App = () => {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default App;
