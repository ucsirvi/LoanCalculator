import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Alert,
  Box,
  Select,
  MenuItem,
  Pagination,
  useMediaQuery,
} from "@mui/material";
import useExchangeRates from "../hooks/useExchangeRates";
import { useTheme } from "../context/ThemeContext";

const ExchangeRatesPage = () => {
  const { exchangeRates, loading, error } = useExchangeRates();
  const { theme } = useTheme();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const isMobile = useMediaQuery("(max-width:600px)");

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );

  const totalRows = Object.keys(exchangeRates).length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRates = Object.entries(exchangeRates).slice(
    startIndex,
    endIndex
  );

  return (
    <Box p={isMobile ? 2 : 4}>
      <Typography
        variant={isMobile ? "h6" : "h5"}
        gutterBottom
        sx={{ textAlign: isMobile ? "center" : "left" }}
      >
        Live Exchange Rates (Base: USD)
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "calc(100vh - 200px)",
          overflowY: "auto",
          backgroundColor: theme === "dark" ? "#424242" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          mb: 2,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
                  color: theme === "dark" ? "#fff" : "#000",
                  fontWeight: "bold",
                  p: isMobile ? 1 : 3,
                }}
              >
                Currency
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
                  color: theme === "dark" ? "#fff" : "#000",
                  fontWeight: "bold",
                  p: isMobile ? 1 : 3,
                }}
              >
                Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRates.map(([currency, rate]) => (
              <TableRow
                key={currency}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: theme === "dark" ? "#2c2c2c" : "#f9f9f9",
                  },
                  "&:nth-of-type(even)": {
                    backgroundColor: theme === "dark" ? "#3c3c3c" : "#fff",
                  },
                }}
              >
                <TableCell
                  sx={{
                    color: theme === "dark" ? "#fff" : "#000",
                    p: isMobile ? 1 : 3,
                  }}
                >
                  {currency}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: theme === "dark" ? "#fff" : "#000",
                    p: isMobile ? 1 : 3,
                  }}
                >
                  {rate.toFixed(4)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        mt={3}
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={isMobile ? "center" : "flex-end"}
        alignItems="center"
        sx={{
          backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
          color: theme === "dark" ? "#fff" : "#000",
          p: 2,
          borderRadius: "8px",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{ mb: isMobile ? 2 : 0, mr: isMobile ? 0 : 2 }}
        >
          <Typography
            variant="body2"
            sx={{
              mr: 1,
              color: theme === "dark" ? "#fff" : "#000",
            }}
          >
            Rows per page:
          </Typography>
          <Select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(e.target.value);
              setPage(1);
            }}
            size="small"
            sx={{
              backgroundColor: theme === "dark" ? "#424242" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
              borderColor: theme === "dark" ? "#555" : "#ccc",
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: theme === "dark" ? "#424242" : "#fff",
                  color: theme === "dark" ? "#fff" : "#000",
                },
              },
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mb: isMobile ? 2 : 0,
            mr: isMobile ? 0 : 2,
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          {startIndex + 1}–{Math.min(endIndex, totalRows)} of {totalRows}
        </Typography>

        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
          size="small"
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: theme === "dark" ? "#424242" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
              "&:hover": {
                backgroundColor: theme === "dark" ? "#555" : "#f0f0f0",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ExchangeRatesPage;
