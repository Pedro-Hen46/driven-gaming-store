import { BrowserRouter, Routes, Route } from "react-router-dom";


import Account from "./Pages/AccountPage/Account.js";
import CartPage from "./Pages/CartPage/CartPage.js";
import HomePage from "./Pages/HomePage/HomePage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.js";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.js";


export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product" element={<ProductDetails />} />

          </Routes>
        </BrowserRouter>
    );
  }