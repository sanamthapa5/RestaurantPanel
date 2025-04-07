import { useState } from "react";
import { Search, AlertTriangle } from "lucide-react";
import "./FoodCampaign.css";

export default function CampaignDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    
  };

  const columns = [
    { label: "SI", key: "si" },
    { label: "Title", key: "title" },
    { label: "Image", key: "image" },
    { label: "Date Duration", key: "date" },
    { label: "Time Duration", key: "time" },
    { label: "Status", key: "status" },
    { label: "Action", key: "action" },
  ];

  return (
    <div className="dashboard-container">
      <div className="header1">
        <div className="campaign-title">
          <h2>Campaign</h2>
          <span className="count">0</span>
        </div>

        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Ex : Search by Title name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="campaign-table">
        <thead>
  <tr>
    {columns.map((column) => (
      <th key={column.key} onClick={() => handleSort(column.key)}>
        {column.label}
        <span className="sort-icons">
          <span
            className={`sort-arrow ${
              sortConfig.key === column.key && sortConfig.direction === "asc"
                ? "active"
                : ""
            }`}
          >
            ▲
          </span>
          <span
            className={`sort-arrow ${
              sortConfig.key === column.key && sortConfig.direction === "desc"
                ? "active"
                : ""
            }`}
          >
            ▼
          </span>
        </span>
      </th>
    ))}
  </tr>
</thead>

          <tbody>
            {/* Empty state */}
            <tr className="empty-state-row">
              <td colSpan={7}>
                <div className="empty-state">
                  <div className="folder-icon">
                    <div className="folder-top"></div>
                    <div className="folder-body">
                      <AlertTriangle className="alert-icon" size={24} />
                    </div>
                  </div>
                  <p className="empty-text">No Data Found</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
