import { BrowserRouter, Routes, Route } from "react-router-dom";


import Account from "./Pages/AccountPage/Account.js";
import CartPage from "./Pages/CartPage/CartPage.js";
import HomePage from "./Pages/HomePage/HomePage.js";


export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
    );
  }