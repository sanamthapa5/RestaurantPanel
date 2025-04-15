// "use client"

import { useState } from "react";
import RoleForm from "../../SubComponents/RoleForm";
import RolesTable from "../../SubComponents/RolesTable";
import { FaUsers } from "react-icons/fa";
import "./EmployeeRole.css";

function EmployeeRole() {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Manager",
      modules: [
        "Food",
        "Order",
        "Restaurant Setup",
        "Addon",
        "Wallet",
        "Bank Info",
        "Employee",
        "My Shop",
        "Custom Role",
        "Campaign",
        "Reviews",
        "Pos",
      ],
      createdAt: "20 Jan 2022",
    },
  ]);

  const handleAddRole = (newRole) => {
    setRoles([
      ...roles,
      {
        id: roles.length + 1,
        ...newRole,
        createdAt: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      },
    ]);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          <span className="icon">
            <FaUsers />
          </span>{" "}
          Employee Role
        </h1>
      </header>
      <main>
        <RoleForm onSubmit={handleAddRole} />
        <RolesTable roles={roles} onDelete={handleDeleteRole} />
      </main>
    </div>
  );
}

export default EmployeeRole;
