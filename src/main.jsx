import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvide from "./context/UserContextProvide.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvide>
      <App />
    </UserContextProvide>
  </React.StrictMode>
);
