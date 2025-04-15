// "use client"

import { useState } from "react";
import "./RoleForm.css";
import { FaFileAlt } from "react-icons/fa";

const RoleForm = ({ onSubmit }) => {
  const [activeTab, setActiveTab] = useState("Default");
  const [roleName, setRoleName] = useState("");
  const [selectedModules, setSelectedModules] = useState([]);

  const modules = [
    "Food",
    "Order",
    "Restaurant setup",
    "Addon",
    "Wallet",
    "Employee",
    "My shop",
    "Chat",
    "Campaign",
    "Reviews",
    "Pos",
    "Coupon",
    "Report",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roleName.trim()) return;

    onSubmit({
      name: roleName,
      modules: selectedModules,
    });

    // Reset form
    setRoleName("");
    setSelectedModules([]);
  };

  const handleReset = () => {
    setRoleName("");
    setSelectedModules([]);
  };

  const handleSelectAll = () => {
    if (selectedModules.length === modules.length) {
      setSelectedModules([]);
    } else {
      setSelectedModules([...modules]);
    }
  };

  const handleModuleChange = (module) => {
    if (selectedModules.includes(module)) {
      setSelectedModules(selectedModules.filter((m) => m !== module));
    } else {
      setSelectedModules([...selectedModules, module]);
    }
  };

  return (
    <div className="role-form-container">
      <div className="form-header">
        <div className="form-title">
          <span className="form-icon">
            <FaFileAlt />
          </span>{" "}
          Role Form
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="language-tabs">
          <button
            type="button"
            className={`tab ${activeTab === "Default" ? "active" : ""}`}
            onClick={() => setActiveTab("Default")}
          >
            Default
          </button>
          <button
            type="button"
            className={`tab ${activeTab === "English" ? "active" : ""}`}
            onClick={() => setActiveTab("English")}
          >
            English(EN)
          </button>
          <button
            type="button"
            className={`tab ${activeTab === "Bengali" ? "active" : ""}`}
            onClick={() => setActiveTab("Bengali")}
          >
            Bengali - বাংলা(BN)
          </button>
          <button
            type="button"
            className={`tab ${activeTab === "Arabic" ? "active" : ""}`}
            onClick={() => setActiveTab("Arabic")}
          >
            Arabic - العربية(AR)
          </button>
          <button
            type="button"
            className={`tab ${activeTab === "Spanish" ? "active" : ""}`}
            onClick={() => setActiveTab("Spanish")}
          >
            Spanish - español(ES)
          </button>
        </div>

        <div className="form-group">
          {/* <label htmlFor="roleName">Role name (default)</label> */}
          <label htmlFor="roleName">
            Role name ({activeTab.toLowerCase()})
          </label>

          <input
            type="text"
            id="roleName"
            placeholder="Role name example"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <div className="permission-header">
            <label htmlFor="modules">Module Permission:</label>
            <div className="select-all-container">
              <input
                type="checkbox"
                id="select-all-checkbox"
                checked={selectedModules.length === modules.length}
                onChange={handleSelectAll}
              />
              <button
                type="button"
                className="select-all"
                onClick={handleSelectAll}
              >
                Select All
              </button>
            </div>
          </div>

          <div className="modules-grid">
            {modules.map((module) => (
              <label key={module} className="module-checkbox" htmlFor={module}>
                <input
                  type="checkbox"
                  id={module}
                  checked={selectedModules.includes(module)}
                  onChange={() => handleModuleChange(module)}
                />
                <span>{module}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoleForm;
