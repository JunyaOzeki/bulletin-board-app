import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ThreadProvider } from "./ThreadProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThreadProvider>
      <App />
    </ThreadProvider>
  </React.StrictMode>
);
