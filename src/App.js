import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashboardPage from "./pages/userPages/UserDashboardPage";
import Home from "./pages/clientPages/Home";

// import CSS
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
import "./assets/css/style.css";
import Signin from "./pages/clientPages/Signin";
import Signup from "./pages/clientPages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<UserDashboardPage />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
