import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null // Corrected the key to "user"
  );

  // Optional: Use useEffect to sync with localStorage when the user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {/* Include setCurrentUser */}
      {children}
    </AuthContext.Provider>
  );
};
