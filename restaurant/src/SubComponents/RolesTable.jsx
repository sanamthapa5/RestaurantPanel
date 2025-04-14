// "use client"

import { useState } from "react";
import "./RolesTable.css";

const RolesTable = ({ roles, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(searchTerm.toLowerCase()))

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
            <th>SI</th>
            <th>Role Name</th>
            <th>Modules</th>
            <th>Created At</th>
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
                  <button className="delete-btn" onClick={() => onDelete(role.id)}>
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
