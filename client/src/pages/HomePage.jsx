import React, { useState, useEffect } from "react";
import EMIForm from "../components/EMIForm";
import AmortizationSchedule from "../components/AmortizationSchedule";
import CurrencyConverter from "../components/CurrencyConverter";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { useCurrency } from "../context/CurrencyContext";

const HomePage = () => {
  const [schedule, setSchedule] = useState(null);
  const [emi, setEmi] = useState(null);
  const { updateExchangeRates } = useCurrency();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        updateExchangeRates(data.conversion_rates);
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, [API_URL, updateExchangeRates]);

  const handleCalculation = (result) => {
    setSchedule(result.schedule);
    setEmi(result.emi);
  };

  const handleReset = () => {
    setSchedule(null);
    setEmi(null);
  };

  return (
    <Box
      p={isMobile ? 2 : 4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundColor: theme === "dark" ? "#303030" : "#f9f9f9",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Loan Calculator Dashboard
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: isMobile ? 2 : 3,
          mb: 3,
          width: "100%",
          maxWidth: isMobile ? "95%" : "600px",
          backgroundColor: theme === "dark" ? "#424242" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        }}
      >
        <EMIForm onCalculate={handleCalculation} />
      </Paper>
      {emi && (
        <Box
          mb={3}
          width="100%"
          maxWidth={isMobile ? "95%" : "600px"}
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" sx={{ mb: isMobile ? 1 : 0 }}>
            Monthly EMI: ${emi}
          </Typography>
        </Box>
      )}
      {schedule && (
        <Box
          mb={3}
          width="100%"
          maxWidth={isMobile ? "95%" : "600px"}
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <CurrencyConverter />
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            sx={{ mt: isMobile ? 2 : 0 }}
          >
            Reset Table
          </Button>
        </Box>
      )}
      {schedule && (
        <Box
          width="100%"
          maxWidth={isMobile ? "100%" : "1100px"}
          sx={{
            overflowX: "auto",
          }}
        >
          <Divider sx={{ mb: 2 }} />
          <AmortizationSchedule schedule={schedule} theme={theme} />
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
