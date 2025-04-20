import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Index.css";
import App from "./App.jsx";
import "./theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
