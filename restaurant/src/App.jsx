import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CustomNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import YearlyStats from "./components/YearlyStats";
import FoodDashboard from "./components/food-dashboard";
import Ssidebar from "./components/Ssidebar";
import Footer from "./components/footer";
import BillingSection from "./components/BillingSection";
import FoodOrderingApp from "./components/FoodOrderingApp";
import Layout from "./Layout/Layout";
import CampaignDashboard from "./pages/Promotions/BasicCampaign";
import Coupon from "./pages/Promotions/Coupon";
import DisbursementReport from "./pages/Disbursement/DisbursementReport";
import AddonManager from "./pages/FoodManagement/AddonManager";
import FoodReport from "./pages/Report/FoodReport";
import EmployeeRole from "./pages/EmployeeRole/EmployeeRole";
import EmployeeForm from "./pages/EmployeeRole/EmployeeForm";
import EmployeeList from "./pages/EmployeeRole/EmployeeList";
import FoodCampaign from "./pages/Promotions/FoodCampaign";
import NotificationSetup from "./pages/BusinessManagement/NotificationSetup";
// import EmployeeListFinal from "./pages/EmployeeRole/EmployeeListFinal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        {/* <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Navbar" element={<CustomNavbar />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/YearlyStats" element={<YearlyStats />} />
        <Route path="/FoodDashboard" element={<FoodDashboard />} />
        <Route path="/Ssidebar" element={<Ssidebar />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/BillingSection" element={<BillingSection />} />
        <Route
          path="/FoodCampaign"
          element={
            <Layout>
              <FoodCampaign />
            </Layout>
          }
        />
        <Route
          path="/FoodOrderingApp"
          element={
            <Layout>
              <FoodOrderingApp />
            </Layout>
          }
        />
        <Route path="/Layout" element={<Layout />} />
        <Route
          path="/CampaignDashboard"
          element={
            <Layout>
              <CampaignDashboard />
            </Layout>
          }
        />
        <Route
          path="/Coupon"
          element={
            <Layout>
              <Coupon />
            </Layout>
          }
        />
        <Route
          path="/DisbursementReport"
          element={
            <Layout>
              <DisbursementReport />
            </Layout>
          }
        />
        <Route
          path="/AddonManager"
          element={
            <Layout>
              <AddonManager />
            </Layout>
          }
        />
        <Route
          path="/FoodReport"
          element={
            <Layout>
              <FoodReport />
            </Layout>
          }
        />
        <Route
          path="/EmployeeRole"
          element={
            <Layout>
              <EmployeeRole />
            </Layout>
          }
        />
        <Route path="/EmployeeList" element={<EmployeeList />} />
        {/* <Route path="/EmployeeListFinal" element={<EmployeeListFinal />} /> */}
        <Route path="/EmployeeForm" element={<EmployeeForm />} />
        <Route
          path="/NotificationSetup"
          element={
            <Layout>
              <NotificationSetup />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
