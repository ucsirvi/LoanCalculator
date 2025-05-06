import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useCurrency } from "../context/CurrencyContext";
import { useTheme } from "../context/ThemeContext";

const AmortizationSchedule = ({ schedule }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { currency, exchangeRates } = useCurrency();
  const { theme } = useTheme();

  const getConvertedValue = (value) => {
    const numericValue = parseFloat(value) || 0;
    if (currency !== "USD" && exchangeRates[currency]) {
      return (numericValue * exchangeRates[currency]).toFixed(2);
    }
    return numericValue.toFixed(2);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: isMobile ? "300px" : "400px",
        overflowY: "auto",
        overflowX: "auto",
        width: "100%",
        maxWidth: isMobile ? "100%" : "1100px",
        backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          p: 2,
          color: theme === "dark" ? "#fff" : "#000",
          backgroundColor: theme === "dark" ? "#2c2c2c" : "#f5f5f5",
          position: "sticky",
          top: 0,
          zIndex: 2,
        }}
      >
        Amortization Schedule ({currency})
      </Typography>
      <Table
        sx={{
          "& .MuiTableCell-root": {
            color: theme === "dark" ? "#fff" : "#000",
            borderColor: theme === "dark" ? "#444" : "#ccc",
          },
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: theme === "dark" ? "#000" : "#e0e0e0",
              position: "sticky",
              top: "48px",
              zIndex: 1,
            }}
          >
            <TableCell>
              <strong>Month</strong>
            </TableCell>
            <TableCell>
              <strong>Principal</strong>
            </TableCell>
            <TableCell>
              <strong>Interest</strong>
            </TableCell>
            <TableCell>
              <strong>Remaining Balance</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow
              key={row.month}
              sx={{
                backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
                "&:nth-of-type(odd)": {
                  backgroundColor: theme === "dark" ? "#2a2a2a" : "#f9f9f9",
                },
              }}
            >
              <TableCell>{row.month}</TableCell>
              <TableCell>
                {getConvertedValue(row.principal)} {currency}
              </TableCell>
              <TableCell>
                {getConvertedValue(row.interest)} {currency}
              </TableCell>
              <TableCell>
                {getConvertedValue(row.remainingBalance)} {currency}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationSchedule;
