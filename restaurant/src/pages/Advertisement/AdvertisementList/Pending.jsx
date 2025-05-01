import { useState } from "react";
import { Search, MoreVertical, Plus } from "lucide-react";
import "./Pending.css";

const Pending = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      adsId: "1000005",
      adsType: "Video promotion",
      adsTitle: "Savor the Season: Food Festival",
      duration: "03 Jul 2024 - 13 Jul 2024",
      status: "Expired",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="Pending-ads-list-container">
      <header className="Pending-header">
        <h1 className="Pending-title">
          <img
            src="https://stackfood-admin.6amtech.com/public/assets/admin/img/advertisement.png"
            className="Pending-emoji"
          />{" "}
          Ads List
          <span className="Pending-badge">{ads.length}</span>{" "}
        </h1>
        <button className="Pending-new-ad-button">
          <Plus size={20} />
          <span>New Advertisement</span>
        </button>
      </header>

      <div className="Pending-search-container">
        <div className="Pending-search-input-container">
          <input
            type="text"
            placeholder="Search by ads ID or restaurant"
            value={searchQuery}
            onChange={handleSearch}
            className="Pending-search-input"
          />
          <button className="Pending-search-button">
            <Search size={20} />
          </button>
        </div>
      </div>
      {/*   <div className="search-container">
            <input
              type="text"
              placeholder="Ex : Search by food name or phone"
              required
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="ReviewSearch-button">
              <Search size={20} />
            </button>
          </div>  */}

      <div className="Pending-table-container">
        <table className="Pending-ads-table">
          <thead>
            <tr>
              <th>SI</th>
              <th>Ads ID</th>
              <th>Ads Type</th>
              <th>Ads Title</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad) => (
              <tr key={ad.id}>
                <td>{ad.id}</td>
                <td>{ad.adsId}</td>
                <td>{ad.adsType}</td>
                <td>{ad.adsTitle}</td>
                <td>{ad.duration}</td>
                <td>
                  <span
                    className={`Pending-status-badge ${ad.status.toLowerCase()}`}
                  >
                    {ad.status}
                  </span>
                </td>
                <td>
                  <button className="Pending-action-button">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pending;
