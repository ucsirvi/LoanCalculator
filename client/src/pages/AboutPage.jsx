import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      p={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        fontSize: isMobile ? "0.875rem" : "1rem",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "800px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }}
        >
          About This App
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
        >
          This Loan Calculator App is a modern, single-page web application
          built using <strong>React JS</strong> and <strong>Material UI</strong>
          . It allows users to calculate loan EMIs (Equated Monthly
          Installments), view a detailed amortization schedule, and see
          real-time currency conversions of their EMI using live exchange rates.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: isMobile ? "1.25rem" : "1.5rem" }}
        >
          🔧 Features
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Loan EMI calculation using standard financial formulas."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Dynamic amortization schedule table with monthly breakdown."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Real-time currency conversion of EMI using a live exchange rate API."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Paginated exchange rate table for 160+ currencies."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Dark/Light mode toggle for a customizable experience."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Collapsible header navigation on mobile screens."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Fully responsive UI built with Material UI."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: isMobile ? "1.25rem" : "1.5rem" }}
        >
          🌐 Technologies Used
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="React (Hooks, Routing, Context API)."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Material UI for styling and responsive design."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Axios for API calls."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Exchange Rate API for real-time currency conversions."
              primaryTypographyProps={{
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default AboutPage;
