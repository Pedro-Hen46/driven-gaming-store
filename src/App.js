import { BrowserRouter, Routes, Route } from "react-router-dom";


import Account from "./Pages/AccountPage/Account.js";
import CartPage from "./Pages/CartPage/CartPage.js";
import HomePage from "./Pages/HomePage/HomePage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.js";
import UserContext from "./Context/userContext";
import { useState } from "react";


export default function App() {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken, name, setName }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}