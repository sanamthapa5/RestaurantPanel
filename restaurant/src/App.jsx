// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Home from "./components/Home"; // Import Home component
// import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import Card from "./Card";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//   <Route path="/" element={<Login />} />
//   <Route path="/home" element={<Home />} />
//   <Route path="/header" element={<Header />} />
//   <Route path="/dashboard" element={<Dashboard />} />
//   <Route path="/card" element={<Card />} />
// </Routes>

//     </Router>



//     // <div>
//     //   <Header />  {/* This will display the new Header */}
//     //   <h1>Testing the New Header</h1>
//     // </div>
//   );
// };



// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Home from "./components/Home"; // Import Home component
// import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import CustomNavbar from './components/DrisyaNavbar';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/header" element={<Header />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/DrisyaNavbar" element={<NavBar />} />
//       </Routes>
//     </Router>
//   );
// };

//export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home"; // Import Home component
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CustomNavbar from './components/Navbar'; // Import CustomNavbar
import Sidebar from "./components/Sidebar";
import YearlyStats from "./components/YearlyStats";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Fix the route to use CustomNavbar */}
        <Route path="/Navbar" element={<CustomNavbar />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/YearlyStats" element={<YearlyStats />} />
      </Routes>
    </Router>
  );
};

export default App;

