import { ThemeProvider, createTheme } from "@mui/material";
import Pages from "./presentation/routes";
import React from "react";

export default function App(): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Pages />
    </ThemeProvider>
  );
}
