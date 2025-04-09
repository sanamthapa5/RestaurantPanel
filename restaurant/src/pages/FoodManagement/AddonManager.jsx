
// import { useState } from "react";
// import "./AddonManager.css";
// import { PencilIcon, TrashIcon } from "./icons";

// const AddonManager = () => {
//   const [activeTab, setActiveTab] = useState("Default")
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     stockType: "Unlimited Stock",
//   })
//   const [searchQuery, setSearchQuery] = useState("")
//   const [addons, setAddons] = useState([
//     { id: 1, name: "Cheese", price: 15.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 2, name: "Cake", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 3, name: "Extra Chicken", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 4, name: "Extra Meat", price: 14.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 5, name: "Extra Spice", price: 9.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 6, name: "Pepsi", price: 18.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 7, name: "Sauce", price: 11.0, stockType: "Unlimited", stock: "Unlimited" },
//   ])

//   const tabs = [
//     { id: "Default", label: "Default" },
//     { id: "English", label: "English(EN)" },
//     { id: "Bengali", label: "Bengali - বাংলা(BN)" },
//     { id: "Arabic", label: "Arabic - العربية(AR)" },
//     { id: "Spanish", label: "Spanish - español(ES)" },
//   ]

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const newAddon = {
//       id: addons.length + 1,
//       name: formData.name,
//       price: Number.parseFloat(formData.price),
//       stockType: "Unlimited",
//       stock: "Unlimited",
//     }
//     setAddons([...addons, newAddon])
//     resetForm()
//   }

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       price: "",
//       stockType: "Unlimited Stock",
//     })
//   }

//   const handleEdit = (id) => {
//     const addonToEdit = addons.find((addon) => addon.id === id)
//     setFormData({
//       name: addonToEdit.name,
//       price: addonToEdit.price.toString(),
//       stockType: "Unlimited Stock",
//     })
//     // Remove the addon from the list (it will be re-added on submit)
//     setAddons(addons.filter((addon) => addon.id !== id))
//   }

//   const handleDelete = (id) => {
//     setAddons(addons.filter((addon) => addon.id !== id))
//   }

//   return (
//     <div className="addon-manager">
//       <div className="header1">
//         <h2>
//           <span className="icon">⊕</span> Add New Addon
//         </h2>
//       </div> 

//       <div className="tabs">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tab ${activeTab === tab.id ? "active" : ""}`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Ex : Water"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Price</label>
//             <input
//               type="text"
//               name="price"
//               placeholder="Ex : 100.00"
//               value={formData.price}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Stock Type</label>
//             <div className="select-wrapper">
//               <select name="stockType" value={formData.stockType} onChange={handleInputChange}>
//                 <option value="Unlimited Stock">Unlimited Stock</option>
//                 <option value="Limited Stock">Limited Stock</option>
//               </select>
//             </div>
//           </div>
//         </div>
 
//         <div className="form-actions">
//           <button type="button" className="reset-btn" onClick={resetForm}>
//             Reset
//           </button>
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </div> 
//       </form>

//       <div className="addon-list">
//         <div className="list-header">
//           <h3>Addon List</h3>
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Ex : Search by Addon Name or Rest"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="search-btn">🔍</button>
//           </div>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>SI</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Stock Type</th>
//                 <th>Stock</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {addons.map((addon) => (
//                 <tr key={addon.id}>
//                   <td>{addon.id}</td>
//                   <td>{addon.name}</td>
//                   <td>$ {addon.price.toFixed(2)}</td>
//                   <td>{addon.stockType}</td>
//                   <td>{addon.stock}</td>
//                   <td className="action-buttons">
//                     <button className="edit-btn" onClick={() => handleEdit(addon.id)}>
//                       <PencilIcon />
//                     </button>
//                     <button className="delete-btn" onClick={() => handleDelete(addon.id)}>
//                       <TrashIcon />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddonManager;







// import { useState } from "react";
// import "./AddonManager.css";
// import { PencilIcon, TrashIcon } from "./icons";

// const AddonManager = () => {
//   const [activeTab, setActiveTab] = useState("Default");
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     stockType: "Unlimited Stock",
//   });
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [addons, setAddons] = useState([
//     { id: 1, name: "Cheese", price: 15.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 2, name: "Cake", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 3, name: "Extra Chicken", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 4, name: "Extra Meat", price: 14.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 5, name: "Extra Spice", price: 9.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 6, name: "Pepsi", price: 18.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 7, name: "Sauce", price: 11.0, stockType: "Unlimited", stock: "Unlimited" },
//   ]);

//   const tabs = [
//     { id: "Default", label: "Default" },
//     { id: "English", label: "English(EN)" },
//     { id: "Bengali", label: "Bengali - বাংলা(BN)" },
//     { id: "Arabic", label: "Arabic - العربية(AR)" },
//     { id: "Spanish", label: "Spanish - español(ES)" },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newAddon = {
//       id: addons.length + 1,
//       name: formData.name,
//       price: Number.parseFloat(formData.price),
//       stockType: "Unlimited",
//       stock: "Unlimited",
//     };
//     setAddons([...addons, newAddon]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       price: "",
//       stockType: "Unlimited Stock",
//     });
//   };

//   const handleEdit = (id) => {
//     const addonToEdit = addons.find((addon) => addon.id === id);
//     setFormData({
//       name: addonToEdit.name,
//       price: addonToEdit.price.toString(),
//       stockType: "Unlimited Stock",
//     });
//     setAddons(addons.filter((addon) => addon.id !== id));
//   };

//   const handleDelete = (id) => {
//     setAddons(addons.filter((addon) => addon.id !== id));
//   };

//   const getSortedAddons = () => {
//     let sortableAddons = [...addons];

//     if (sortConfig.key) {
//       sortableAddons.sort((a, b) => {
//         const valA = a[sortConfig.key];
//         const valB = b[sortConfig.key];

//         if (typeof valA === "string") {
//           return sortConfig.direction === "asc"
//             ? valA.localeCompare(valB)
//             : valB.localeCompare(valA);
//         } else {
//           return sortConfig.direction === "asc" ? valA - valB : valB - valA;
//         }
//       });
//     }

//     return sortableAddons.filter((addon) =>
//       addon.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const renderSortIcon = (key) => {
//     if (sortConfig.key !== key) return "▲▼";
//     return sortConfig.direction === "asc" ? "▲" : "▼";
//   };

//   return (
//     <div className="addon-manager">
//       <div className="header1">
//         <h2>
//           <span className="icon">⊕</span> Add New Addon
//         </h2>
//       </div>

//       <div className="tabs">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tab ${activeTab === tab.id ? "active" : ""}`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Ex : Water"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Price</label>
//             <input
//               type="text"
//               name="price"
//               placeholder="Ex : 100.00"
//               value={formData.price}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Stock Type</label>
//             <div className="select-wrapper">
//               <select name="stockType" value={formData.stockType} onChange={handleInputChange}>
//                 <option value="Unlimited Stock">Unlimited Stock</option>
//                 <option value="Limited Stock">Limited Stock</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="form-actions">
//           <button type="button" className="reset-btn" onClick={resetForm}>
//             Reset
//           </button>
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </div>
//       </form>

//       <div className="addon-list">
//         <div className="list-header">
//           <h3>Addon List</h3>
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Ex : Search by Addon Name or Rest"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="search-btn">🔍</button>
//           </div>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th onClick={() => handleSort("id")}>SI {renderSortIcon("id")}</th>
//                 <th onClick={() => handleSort("name")}>Name {renderSortIcon("name")}</th>
//                 <th onClick={() => handleSort("price")}>Price {renderSortIcon("price")}</th>
//                 <th onClick={() => handleSort("stockType")}>Stock Type {renderSortIcon("stockType")}</th>
//                 <th onClick={() => handleSort("stock")}>Stock {renderSortIcon("stock")}</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {getSortedAddons().map((addon) => (
//                 <tr key={addon.id}>
//                   <td>{addon.id}</td>
//                   <td>{addon.name}</td>
//                   <td>$ {addon.price.toFixed(2)}</td>
//                   <td>{addon.stockType}</td>
//                   <td>{addon.stock}</td>
//                   <td className="action-buttons">
//                     <button className="edit-btn" onClick={() => handleEdit(addon.id)}>
//                       <PencilIcon />
//                     </button>
//                     <button className="delete-btn" onClick={() => handleDelete(addon.id)}>
//                       <TrashIcon />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddonManager;


// import { useState } from "react";
// import "./AddonManager.css";
// import { PencilIcon, TrashIcon } from "./icons";

// const AddonManager = () => {
//   const [activeTab, setActiveTab] = useState("Default");
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     stockType: "Unlimited Stock",
//   });
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addons, setAddons] = useState([
//     { id: 1, name: "Cheese", price: 15.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 2, name: "Cake", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 3, name: "Extra Chicken", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 4, name: "Extra Meat", price: 14.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 5, name: "Extra Spice", price: 9.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 6, name: "Pepsi", price: 18.0, stockType: "Unlimited", stock: "Unlimited" },
//     { id: 7, name: "Sauce", price: 11.0, stockType: "Unlimited", stock: "Unlimited" },
//   ]);

//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   const tabs = [
//     { id: "Default", label: "Default" },
//     { id: "English", label: "English(EN)" },
//     { id: "Bengali", label: "Bengali - বাংলা(BN)" },
//     { id: "Arabic", label: "Arabic - العربية(AR)" },
//     { id: "Spanish", label: "Spanish - español(ES)" },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newAddon = {
//       id: addons.length + 1,
//       name: formData.name,
//       price: Number.parseFloat(formData.price),
//       stockType: "Unlimited",
//       stock: "Unlimited",
//     };
//     setAddons([...addons, newAddon]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       price: "",
//       stockType: "Unlimited Stock",
//     });
//   };

//   const handleEdit = (id) => {
//     const addonToEdit = addons.find((addon) => addon.id === id);
//     setFormData({
//       name: addonToEdit.name,
//       price: addonToEdit.price.toString(),
//       stockType: "Unlimited Stock",
//     });
//     setAddons(addons.filter((addon) => addon.id !== id));
//   };

//   const handleDelete = (id) => {
//     setAddons(addons.filter((addon) => addon.id !== id));
//   };

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });

//     const sorted = [...addons].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     setAddons(sorted);
//   };

//   return (
//     <div className="addon-manager">
//       <div className="header1">
//         <h2>
//           <span className="icon">⊕</span> Add New Addon
//         </h2>
//       </div>

//       <div className="tabs">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tab ${activeTab === tab.id ? "active" : ""}`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Ex : Water"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Price</label>
//             <input
//               type="text"
//               name="price"
//               placeholder="Ex : 100.00"
//               value={formData.price}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Stock Type</label>
//             <div className="select-wrapper">
//               <select name="stockType" value={formData.stockType} onChange={handleInputChange}>
//                 <option value="Unlimited Stock">Unlimited Stock</option>
//                 <option value="Limited Stock">Limited Stock</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="form-actions">
//           <button type="button" className="reset-btn" onClick={resetForm}>
//             Reset
//           </button>
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </div>
//       </form>

//       <div className="addon-list">
//         <div className="list-header">
//           <h3>Addon List</h3>
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Ex : Search by Addon Name or Rest"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="search-btn">🔍</button>
//           </div>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th onClick={() => handleSort("id")}>
//                   SI <span className={`sort-icons ${sortConfig.key === "id" ? "active" : ""}`}>▼▲</span>
//                 </th>
//                 <th onClick={() => handleSort("name")}>
//                   Name <span className={`sort-icons ${sortConfig.key === "name" ? "active" : ""}`}>▼▲</span>
//                 </th>
//                 <th onClick={() => handleSort("price")}>
//                   Price <span className={`sort-icons ${sortConfig.key === "price" ? "active" : ""}`}>▼▲</span>
//                 </th>
//                 <th onClick={() => handleSort("stockType")}>
//                   Stock Type <span className={`sort-icons ${sortConfig.key === "stockType" ? "active" : ""}`}>▼▲</span>
//                 </th>
//                 <th onClick={() => handleSort("stock")}>
//                   Stock <span className={`sort-icons ${sortConfig.key === "stock" ? "active" : ""}`}>▼▲</span>
//                 </th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {addons.map((addon) => (
//                 <tr key={addon.id}>
//                   <td>{addon.id}</td>
//                   <td>{addon.name}</td>
//                   <td>$ {addon.price.toFixed(2)}</td>
//                   <td>{addon.stockType}</td>
//                   <td>{addon.stock}</td>
//                   <td className="action-buttons">
//                     <button className="edit-btn" onClick={() => handleEdit(addon.id)}>
//                       <PencilIcon />
//                     </button>
//                     <button className="delete-btn" onClick={() => handleDelete(addon.id)}>
//                       <TrashIcon />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddonManager;


import { useState } from "react";
import "./AddonManager.css";
import { PencilIcon, TrashIcon } from "./icons";

const AddonManager = () => {
  const [activeTab, setActiveTab] = useState("Default");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stockType: "Unlimited Stock",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [addons, setAddons] = useState([
    { id: 1, name: "Cheese", price: 15.0, stockType: "Unlimited", stock: "Unlimited" },
    { id: 2, name: "Cake", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
    { id: 3, name: "Extra Chicken", price: 12.0, stockType: "Unlimited", stock: "Unlimited" },
    { id: 4, name: "Extra Meat", price: 14.0, stockType: "Unlimited", stock: "Unlimited" },
    { id: 5, name: "Extra Spice", price: 9.0, stockType: "Unlimited", stock: "Unlimited" },
    { id: 6, name: "Pepsi", price: 18.0, stockType: "Unlimited", stock: "Unlimited" },
    { id: 7, name: "Sauce", price: 11.0, stockType: "Unlimited", stock: "Unlimited" },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const tabs = [
    { id: "Default", label: "Default" },
    { id: "English", label: "English(EN)" },
    { id: "Bengali", label: "Bengali - বাংলা(BN)" },
    { id: "Arabic", label: "Arabic - العربية(AR)" },
    { id: "Spanish", label: "Spanish - español(ES)" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddon = {
      id: addons.length + 1,
      name: formData.name,
      price: Number.parseFloat(formData.price),
      stockType: "Unlimited",
      stock: "Unlimited",
    };
    setAddons([...addons, newAddon]);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      stockType: "Unlimited Stock",
    });
  };

  const handleEdit = (id) => {
    const addonToEdit = addons.find((addon) => addon.id === id);
    setFormData({
      name: addonToEdit.name,
      price: addonToEdit.price.toString(),
      stockType: "Unlimited Stock",
    });
    setAddons(addons.filter((addon) => addon.id !== id));
  };

  const handleDelete = (id) => {
    setAddons(addons.filter((addon) => addon.id !== id));
  };

  const handleSort = (key, direction) => {
    setSortConfig({ key, direction });

    const sorted = [...addons].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setAddons(sorted);
  };

  return (
    <div className="addon-manager">
      <div className="header1">
        <h2>
          <span className="icon">⊕</span> Add New Addon
        </h2>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Ex : Water"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder="Ex : 100.00"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Stock Type</label>
            <div className="select-wrapper">
              <select name="stockType" value={formData.stockType} onChange={handleInputChange}>
                <option value="Unlimited Stock">Unlimited Stock</option>
                <option value="Limited Stock">Limited Stock</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="reset-btn" onClick={resetForm}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>

      <div className="addon-list">
        <div className="list-header">
          <h3>Addon List</h3>
          <div className="search-box">
            <input
              type="text"
              placeholder="Ex : Search by Addon Name or Rest"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  SI
                  <span className="sort-icons">
                    <span
                      className={`arrow ${sortConfig.key === "id" && sortConfig.direction === "asc" ? "active" : ""}`}
                      onClick={() => handleSort("id", sortConfig.direction === "asc" ? "desc" : "asc")}
                    >
                      ▼
                    </span>
                    <span
                      className={`arrow ${sortConfig.key === "id" && sortConfig.direction === "desc" ? "active" : ""}`}
                      onClick={() => handleSort("id", sortConfig.direction === "desc" ? "asc" : "desc")}
                    >
                      ▲
                    </span>
                  </span>
                </th>
                <th>
                  Name
                  <span className="sort-icons">
                    <span
                      className={`arrow ${sortConfig.key === "name" && sortConfig.direction === "asc" ? "active" : ""}`}
                      onClick={() => handleSort("name", sortConfig.direction === "asc" ? "desc" : "asc")}
                    >
                      ▼
                    </span>
                    <span
                      className={`arrow ${sortConfig.key === "name" && sortConfig.direction === "desc" ? "active" : ""}`}
                      onClick={() => handleSort("name", sortConfig.direction === "desc" ? "asc" : "desc")}
                    >
                      ▲
                    </span>
                  </span>
                </th>
                <th>
                  Price
                  <span className="sort-icons">
                    <span
                      className={`arrow ${sortConfig.key === "price" && sortConfig.direction === "asc" ? "active" : ""}`}
                      onClick={() => handleSort("price", sortConfig.direction === "asc" ? "desc" : "asc")}
                    >
                      ▼
                    </span>
                    <span
                      className={`arrow ${sortConfig.key === "price" && sortConfig.direction === "desc" ? "active" : ""}`}
                      onClick={() => handleSort("price", sortConfig.direction === "desc" ? "asc" : "desc")}
                    >
                      ▲
                    </span>
                  </span>
                </th>
                <th>
                  Stock Type
                  <span className="sort-icons">
                    <span
                      className={`arrow ${sortConfig.key === "stockType" && sortConfig.direction === "asc" ? "active" : ""}`}
                      onClick={() => handleSort("stockType", sortConfig.direction === "asc" ? "desc" : "asc")}
                    >
                      ▼
                    </span>
                    <span
                      className={`arrow ${sortConfig.key === "stockType" && sortConfig.direction === "desc" ? "active" : ""}`}
                      onClick={() => handleSort("stockType", sortConfig.direction === "desc" ? "asc" : "desc")}
                    >
                      ▲
                    </span>
                  </span>
                </th>
                <th>
                  Stock
                  <span className="sort-icons">
                    <span
                      className={`arrow ${sortConfig.key === "stock" && sortConfig.direction === "asc" ? "active" : ""}`}
                      onClick={() => handleSort("stock", sortConfig.direction === "asc" ? "desc" : "asc")}
                    >
                      ▼
                    </span>
                    <span
                      className={`arrow ${sortConfig.key === "stock" && sortConfig.direction === "desc" ? "active" : ""}`}
                      onClick={() => handleSort("stock", sortConfig.direction === "desc" ? "asc" : "desc")}
                    >
                      ▲
                    </span>
                  </span>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {addons.map((addon) => (
                <tr key={addon.id}>
                  <td>{addon.id}</td>
                  <td>{addon.name}</td>
                  <td>$ {addon.price.toFixed(2)}</td>
                  <td>{addon.stockType}</td>
                  <td>{addon.stock}</td>
                  <td className="action-buttons">
                    <button className="edit-btn" onClick={() => handleEdit(addon.id)}>
                      <PencilIcon />
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(addon.id)}>
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddonManager;
