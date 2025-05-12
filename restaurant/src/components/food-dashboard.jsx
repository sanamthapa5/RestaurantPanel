// import { BarChart3, Award, Settings } from "lucide-react";
// import "./food-dashboard.css";

// const FoodDashboard = () => {
//   // Data for top selling foods
//   const topSellingFoods = [
//     {
//       id: 1,
//       name: "Medu Vada",
//       sold: 9,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
//     },
//     {
//       id: 2,
//       name: "Meat Pizza",
//       sold: 5,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
//     },
//     {
//       id: 3,
//       name: "grilled lemon herb Mediterranean chicken salad",
//       sold: 2,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
//     },
//     {
//       id: 4,
//       name: "Cheese Pizza",
//       sold: 1,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
//     },
//     {
//       id: 5,
//       name: "Steak Kebabs",
//       sold: 0,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e44ea58c5.png",
//     },
//     {
//       id: 6,
//       name: "FRIED RICE",
//       sold: 0,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e4dcd5194.png",
//     },
//   ];

//   // Data for top rated foods
//   const topRatedFoods = [
//     {
//       id: 1,
//       name: "Meat Pizza",
//       rating: 4.5,
//       reviews: 3,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
//     },
//     {
//       id: 2,
//       name: "Steak Kebabs",
//       rating: 0,
//       reviews: 0,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e44ea58c5.png",
//     },
//     {
//       id: 3,
//       name: "FRIED RICE",
//       rating: 0,
//       reviews: 0,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e4dcd5194.png",
//     },
//     {
//       id: 4,
//       name: "Thai Fried Rice",
//       rating: 0,
//       reviews: 0,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e5955e1d1.png",
//     },
//     {
//       id: 5,
//       name: "Cheese Pizza",
//       rating: 0,
//       reviews: 0,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
//     },
//     {
//       id: 6,
//       name: "grilled lemon herb Mediterranean chicken salad",
//       rating: 0,
//       reviews: 0,
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
//     },
//   ];

//   return (
//     <div className="food-dashboard">
//       <div className="dashboard-container">
//         {/* Top Selling Foods Section */}
//         <div className="dashboard-section">
//           <div className="section-header">
//             <div className="section-title">
//               <img
//                 src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/top-selling.png"
//                 className="section-icon selling-icon"
//               />
//               <h2>Top Selling Foods</h2>
//             </div>
//           </div>

//           <div className="food-grid">
//             {topSellingFoods.map((food) => (
//               <div key={food.id} className="food-card">
//                 <div className="food-image-container">
//                   <img
//                     src={food.image || "/placeholder.svg"}
//                     alt={food.name}
//                     className="food-image"
//                   />
//                   <div className="sold-badge">Sold : {food.sold}</div>
//                 </div>
//                 <div className="food-name">{food.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Top Rated Foods Section */}
//         <div className="dashboard-section">
//           <div className="section-header">
//             <div className="section-title">
//               <img
//                 src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/most-rated.png"
//                 className="section-icon rated-icon"
//               />
//               <h2>Top Rated Foods</h2>
//             </div>
//           </div>

//           <div className="rated-food-grid">
//             {topRatedFoods.map((food) => (
//               <div key={food.id} className="rated-food-card">
//                 <div className="rated-food-content">
//                   <div className="rated-food-image-container">
//                     <img
//                       src={food.image || "/placeholder.svg"}
//                       alt={food.name}
//                       className="rated-food-image"
//                     />
//                   </div>
//                   <div className="rated-food-details">
//                     <div className="rated-food-name">{food.name}</div>
//                     <div className="rating-container">
//                       {/* <span className={`star ${food.rating > 0 ? "filled" : ""}`}>★</span> */}
//                       <span className="star filled">★</span>
//                       <span className="rating-value">{food.rating}</span>
//                       <span className="review-count">
//                         ({food.reviews} Reviews)
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodDashboard;
import { BarChart3, Award, Settings } from "lucide-react";
import "./food-dashboard.css";

const FoodDashboard = () => {
  const topSellingFoods = [
    {
      id: 1,
      name: "Medu Vada",
      sold: 9,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      id: 2,
      name: "Meat Pizza",
      sold: 5,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
    },
    {
      id: 3,
      name: "grilled lemon herb Mediterranean chicken salad",
      sold: 2,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
    },
    {
      id: 4,
      name: "Cheese Pizza",
      sold: 1,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
    },
    {
      id: 5,
      name: "Steak Kebabs",
      sold: 0,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e44ea58c5.png",
    },
    {
      id: 6,
      name: "FRIED RICE",
      sold: 0,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e4dcd5194.png",
    },
  ];

  const topRatedFoods = [
    {
      id: 1,
      name: "Meat Pizza",
      rating: 4.5,
      reviews: 3,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
    },
    {
      id: 2,
      name: "Steak Kebabs",
      rating: 0,
      reviews: 0,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e44ea58c5.png",
    },
    {
      id: 3,
      name: "FRIED RICE",
      rating: 0,
      reviews: 0,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e4dcd5194.png",
    },
    {
      id: 4,
      name: "Thai Fried Rice",
      rating: 0,
      reviews: 0,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e5955e1d1.png",
    },
    {
      id: 5,
      name: "Cheese Pizza",
      rating: 0,
      reviews: 0,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
    },
    {
      id: 6,
      name: "grilled lemon herb Mediterranean chicken salad",
      rating: 0,
      reviews: 0,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
    },
  ];

  return (
    // imported from Pending for box
    <div className="Pending-content-wrapper">
      <div className="FoodOrderingDashboard-dashboard">
        <div className="FoodOrderingDashboard-container">
          <div className="FoodOrderingDashboard-section">
            <div className="FoodOrderingDashboard-section-header">
              <div className="FoodOrderingDashboard-section-title">
                <img
                  src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/top-selling.png"
                  className="FoodOrderingDashboard-section-icon FoodOrderingDashboard-selling-icon"
                />
                <h2>Top Selling Foods</h2>
              </div>
            </div>

            <div className="FoodOrderingDashboard-food-grid">
              {topSellingFoods.map((food) => (
                <div key={food.id} className="FoodOrderingDashboard-food-card">
                  <div className="FoodOrderingDashboard-food-image-container">
                    <img
                      src={food.image || "/placeholder.svg"}
                      alt={food.name}
                      className="FoodOrderingDashboard-food-image"
                    />
                    <div className="FoodOrderingDashboard-sold-badge">
                      Sold : {food.sold}
                    </div>
                  </div>
                  <div className="FoodOrderingDashboard-food-name">
                    {food.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="FoodOrderingDashboard-section">
            <div className="FoodOrderingDashboard-section-header">
              <div className="FoodOrderingDashboard-section-title">
                <img
                  src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/most-rated.png"
                  className="FoodOrderingDashboard-section-icon FoodOrderingDashboard-rated-icon"
                />
                <h2>Top Rated Foods</h2>
              </div>
            </div>

            <div className="FoodOrderingDashboard-rated-food-grid">
              {topRatedFoods.map((food) => (
                <div
                  key={food.id}
                  className="FoodOrderingDashboard-rated-food-card"
                >
                  <div className="FoodOrderingDashboard-rated-food-content">
                    <div className="FoodOrderingDashboard-rated-food-image-container">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="FoodOrderingDashboard-rated-food-image"
                      />
                    </div>
                    <div className="FoodOrderingDashboard-rated-food-details">
                      <div className="FoodOrderingDashboard-rated-food-name">
                        {food.name}
                      </div>
                      <div className="FoodOrderingDashboard-rating-container">
                        <span className="FoodOrderingDashboard-star FoodOrderingDashboard-filled">
                          ★
                        </span>
                        <span className="FoodOrderingDashboard-rating-value">
                          {food.rating}
                        </span>
                        <span className="FoodOrderingDashboard-review-count">
                          ({food.reviews} Reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDashboard;
