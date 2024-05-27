import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import Home page component
import MainTinder from "./pages/MainTinder"; // Import MainTinder page component
import Register from "./pages/Register"; // Import Register page component
import Login from "./pages/Login"; // Import Login page component
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute component for protected routes
import Navbar from "./components/NavBar"; // Import Navbar component

const App = () => {
  return (
    <Router>
      {/* Navbar component to display navigation bar */}
      <Navbar />
      <Routes>
        {/* Define route for Home page */}
        <Route path="/" element={<Home />} />
        {/* Define route for MainTinder page wrapped in PrivateRoute */}
        <Route
          path="/start"
          element={
            <PrivateRoute>
              <MainTinder />
            </PrivateRoute>
          }
        />
        {/* Define route for Register page */}
        <Route path="/register" element={<Register />} />
        {/* Define route for Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
