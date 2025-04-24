// "use client"

//this code has confirmation popup modal with image and messages before updating default status just like notofaction setup.

// import { useState } from "react";
// import "./WalletMethod.css";
// import { FaSearch, FaCog, FaTrash } from "react-icons/fa";

// const WithdrawMethodSetup = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [withdrawalMethods, setWithdrawalMethods] = useState([
//     {
//       id: 1,
//       name: "6cash",
//       accountName: "Pichart",
//       accountNumber: "017",
//       isDefault: true,
//     },
//   ]);
//   const [modalState, setModalState] = useState({
//     isOpen: false,
//     messages: [],
//     image: null,
//     onConfirm: null,
//   });

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const showModal = (messages, image, onConfirm) => {
//     setModalState({ isOpen: true, messages, image, onConfirm });
//   };

//   const closeModal = () => {
//     setModalState({
//       isOpen: false,
//       messages: [],
//       image: null,
//       onConfirm: null,
//     });
//   };

//   //   const handleToggleDefault = (id, name, isDefault) => {
//   //     const action = isDefault ? "disable" : "enable";
//   //     const image = isDefault
//   //       ? "https://stackfood-admin.6amtech.com/public/assets/admin/img/modal/mail-warning.png"
//   //       : "https://stackfood-admin.6amtech.com/public/assets/admin/img/modal/mail-success.png";
//   //     const messages = [
//   //       `Want to ${action} the Default Status For ${name}?`,
//   //       `Default Status Will Be ${action}d For ${name}`,
//   //     ];
//   //     showModal(messages, image, () => {
//   //       setWithdrawalMethods(
//   //         withdrawalMethods.map((method) => ({
//   //           ...method,
//   //           isDefault: method.id === id ? !method.isDefault : false,
//   //         }))
//   //       );
//   //     });
//   //   };

//   const handleToggleDefault = (id) => {
//     setWithdrawalMethods(
//       withdrawalMethods.map((method) => ({
//         ...method,
//         isDefault: method.id === id ? !method.isDefault : false,
//       }))
//     );
//   };

//   const handleDeleteMethod = (id) => {
//     setWithdrawalMethods(
//       withdrawalMethods.filter((method) => method.id !== id)
//     );
//   };

//   return (
//     <div className="withdraw-container">
//       <div className="withdraw-header">
//         <div className="withdraw-title">
//           <span className="icon-person">👤</span>
//           <h1>Withdraw Method Setup</h1>
//         </div>
//       </div>

//       <div className="withdraw-content">
//         <div className="withdraw-methods-header">
//           <div className="methods-title">
//             <h2>Withdrawal Methods</h2>
//             <span className="methods-count">{withdrawalMethods.length}</span>
//           </div>

//           <div className="methods-actions">
//             <div className="search-container">
//               <input
//                 type="text"
//                 placeholder="Ex : Search by name"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//               <button className="search-btn">
//                 <FaSearch />
//               </button>
//             </div>

//             <button className="add-method-button">Add New Method</button>
//           </div>
//         </div>

//         <div className="methods-table">
//           {modalState.isOpen && (
//             <div className="modal-overlay">
//               <div className="modal">
//                 <div className="modal-content">
//                   <img
//                     src={modalState.image}
//                     alt="Default Status"
//                     className="modal-image"
//                   />
//                   <p className="modal-message-primary">
//                     {modalState.messages[0]}
//                   </p>
//                   <p className="modal-message-secondary">
//                     {modalState.messages[1]}
//                   </p>
//                 </div>
//                 <div className="modal-actions">
//                   <button
//                     className="modal-button confirm"
//                     onClick={() => {
//                       modalState.onConfirm();
//                       closeModal();
//                     }}
//                   >
//                     OK
//                   </button>
//                   <button className="modal-button cancel" onClick={closeModal}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//           <table>
//             <thead>
//               <tr>
//                 <th>SI</th>
//                 <th>Payment Method Name</th>
//                 <th>Payment Info</th>
//                 <th>Default</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {withdrawalMethods
//                 .filter((method) =>
//                   method.name.toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//                 .map((method) => (
//                   <tr key={method.id}>
//                     <td>{method.id}</td>
//                     <td>{method.name}</td>
//                     <td>
//                       <div className="payment-info">
//                         <p>Account Name: {method.accountName}</p>
//                         <p>Account Number: {method.accountNumber}</p>
//                       </div>
//                     </td>
//                     <td>
//                       <label className="toggle-switch">
//                         <input
//                           type="checkbox"
//                           checked={method.isDefault}
//                           onChange={() =>
//                             handleToggleDefault(
//                               method.id,
//                               method.name,
//                               method.isDefault
//                             )
//                           }
//                         />
//                         <span className="toggle-slider"></span>
//                       </label>
//                     </td>
//                     <td>
//                       <button
//                         className="delete-button"
//                         onClick={() => handleDeleteMethod(method.id)}
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawMethodSetup;

// "use client"

import { useState } from "react";
import "./WalletMethod.css";
import { FaSearch, FaTrash } from "react-icons/fa";

const WithdrawMethodSetup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [withdrawalMethods, setWithdrawalMethods] = useState([
    {
      id: 1,
      name: "6cash",
      accountName: "Pichart",
      accountNumber: "017",
      isDefault: true,
    },
    {
      id: 2,
      name: "Bank Transfer",
      accountName: "Sanam Thapa",
      accountNumber: "123456789",
      isDefault: false,
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleDefault = (id) => {
    setWithdrawalMethods(
      withdrawalMethods.map((method) =>
        method.id === id ? { ...method, isDefault: !method.isDefault } : method
      )
    );
  };

  const handleDeleteMethod = (id) => {
    setWithdrawalMethods(
      withdrawalMethods.filter((method) => method.id !== id)
    );
  };

  return (
    <div className="withdraw-container">
      <div className="withdraw-header">
        <div className="withdraw-title">
          <span className="icon-person">
            <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/image_90.png"></img>
          </span>
          <h1>Withdraw Method Setup</h1>
        </div>
      </div>
      <div className="withdraw-box">
        <div className="withdraw-content">
          <div className="withdraw-methods-header">
            <div className="methods-title">
              <h2>Withdrawal Methods</h2>
              <span className="methods-count">{withdrawalMethods.length}</span>
            </div>

            <div className="methods-actions">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Ex : Search by name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="search-btn">
                  <FaSearch />
                </button>
              </div>

              <button className="add-method-button">Add New Method</button>
            </div>
          </div>

          <div className="methods-table">
            <table>
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Payment Method Name</th>
                  <th>Payment Info</th>
                  <th>Default</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {withdrawalMethods
                  .filter((method) =>
                    method.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((method) => (
                    <tr key={method.id}>
                      <td>{method.id}</td>
                      <td>{method.name}</td>
                      <td>
                        <div className="payment-info">
                          <p>Account Name: {method.accountName}</p>
                          <p>Account Number: {method.accountNumber}</p>
                        </div>
                      </td>
                      <td>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={method.isDefault}
                            onChange={() => handleToggleDefault(method.id)}
                          />
                          <span className="toggle-slider"></span>
                        </label>
                      </td>
                      <td>
                        <button
                          className="delete-button"
                          onClick={() => handleDeleteMethod(method.id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMethodSetup;
