// "use client"

import { useState } from "react";
import "./RolesTable.css";

const RolesTable = ({ roles, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedRoles = [...roles].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    // Handle arrays (like modules)
    if (Array.isArray(valueA) && Array.isArray(valueB)) {
      const strA = valueA.join(", ");
      const strB = valueB.join(", ");
      return sortConfig.direction === "asc"
        ? strA.localeCompare(strB)
        : strB.localeCompare(strA);
    }

    // Handle strings (name, createdAt)
    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortConfig.direction === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    // Handle numbers (like id)
    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
    }

    return 0;
  });

  const filteredRoles = sortedRoles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getArrow = (key) => {
    const isActive = sortConfig.key === key;
    return (
      <span className="sort-arrow">
        <span
          className={
            isActive && sortConfig.direction === "asc"
              ? "arrow active"
              : "arrow"
          }
        >
          ▲
        </span>
        <span
          className={
            isActive && sortConfig.direction === "desc"
              ? "arrow active"
              : "arrow"
          }
        >
          ▼
        </span>
      </span>
    );
  };

  return (
    <div className="roles-table-container">
      <div className="table-header">
        <h2>
          Roles Table <span className="role-count">{roles.length}</span>
        </h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Ex : Search by Role Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">
            <span>🔍</span>
          </button>
        </div>
      </div>

      <table className="roles-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>SI {getArrow("id")}</th>
            <th onClick={() => handleSort("name")}>
              Role Name {getArrow("name")}
            </th>
            <th onClick={() => handleSort("modules")}>
              Modules {getArrow("modules")}
            </th>
            <th onClick={() => handleSort("createdAt")}>
              Created At {getArrow("createdAt")}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>
                <td>{role.modules.join(", ")}</td>
                <td>{role.createdAt}</td>
                <td className="action-buttons">
                  <button className="edit-btn">✏️</button>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(role.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No roles found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RolesTable;
