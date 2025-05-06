import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { useCurrency } from "../context/CurrencyContext";

const CurrencyConverter = () => {
  const { currency, setCurrency } = useCurrency();
  const { theme } = useTheme();

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <Box sx={{ width: "200px" }}>
      <TextField
        select
        label="Currency"
        value={currency}
        onChange={handleCurrencyChange}
        fullWidth
        margin="normal"
        sx={{
          backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            color: theme === "dark" ? "#fff" : "#000",
            "& fieldset": {
              borderColor: theme === "dark" ? "#555" : "#ccc",
            },
            "&:hover fieldset": {
              borderColor: theme === "dark" ? "#888" : "#000",
            },
            "&.Mui-focused fieldset": {
              borderColor: theme === "dark" ? "#1976d2" : "#1976d2",
            },
          },
          "& .MuiInputLabel-root": {
            color: theme === "dark" ? "#fff" : "#000",
          },
          "& .MuiSelect-icon": {
            color: theme === "dark" ? "#fff" : "#000",
          },
        }}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
                "& .MuiMenuItem-root": {
                  color: theme === "dark" ? "#fff" : "#000",
                  "&:hover": {
                    backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
                  },
                  "&.Mui-selected": {
                    backgroundColor: theme === "dark" ? "#444" : "#e0e0e0",
                    color: theme === "dark" ? "#fff" : "#000",
                  },
                },
              },
            },
          },
        }}
      >
        {["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD"].map((cur) => (
          <MenuItem key={cur} value={cur}>
            {cur}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default CurrencyConverter;
