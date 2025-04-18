// "use client"

import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import "./EmployeeListFinal.css";

function EmployeeListFinal() {
  const [view, setView] = useState("list"); // 'list' or 'form'
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now().toString() }]);
    setView("list");
  };

  return (
    <div className="app-container">
      {view === "list" ? (
        <EmployeeList employees={employees} onAddNew={() => setView("form")} />
      ) : (
        <EmployeeForm onSubmit={addEmployee} onCancel={() => setView("list")} />
      )}
    </div>
  );
}

export default EmployeeListFinal;
