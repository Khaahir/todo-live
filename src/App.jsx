import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addwork from "./pages/AddWork";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/add" element={<Addwork />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
