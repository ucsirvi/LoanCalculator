import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const EMIForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [errors, setErrors] = useState({});
  const { theme } = useTheme();

  const validateFields = () => {
    const newErrors = {};
    if (!loanAmount) newErrors.loanAmount = "Required";
    if (!interestRate) newErrors.interestRate = "Required";
    if (!term) newErrors.term = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const monthlyRate = interestRate / 12 / 100;
    const months = term * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const schedule = [];
    let remainingBalance = loanAmount;

    for (let i = 1; i <= months; i++) {
      const interest = remainingBalance * monthlyRate;
      const principal = emi - interest;
      remainingBalance -= principal;
      schedule.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        remainingBalance: remainingBalance.toFixed(2),
      });
    }

    onCalculate({ emi: emi.toFixed(2), schedule });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        label="Loan Amount"
        type="number"
        fullWidth
        margin="normal"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        required
        error={!!errors.loanAmount}
        helperText={errors.loanAmount}
        InputLabelProps={{
          style: { color: theme === "dark" ? "#fff" : "#000" },
        }}
        InputProps={{
          style: { color: theme === "dark" ? "#fff" : "#000" },
        }}
      />
      <TextField
        label="Interest Rate (%)"
        type="number"
        fullWidth
        margin="normal"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        required
        error={!!errors.interestRate}
        helperText={errors.interestRate}
        InputLabelProps={{
          style: { color: theme === "dark" ? "#fff" : "#000" },
        }}
        InputProps={{
          style: { color: theme === "dark" ? "#fff" : "#000" },
        }}
      />
      <TextField
        label="Term (Years)"
        type="number"
        fullWidth
        margin="normal"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
        error={!!errors.term}
        helperText={errors.term}
        InputLabelProps={{
          style: { color: theme === "dark" ? "#fff" : "#000" },
        }}
        InputProps={{
          style: { color: theme === "dark" ? "#fff" : "#000" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Calculate
      </Button>
    </Box>
  );
};

export default EMIForm;
