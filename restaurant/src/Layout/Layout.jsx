import Navbar from "../components/Navbar";
// import Ssidebar from "../components/Ssidebar";
import Sidebar from "../components/Sidebar";
import './Layout.css';


function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-section">
        <Sidebar />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;


