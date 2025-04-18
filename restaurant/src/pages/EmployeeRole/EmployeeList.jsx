// // "use client"

// import { useState } from "react";
// import "./EmployeeList.css";

// function EmployeeList({ employees, onAddNew }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredEmployees = employees.filter(
//     (emp) =>
//       emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       emp.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="employee-list-card">
//       <div className="card-header">
//         <h2 className="card-title">
//           <span className="icon-container">
//             <i className="icon-user"></i>
//           </span>
//           Employee List
//           <span className="employee-count">{employees.length}</span>
//         </h2>
//         <button className="add-button" onClick={onAddNew}>
//           <i className="icon-plus"></i>
//           Add New Employee
//         </button>
//       </div>
//       <div className="card-content">
//         <div className="list-actions">
//           <div className="search-container">
//             <i className="icon-search"></i>
//             <input
//               type="text"
//               placeholder="Ex : Search by Employee Name"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button className="export-button">
//             <i className="icon-download"></i>
//             Export
//             <span className="dropdown-arrow">▼</span>
//           </button>
//         </div>

//         <div className="table-container">
//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>SI</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Role</th>
//                 <th className="action-column">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEmployees.length > 0 ? (
//                 filteredEmployees.map((employee, index) => (
//                   <tr key={employee.id}>
//                     <td>{index + 1}</td>
//                     <td className="name-cell">
//                       {employee.image ? (
//                         <img
//                           src={employee.image || "/placeholder.svg"}
//                           alt={`${employee.firstName} ${employee.lastName}`}
//                           className="employee-avatar"
//                         />
//                       ) : (
//                         <div className="avatar-placeholder">
//                           <i className="icon-user-small"></i>
//                         </div>
//                       )}
//                       <span>
//                         {employee.firstName} {employee.lastName}
//                       </span>
//                     </td>
//                     <td>{employee.email}</td>
//                     <td>+1 {employee.phone}</td>
//                     <td className="capitalize">{employee.role}</td>
//                     <td className="action-column">
//                       <button className="action-button">⋯</button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr className="empty-row">
//                   <td colSpan={6}>
//                     <div className="empty-state">
//                       <div className="empty-icon">
//                         <i className="icon-warning"></i>
//                       </div>
//                       <p className="empty-text">No Data Found</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeList;

// "use client"

import { useState } from "react";
import "./EmployeeList.css";

function EmployeeList({ employees = [], onAddNew }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list-card">
      <div className="card-header">
        <h2 className="card-title">
          <span className="icon-container">
            <i className="icon-user"></i>
          </span>
          Employee List
          <span className="employee-count">{employees.length}</span>
        </h2>
        <button className="add-button" onClick={onAddNew}>
          <i className="icon-plus"></i>
          Add New Employee
        </button>
      </div>
      <div className="card-content">
        <div className="list-actions">
          <div className="search-container">
            <i className="icon-search"></i>
            <input
              type="text"
              placeholder="Ex : Search by Employee Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="export-button">
            <i className="icon-download"></i>
            Export
            <span className="dropdown-arrow">▼</span>
          </button>
        </div>

        <div className="table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>SI</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th className="action-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee, index) => (
                  <tr key={employee.id}>
                    <td>{index + 1}</td>
                    <td className="name-cell">
                      {employee.image ? (
                        <img
                          src={employee.image}
                          alt={`${employee.firstName} ${employee.lastName}`}
                          className="employee-avatar"
                        />
                      ) : (
                        <div className="avatar-placeholder">
                          <i className="icon-user-small"></i>
                        </div>
                      )}
                      <span>
                        {employee.firstName} {employee.lastName}
                      </span>
                    </td>
                    <td>{employee.email}</td>
                    <td>+1 {employee.phone}</td>
                    <td className="capitalize">{employee.role}</td>
                    <td className="action-column">
                      <button className="action-button">⋯</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="empty-row">
                  <td colSpan={6}>
                    <div className="empty-state">
                      <div className="empty-icon">
                        <i className="icon-warning"></i>
                      </div>
                      <p className="empty-text">No Data Found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
