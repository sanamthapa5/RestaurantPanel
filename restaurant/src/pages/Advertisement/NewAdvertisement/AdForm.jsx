// // import React, { useState } from "react";
// // import { ImageIcon, Upload } from "lucide-react";
// // import "./AdForm.css";

// // function AdForm() {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     description: "",
// //     adType: "Restaurant Promotion",
// //     validityDate: "",
// //     showReview: false,
// //     showRating: false,
// //     profileImage: null,
// //     coverImage: null,
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   const handleImageUpload = (type, e) => {
// //     const file = e.target.files?.[0] || null;
// //     setFormData((prev) => ({ ...prev, [type]: file }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", formData);
// //     alert("Advertisement created successfully!");
// //   };

// //   const handleReset = () => {
// //     setFormData({
// //       title: "",
// //       description: "",
// //       adType: "Restaurant Promotion",
// //       validityDate: "",
// //       showReview: true,
// //       showRating: true,
// //       profileImage: null,
// //       coverImage: null,
// //     });
// //   };

// //   return (
// //     <div className="form-container">
// //       <form onSubmit={handleSubmit} className="ad-form">
// //         <div className="form-section">
// //           <div className="input-group">
// //             <label htmlFor="title">Advertisement Title</label>
// //             <input
// //               type="text"
// //               id="title"
// //               name="title"
// //               value={formData.title}
// //               onChange={handleInputChange}
// //               placeholder="Enter advertisement title"
// //             />
// //           </div>

// //           <div className="input-group">
// //             <label htmlFor="description">Short Description</label>
// //             <input
// //               type="text"
// //               id="description"
// //               name="description"
// //               value={formData.description}
// //               onChange={handleInputChange}
// //               placeholder="Enter short description"
// //             />
// //           </div>

// //           <div className="input-group">
// //             <label htmlFor="adType">Advertisement Type</label>
// //             <select
// //               id="adType"
// //               name="adType"
// //               value={formData.adType}
// //               onChange={handleInputChange}
// //             >
// //               <option value="Restaurant Promotion">Restaurant Promotion</option>
// //               <option value="Retail Sale">Retail Sale</option>
// //               <option value="Event Promotion">Event Promotion</option>
// //               <option value="Service Offering">Service Offering</option>
// //             </select>
// //           </div>

// //           <div className="input-group">
// //             <label htmlFor="validityDate">Validity Date</label>
// //             <input
// //               type="date"
// //               id="validityDate"
// //               name="validityDate"
// //               value={formData.validityDate}
// //               onChange={handleInputChange}
// //             />
// //           </div>

// //           <label className="form-label">Show Review & Ratings</label>

// //           <div className="checkbox-group">
// //             <div className="checkbox-item">
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   name="showReview"
// //                   checked={formData.showReview}
// //                   onChange={handleInputChange}
// //                 />
// //                 Show Review
// //               </label>
// //             </div>
// //             <div className="checkbox-item">
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   name="showRating"
// //                   checked={formData.showRating}
// //                   onChange={handleInputChange}
// //                 />
// //                 Show Rating
// //               </label>
// //             </div>
// //           </div>

// //           <div className="upload-section">
// //             <div className="upload-box">
// //               <label htmlFor="profileImage">
// //                 <ImageIcon />
// //                 <span>Profile Image</span>
// //               </label>
// //               <input
// //                 type="file"
// //                 id="profileImage"
// //                 onChange={(e) => handleImageUpload("profileImage", e)}
// //                 accept="image/*"
// //               />
// //             </div>

// //             <div className="upload-box">
// //               <label htmlFor="coverImage">
// //                 <Upload />
// //                 <span>Cover Image</span>
// //               </label>
// //               <input
// //                 type="file"
// //                 id="coverImage"
// //                 onChange={(e) => handleImageUpload("coverImage", e)}
// //                 accept="image/*"
// //               />
// //             </div>
// //           </div>

// //           <div className="form-buttons">
// //             <button
// //               type="button"
// //               onClick={handleReset}
// //               className="reset-button"
// //             >
// //               Reset
// //             </button>
// //             <button type="submit" className="submit-button">
// //               Submit
// //             </button>
// //           </div>
// //         </div>

// //         <div className="preview-section">
// //           <h3>Advertisement Preview</h3>
// //           <div className="preview-content">
// //             <div className="preview-cover">
// //               {formData.coverImage && (
// //                 <img
// //                   src={URL.createObjectURL(formData.coverImage)}
// //                   alt="Cover"
// //                 />
// //               )}
// //             </div>
// //             <div className="preview-details">
// //               <div className="preview-profile">
// //                 {formData.profileImage && (
// //                   <img
// //                     src={URL.createObjectURL(formData.profileImage)}
// //                     alt="Profile"
// //                   />
// //                 )}
// //               </div>
// //               <div className="preview-text">
// //                 <h4>{formData.title || "Advertisement Title"}</h4>
// //                 <p>
// //                   {formData.description ||
// //                     "Short description of the advertisement"}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AdForm;

import React, { useState } from "react";
import { ImageIcon, Upload } from "lucide-react";
import "./AdForm.css";

function AdForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    adType: "Restaurant Promotion",
    validityDate: "",
    showReview: false,
    showRating: false,
    profileImage: null,
    coverImage: null,
    video: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "adType" && value === "Video Promotion"
        ? { profileImage: null, coverImage: null }
        : name === "adType" && value !== "Video Promotion"
        ? { video: null }
        : {}),
    }));
  };

  const handleImageUpload = (type, e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [type]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Advertisement created successfully!");
  };

  const handleReset = () => {
    setFormData({
      title: "",
      description: "",
      adType: "Restaurant Promotion",
      validityDate: "",
      showReview: true,
      showRating: true,
      profileImage: null,
      coverImage: null,
      video: null,
    });
  };

  return (
    <div className="AdForm-form-container">
      <form onSubmit={handleSubmit} className="AdForm-ad-form">
        <div className="AdForm-form-section">
          <div className="AdForm-input-group">
            <label htmlFor="title">Advertisement Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter advertisement title"
            />
          </div>

          <div className="AdForm-input-group">
            <label htmlFor="description">Short Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter short description"
            />
          </div>

          <div className="AdForm-input-group">
            <label htmlFor="adType">Advertisement Type</label>
            <select
              id="adType"
              name="adType"
              value={formData.adType}
              onChange={handleInputChange}
            >
              <option value="Restaurant Promotion">Restaurant Promotion</option>
              <option value="Video Promotion">Video Promotion</option>
            </select>
          </div>

          <div className="AdForm-input-group">
            <label htmlFor="validityDate">Validity Date</label>
            <input
              type="date"
              id="validityDate"
              name="validityDate"
              value={formData.validityDate}
              onChange={handleInputChange}
            />
          </div>

          {formData.adType !== "Video Promotion" && (
            <>
              <label className="AdForm-form-label">Show Review & Ratings</label>
              <div className="AdForm-checkbox-group">
                <div className="AdForm-checkbox-item">
                  <label>
                    <input
                      type="checkbox"
                      name="showReview"
                      checked={formData.showReview}
                      onChange={handleInputChange}
                    />
                    Show Review
                  </label>
                </div>
                <div className="AdForm-checkbox-item">
                  <label>
                    <input
                      type="checkbox"
                      name="showRating"
                      checked={formData.showRating}
                      onChange={handleInputChange}
                    />
                    Show Rating
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="AdForm-upload-section">
            {formData.adType === "Video Promotion" ? (
              <div className="AdForm-upload-box">
                <label htmlFor="video">
                  <Upload />
                  <span>Upload Your Video (16:9)</span>
                </label>
                <input
                  type="file"
                  id="video"
                  onChange={(e) => handleImageUpload("video", e)}
                  accept="video/*"
                />
              </div>
            ) : (
              <>
                <div className="AdForm-upload-box">
                  <label htmlFor="profileImage">
                    <ImageIcon />
                    <span>Profile Image</span>
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    onChange={(e) => handleImageUpload("profileImage", e)}
                    accept="image/*"
                  />
                </div>
                <div className="AdForm-upload-box">
                  <label htmlFor="coverImage">
                    <Upload />
                    <span>Cover Image</span>
                  </label>
                  <input
                    type="file"
                    id="coverImage"
                    onChange={(e) => handleImageUpload("coverImage", e)}
                    accept="image/*"
                  />
                </div>
              </>
            )}
          </div>

          <div className="AdForm-form-buttons">
            <button
              type="button"
              onClick={handleReset}
              className="AdForm-reset-button"
            >
              Reset
            </button>
            <button type="submit" className="AdForm-submit-button">
              Submit
            </button>
          </div>
        </div>

        <div className="AdForm-preview-section">
          <h3>Advertisement Preview</h3>
          <div className="AdForm-preview-content">
            <div className="AdForm-preview-cover">
              {formData.adType === "Video Promotion" && formData.video ? (
                <video
                  src={URL.createObjectURL(formData.video)}
                  controls
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                formData.coverImage && (
                  <img
                    src={URL.createObjectURL(formData.coverImage)}
                    alt="Cover"
                  />
                )
              )}
            </div>
            <div className="AdForm-preview-details">
              <div className="AdForm-preview-profile">
                {formData.profileImage &&
                  formData.adType !== "Video Promotion" && (
                    <img
                      src={URL.createObjectURL(formData.profileImage)}
                      alt="Profile"
                    />
                  )}
              </div>
              <div className="AdForm-preview-text">
                <h4>{formData.title || "Advertisement Title"}</h4>
                <p>
                  {formData.description ||
                    "Short description of the advertisement"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdForm;
