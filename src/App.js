import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHome from "./pages/user/UserHome";
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
          <Route path="/dashboard/*" element={<UserHome />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
