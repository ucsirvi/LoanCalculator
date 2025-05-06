
import { useState, useEffect } from "react";
import { fetchExchangeRates } from "../services/exchangeRateAPI";

const useExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExchangeRates = async () => {
      try {
        const rates = await fetchExchangeRates();
        setExchangeRates(rates);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getExchangeRates();
  }, []);

  return { exchangeRates, loading, error };
};

export default useExchangeRates;
