// "use client"

import { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    email: "",
    password: "",
    image: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target?.result) {
          setImagePreview(event.target.result);
          setFormData({ ...formData, image: event.target.result });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="employee-form-card">
      <div className="card-header">
        <h2 className="card-title">
          <span className="icon-container">
            <i className="icon-user"></i>
          </span>
          Add New Employee
        </h2>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3 className="section-title">
              <i className="icon-user"></i>
              General Information
            </h3>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  placeholder="Ex : Sakeef Ameer"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="Ex : Prodhan"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <div className="phone-input">
                  <div className="country-code">
                    <span>🇺🇸</span>
                    <span>+1</span>
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleRoleChange}
                  required
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                  <option value="developer">Developer</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-grid">
            <div className="account-section">
              <h3 className="section-title">
                <i className="icon-user"></i>
                Account Info
              </h3>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ex : ex@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ex: 8+ Character"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-input">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Ex: 8+ Character"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <div className="image-section">
              <div className="form-group">
                <div className="image-header">
                  <label>Employee image</label>
                  <span className="ratio-text">Ratio (1:1)</span>
                </div>

                <div className="image-container">
                  <div className="image-preview">
                    {imagePreview ? (
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        className="preview-image"
                      />
                    ) : (
                      <div className="placeholder-icon">
                        <i className="icon-user"></i>
                      </div>
                    )}
                  </div>

                  <div className="image-size-text">
                    Employee image size max 2 MB*
                  </div>

                  <div className="image-buttons">
                    <label className="file-button">
                      Choose file
                      <input
                        type="file"
                        className="hidden-input"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <button
                      type="button"
                      className="browse-button"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData({ ...formData, image: "" });
                      }}
                    >
                      Browse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="reset-button" onClick={onCancel}>
              Reset
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
