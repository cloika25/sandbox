import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import "./index.css";
import { ThemeProvider } from "@gravity-ui/uikit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
