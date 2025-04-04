import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home"; // Import Home component
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CustomNavbar from './components/Navbar'; // Import CustomNavbar
import Sidebar from "./components/Sidebar";
import YearlyStats from "./components/YearlyStats";
import FoodDashboard from "./components/food-dashboard";
import Ssidebar from "./components/Ssidebar";
import Footer from "./components/footer";
import BillingSection from "./components/BillingSection";
import FoodOrderingApp from "./components/FoodOrderingApp";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Navbar" element={<CustomNavbar />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/YearlyStats" element={<YearlyStats />} />
        <Route path="/FoodDashboard" element={<FoodDashboard/>} />
        <Route path="/Ssidebar" element={<Ssidebar/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/BillingSection" element={<BillingSection/>} />
        <Route path="/FoodOrderingApp" element={<FoodOrderingApp />} />
      </Routes>
      
    </Router>
  );
};

export default App;

