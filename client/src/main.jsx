import React from "react"; // Import React to access StrictMode
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
// import './index.css'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Access StrictMode through React */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
