const API_URL = import.meta.env.VITE_API_URL;

export const fetchExchangeRates = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }
    const data = await response.json();
    return data.conversion_rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error.message);
    throw error;
  }
};
