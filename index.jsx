// index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Make sure this path is correct

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
