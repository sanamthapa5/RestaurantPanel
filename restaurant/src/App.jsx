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
import WithdrawMethodSetup from "./pages/BusinessManagement/WalletMethod";
import SubscribedOrders from "./pages/OrderManagement/SubscribedOrders";
import CustomerReviews from "./pages/BusinessManagement/CustomersReviews";
import ExpenseReport from "./pages/Report/ExpenseReport";
// import AdForm from "./pages/Advertisement/NewAdvertisement/AdForm";
import NewAdvertisement from "./pages/Advertisement/NewAdvertisement/NewAdvertisement";
import Pending from "./pages/Advertisement/AdvertisementList/Pending";
import Category from "./pages/FoodManagement/Category";
import SubCategory from "./pages/FoodManagement/Subcategory";
import AdsList from "./pages/Advertisement/AdvertisementList/AdsList";
import BusinessPlan from "./pages/BusinessManagement/BusinessPlan";
// import RestaurantSettings from "./pages/BusinessManagement/RestaurantSettings";
import RestaurantSetup from "./pages/BusinessManagement/RestaurantSetup";
import FoodList from "./pages/FoodManagement/Foods/FoodList";
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
        <Route path="/Navbar" element={<CustomNavbar />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/YearlyStats" element={<YearlyStats />} />
        <Route path="/FoodDashboard" element={<FoodDashboard />} />
        <Route path="/Ssidebar" element={<Ssidebar />} />
        <Route path="/Footer" element={<Footer />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
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
        <Route
          path="/EmployeeList"
          element={
            <Layout>
              <EmployeeList />
            </Layout>
          }
        />

        {/* <Route path="/EmployeeListFinal" element={<EmployeeListFinal />} /> */}
        <Route
          path="/EmployeeForm"
          element={
            <Layout>
              <EmployeeForm />
            </Layout>
          }
        />
        <Route
          path="/NotificationSetup"
          element={
            <Layout>
              <NotificationSetup />
            </Layout>
          }
        />

        <Route
          path="/WithdrawMethodSetup"
          element={
            <Layout>
              <WithdrawMethodSetup />
            </Layout>
          }
        />
        <Route
          path="/SubscribedOrders"
          element={
            <Layout>
              <SubscribedOrders />
            </Layout>
          }
        />
        <Route
          path="/CustomerReviews"
          element={
            <Layout>
              <CustomerReviews />
            </Layout>
          }
        />
        <Route
          path="/ExpenseReport"
          element={
            <Layout>
              <ExpenseReport />
            </Layout>
          }
        />
        {/* <Route path="/AdForm" element={<AdForm />} /> */}
        {/* <Route path="/NewAdverstisement" element={<NewAdvertisement />} /> */}
        <Route
          path="/NewAdvertisement"
          element={
            <Layout>
              <NewAdvertisement />
            </Layout>
          }
        />
        <Route
          path="/Pending"
          element={
            <Layout>
              <Pending />
            </Layout>
          }
        />
        <Route
          path="/AdsList"
          element={
            <Layout>
              <AdsList />
            </Layout>
          }
        />
        <Route
          path="/RestaurantSetup"
          element={
            <Layout>
              <RestaurantSetup />
            </Layout>
          }
        />
        <Route
          path="/Category"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />
        <Route
          path="/SubCategory"
          element={
            <Layout>
              <SubCategory />
            </Layout>
          }
        />
        <Route
          path="/BusinessPlan"
          element={
            <Layout>
              <BusinessPlan />
            </Layout>
          }
        />

        <Route
          path="/FoodList"
          element={
            <Layout>
              <FoodList />
            </Layout>
          }
        />
        {/* <Route path="/Pending" element={<Pending />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
