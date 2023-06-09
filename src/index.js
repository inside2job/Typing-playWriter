import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TestModeContextProvider } from "./Context/TestModeContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <TestModeContextProvider>
          <App />
        </TestModeContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);