import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage.js";

export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    );
  }