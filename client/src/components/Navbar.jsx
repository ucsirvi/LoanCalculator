import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Exchange Rates (Live)", to: "/exchange-rates" },
    { label: "About", to: "/about" },
    { label: "Error Page", to: "/error-page" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme === "dark" ? "#333" : "#1976d2",
        color: theme === "dark" ? "#fff" : "#fff",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Loan Calculator
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "200px",
                  backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
                  color: theme === "dark" ? "#fff" : "#000",
                },
              }}
            >
              <List sx={{ width: "100%" }}>
                {navLinks.map((link) => (
                  <ListItem
                    button
                    key={link.label}
                    component={Link}
                    to={link.to}
                    onClick={handleDrawerToggle}
                    sx={{
                      color: theme === "dark" ? "#fff" : "#000",
                      "&:hover": {
                        backgroundColor: theme === "dark" ? "#444" : "#e0e0e0",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.to}
                color="inherit"
                sx={{ textTransform: "none", fontSize: "1.1rem", ml: 1 }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
        <Box ml={2} display="flex" alignItems="center">
          <Switch checked={theme === "dark"} onChange={toggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
