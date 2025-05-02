import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/inter"; // Defaults to weight 400
// Optionally import other weights/styles
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { ThemeProvider } from "./providers/ThemeContext";
import "./providers/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>
);
