import { BrowserRouter, Routes, Route } from "react-router-dom";


import Account from "./Pages/AccountPage/Account.js";
import CardPage from "./Pages/CardPage/CardPage.js";
import HomePage from "./Pages/HomePage/HomePage.js";


export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CardPage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
    );
  }