import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store.js";
import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);