import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h5" gutterBottom>
        Something went wrong in the application.
      </Typography>
      <Button
        variant="contained"
        color="info"
        component={Link}
        to="/"
        sx={{ mt: 2 }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
