// // "use client"

// import { useState } from "react";
// import { Search, Star, BadgeCheck } from "lucide-react";
// import "./CustomersReviews.css";

// const CustomerReviews = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [replyText, setReplyText] = useState("");

//   // Sample data for reviews
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       food: "Meat Pizza",
//       orderId: "#100113",
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
//       reviewer: "Purno Test",
//       verified: true,
//       phone: "+8**********",
//       rating: 5,
//       review: "vvxvxvxv",
//       date: "01 Jun 2023",
//       time: "11:55 am",
//       replied: false,
//       reply: "", // Added to store the reply
//     },
//     {
//       id: 2,
//       food: "Meat Pizza",
//       orderId: "#100080",
//       reviewer: "Jane Doe",
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
//       verified: true,
//       phone: "+8**********",
//       rating: 5,
//       review: "Pizza packaging and test was so good...",
//       date: "02 Jan 2023",
//       time: "03:35 pm",
//       replied: true,
//       reply: "Thank you for your feedback!", // Sample reply
//     },
//     {
//       id: 3,
//       food: "Meat Pizza",
//       orderId: "#100008",
//       reviewer: "Customer not found",
//       image:
//         "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
//       verified: false,
//       phone: "",
//       rating: 4,
//       review: "Nice",
//       date: "21 Aug 2021",
//       time: "10:46 pm",
//       replied: true,
//       reply: "Glad you liked it!", // Sample reply
//     },
//   ]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSort = (key, direction) => {
//     setSortConfig({ key, direction });

//     const sortedReviews = [...reviews].sort((a, b) => {
//       if (key === "date") {
//         const dateA = new Date(`${a.date} ${a.time}`);
//         const dateB = new Date(`${b.date} ${b.time}`);
//         return direction === "asc" ? dateA - dateB : dateB - dateA;
//       } else if (key === "id") {
//         return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
//       } else {
//         const valueA = a[key].toString().toLowerCase();
//         const valueB = b[key].toString().toLowerCase();
//         if (valueA < valueB) return direction === "asc" ? -1 : 1;
//         if (valueA > valueB) return direction === "asc" ? 1 : -1;
//         return 0;
//       }
//     });

//     setReviews(sortedReviews);
//   };

//   const openReplyPopup = (review) => {
//     setSelectedReview(review);
//     setReplyText(review.reply || ""); // Pre-fill with existing reply if updating
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setSelectedReview(null);
//     setReplyText("");
//   };

//   const handleSendReply = () => {
//     if (!selectedReview || !replyText.trim()) return;

//     const updatedReviews = reviews.map((review) =>
//       review.id === selectedReview.id
//         ? { ...review, replied: true, reply: replyText }
//         : review
//     );

//     setReviews(updatedReviews);
//     closePopup();
//   };

//   // Filter reviews based on search query
//   const filteredReviews = reviews.filter(
//     (review) =>
//       review.food.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       review.phone.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // hdujfucghc
//   const handleReviewSubmit = (e) => {
//     e.preventDefault();

//     // Check if the review input is empty
//     if (!review.trim()) {
//       setError("Review cannot be empty");
//       return;
//     }

//     // Submit the review
//     // You can add your submission logic here
//     console.log("Review submitted:", review);

//     // Clear input and error after submission
//     setReview("");
//     setError("");
//   };

//   return (
//     <div className="customer-reviews-container">
//       <div className="reviews-header">
//         <h1>
//           <Star className="star-icon" /> Customers Reviews
//         </h1>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Ex : Search by food name or phone"
//             required
//             value={searchQuery}
//             onChange={handleSearch}
//           />
//           <button className="ReviewSearch-button">
//             <Search size={20} />
//           </button>
//         </div>
//       </div>

//       <div className="reviews-table">
//         <div className="table-header">
//           <div className="column si">
//             SI
//             <span
//               className={`sort-asc ${
//                 sortConfig.key === "id" && sortConfig.direction === "asc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("id", "asc")}
//             >
//               ▲
//             </span>
//             <span
//               className={`sort-desc ${
//                 sortConfig.key === "id" && sortConfig.direction === "desc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("id", "desc")}
//             >
//               ▼
//             </span>
//           </div>
//           <div className="column food">
//             Food
//             <span
//               className={`sort-asc ${
//                 sortConfig.key === "food" && sortConfig.direction === "asc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("food", "asc")}
//             >
//               ▲
//             </span>
//             <span
//               className={`sort-desc ${
//                 sortConfig.key === "food" && sortConfig.direction === "desc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("food", "desc")}
//             >
//               ▼
//             </span>
//           </div>
//           <div className="column reviewer">
//             Reviewer
//             <span
//               className={`sort-asc ${
//                 sortConfig.key === "reviewer" && sortConfig.direction === "asc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("reviewer", "asc")}
//             >
//               ▲
//             </span>
//             <span
//               className={`sort-desc ${
//                 sortConfig.key === "reviewer" && sortConfig.direction === "desc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("reviewer", "desc")}
//             >
//               ▼
//             </span>
//           </div>
//           <div className="column review">
//             Review
//             <span
//               className={`sort-asc ${
//                 sortConfig.key === "review" && sortConfig.direction === "asc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("review", "asc")}
//             >
//               ▲
//             </span>
//             <span
//               className={`sort-desc ${
//                 sortConfig.key === "review" && sortConfig.direction === "desc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("review", "desc")}
//             >
//               ▼
//             </span>
//           </div>
//           <div className="column date">
//             Date
//             <span
//               className={`sort-asc ${
//                 sortConfig.key === "date" && sortConfig.direction === "asc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("date", "asc")}
//             >
//               ▲
//             </span>
//             <span
//               className={`sort-desc ${
//                 sortConfig.key === "date" && sortConfig.direction === "desc"
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleSort("date", "desc")}
//             >
//               ▼
//             </span>
//           </div>
//           <div className="column action">Action</div>
//         </div>

//         <div className="table-body">
//           {filteredReviews.map((review) => (
//             <div className="table-row" key={review.id}>
//               <div className="column si">{review.id}</div>
//               <div className="column food">
//                 <div className="food-info">
//                   <div className="food-image">
//                     <img src={review.image} alt={review.food} />
//                   </div>
//                   <div className="food-details">
//                     <div className="food-name">{review.food}</div>
//                     <div className="order-id">Order ID {review.orderId}</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="column reviewer">
//                 <div className="reviewer-name">
//                   {review.reviewer}{" "}
//                   {review.verified && (
//                     // <CheckCircle className="verified-icon" size={16} />
//                     <BadgeCheck className="verified-icon" size={16} />
//                   )}
//                 </div>
//                 <div className="reviewer-phone">{review.phone}</div>
//               </div>
//               <div className="column review">
//                 <div className="rating">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={
//                         i < review.rating ? "star-filled" : "star-empty"
//                       }
//                       size={16}
//                       fill={i < review.rating ? "#FF8A00" : "none"}
//                       color={i < review.rating ? "#FF8A00" : "#D9D9D9"}
//                     />
//                   ))}
//                 </div>
//                 <div className="review-text">{review.review}</div>
//               </div>
//               <div className="column date">
//                 <div className="review-date">{review.date}</div>
//                 <div className="review-time">{review.time}</div>
//               </div>
//               <div className="column action">
//                 {!review.replied ? (
//                   <button
//                     className="give-reply-btn"
//                     onClick={() => openReplyPopup(review)}
//                   >
//                     Give Reply
//                   </button>
//                 ) : (
//                   <button
//                     className="view-reply-btn"
//                     onClick={() => openReplyPopup(review)}
//                   >
//                     View Reply
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {isPopupOpen && selectedReview && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <button className="close-button" onClick={closePopup}>
//               ×
//             </button>
//             <div className="popup-content">
//               <div className="food-image">
//                 <img src={selectedReview.image} alt={selectedReview.food} />
//               </div>
//               <h2 className="food-name">{selectedReview.food}</h2>
//               <div className="rating">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={
//                       i < selectedReview.rating ? "star-filled" : "star-empty"
//                     }
//                     size={16}
//                     fill={i < selectedReview.rating ? "#FF8A00" : "none"}
//                     color={i < selectedReview.rating ? "#FF8A00" : "#D9D9D9"}
//                   />
//                 ))}
//               </div>
//               {/* <div className="reviewer-name">{selectedReview.reviewer}</div>  this doesnt show verification badge*/}
//               <div className="reviewer-name">
//                 {selectedReview.reviewer}{" "}
//                 {selectedReview.verified && (
//                   <BadgeCheck className="verified-icon" size={16} />
//                 )}
//               </div>
//               <div className="review-text">{selectedReview.review}</div>
//               {selectedReview.replied && (
//                 <div className="existing-reply">
//                   <strong>Previous Reply:</strong> {selectedReview.reply}
//                 </div>
//               )}
//               <div className="reply-section">
//                 <label className="reply-label">Write your reply here</label>
//                 <textarea
//                   className="reply-input"
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                   placeholder="Type your reply..."
//                 />
//               </div>
//               <button className="send-reply-btn" onClick={handleSendReply}>
//                 {selectedReview.replied ? "Update Reply" : "Send Reply"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerReviews;

// "use client"

import { useState } from "react";
import { Search, Star, X, BadgeCheck } from "lucide-react";
import "./CustomersReviews.css";

const CustomerReviews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [replyText, setReplyText] = useState("");

  // Sample data for reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      food: "Meat Pizza",
      orderId: "#100113",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
      reviewer: "Purno Test",
      verified: true,
      phone: "+8**********",
      rating: 5,
      review: "vvxvxvxv",
      date: "01 Jun 2023",
      time: "11:55 am",
      replied: false,
      reply: "",
    },
    {
      id: 2,
      food: "Meat Pizza",
      orderId: "#100080",
      reviewer: "Jane Doe",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
      verified: true,
      phone: "+8**********",
      rating: 5,
      review: "Pizza packaging and test was so good...",
      date: "02 Jan 2023",
      time: "03:35 pm",
      replied: true,
      reply: "Thank you for your feedback!",
    },
    {
      id: 3,
      food: "Meat Pizza",
      orderId: "#100008",
      reviewer: "Customer not found",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
      verified: false,
      phone: "",
      rating: 4,
      review: "Nice",
      date: "21 Aug 2021",
      time: "10:46 pm",
      replied: true,
      reply: "Glad you liked it!",
    },
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (key, direction) => {
    setSortConfig({ key, direction });

    const sortedReviews = [...reviews].sort((a, b) => {
      if (key === "date") {
        const dateA = new Date(`${a.date} ${a.time}`);
        const dateB = new Date(`${b.date} ${b.time}`);
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      } else if (key === "id") {
        return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
      } else {
        const valueA = a[key].toString().toLowerCase();
        const valueB = b[key].toString().toLowerCase();
        if (valueA < valueB) return direction === "asc" ? -1 : 1;
        if (valueA > valueB) return direction === "asc" ? 1 : -1;
        return 0;
      }
    });

    setReviews(sortedReviews);
  };

  const openReplyPopup = (review) => {
    setSelectedReview(review);
    setReplyText(review.reply || "");
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedReview(null);
    setReplyText("");
  };

  const handleSendReply = () => {
    if (!selectedReview || !replyText.trim()) return;

    const updatedReviews = reviews.map((review) =>
      review.id === selectedReview.id
        ? { ...review, replied: true, reply: replyText }
        : review
    );

    setReviews(updatedReviews);
    closePopup();
  };

  // Filter reviews based on search query
  const filteredReviews = reviews.filter(
    (review) =>
      review.food.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="customer-reviews-container">
      <div className="reviews-header">
        <h1>
          {/* <Star className="star-icon" /> Customers Reviews */}
          <img
            src="https://stackfood-admin.6amtech.com/public/assets/admin/img/resturant-panel/page-title/review.png"
            className="star-icon"
          />{" "}
          Customers Reviews
        </h1>
      </div>
      <div className="reviews-box">
        <div className="reviews-content">
          <div className="search-container">
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
          </div>

          <div className="reviews-table">
            <div className="table-header">
              <div className="column si">
                SI
                <span
                  className={`sort-asc ${
                    sortConfig.key === "id" && sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("id", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "id" && sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("id", "desc")}
                >
                  ▼
                </span>
              </div>
              <div className="column food">
                Food
                <span
                  className={`sort-asc ${
                    sortConfig.key === "food" && sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("food", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "food" && sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("food", "desc")}
                >
                  ▼
                </span>
              </div>
              <div className="column reviewer">
                Reviewer
                <span
                  className={`sort-asc ${
                    sortConfig.key === "reviewer" &&
                    sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("reviewer", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "reviewer" &&
                    sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("reviewer", "desc")}
                >
                  ▼
                </span>
              </div>
              <div className="column review">
                Review
                <span
                  className={`sort-asc ${
                    sortConfig.key === "review" &&
                    sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("review", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "review" &&
                    sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("review", "desc")}
                >
                  ▼
                </span>
              </div>
              <div className="column date">
                Date
                <span
                  className={`sort-asc ${
                    sortConfig.key === "date" && sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("date", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "date" && sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("date", "desc")}
                >
                  ▼
                </span>
              </div>
              <div className="column action">Action</div>
            </div>

            <div className="table-body">
              {filteredReviews.map((review) => (
                <div className="table-row" key={review.id}>
                  <div className="column si">{review.id}</div>
                  <div className="column food">
                    <div className="food-info">
                      <div className="food-image">
                        <img src={review.image} alt={review.food} />
                      </div>
                      <div className="food-details">
                        <div className="food-name">{review.food}</div>
                        <div className="order-id">
                          Order ID {review.orderId}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column reviewer">
                    <div className="reviewer-name">
                      {review.reviewer}{" "}
                      {review.verified && (
                        <BadgeCheck className="verified-icon" size={16} />
                      )}
                    </div>
                    <div className="reviewer-phone">{review.phone}</div>
                  </div>
                  <div className="column review">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < review.rating ? "star-filled" : "star-empty"
                          }
                          size={16}
                          fill={i < review.rating ? "#FF8A00" : "none"}
                          color={i < review.rating ? "#FF8A00" : "#D9D9D9"}
                        />
                      ))}
                    </div>
                    <div className="review-text">{review.review}</div>
                  </div>
                  <div className="column date">
                    <div className="review-date">{review.date}</div>
                    <div className="review-time">{review.time}</div>
                  </div>
                  <div className="column action">
                    {!review.replied ? (
                      <button
                        className="give-reply-btn"
                        onClick={() => openReplyPopup(review)}
                      >
                        Give Reply
                      </button>
                    ) : (
                      <button
                        className="view-reply-btn"
                        onClick={() => openReplyPopup(review)}
                      >
                        View Reply
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && selectedReview && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={closePopup}>
              <X />
            </button>
            <div className="popup-content">
              <div className="food-image">
                <img src={selectedReview.image} alt={selectedReview.food} />
              </div>
              <h2 className="food-name">{selectedReview.food}</h2>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < selectedReview.rating ? "star-filled" : "star-empty"
                    }
                    size={16}
                    fill={i < selectedReview.rating ? "#FF8A00" : "none"}
                    color={i < selectedReview.rating ? "#FF8A00" : "#D9D9D9"}
                  />
                ))}
              </div>
              <div className="reviewer-name">
                {selectedReview.reviewer}{" "}
                {selectedReview.verified && (
                  <BadgeCheck className="verified-icon" size={16} />
                )}
              </div>
              <div className="review-text">{selectedReview.review}</div>
              {selectedReview.replied && (
                <div className="existing-reply">
                  <strong>Previous Reply:</strong> {selectedReview.reply}
                </div>
              )}
              <div className="reply-section">
                <label className="reply-label">Write your reply here</label>
                <textarea
                  className="reply-input"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                />
              </div>
              <button className="send-reply-btn" onClick={handleSendReply}>
                {selectedReview.replied ? "Update Reply" : "Send Reply"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
