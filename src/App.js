import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHomePage from "./pages/user/UserHomePage";
import Home from "./pages/Home";

// import CSS
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<UserHomePage />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
