"use client"

import { useState } from "react";
import "./coupon-list.css";

const CouponList = ({ coupons, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="coupon-list-container">
      <div className="list-header">
        <h2>
          Coupon List <span className="coupon-count">{coupons.length}</span>
        </h2>
        <div className="search-container">
          <input type="text" placeholder="Ex : Search by title or code" value={searchTerm} onChange={handleSearch} />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="coupon-table">
          <thead>
            <tr>
              <th>SI</th>
              <th>Title</th>
              <th>Code</th>
              <th>Type</th>
              <th>Total Uses</th>
              <th>Min Purchase</th>
              <th>Max Discount</th>
              <th>Discount</th>
              <th>Discount Type</th>
              <th>Start Date</th>
              <th>Expire Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoupons.length > 0 ? (
              filteredCoupons.map((coupon, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{coupon.title}</td>
                  <td>{coupon.code}</td>
                  <td>{coupon.couponType}</td>
                  <td>{coupon.totalUses || 0}</td>
                  <td>${coupon.minPurchase || "0.00"}</td>
                  <td>${coupon.maxDiscount || "0.00"}</td>
                  <td>{coupon.discount}</td>
                  <td>{coupon.discountType}</td>
                  <td>{coupon.startDate}</td>
                  <td>{coupon.expireDate}</td>
                  <td>
                    <div className="status-toggle">
                      <input type="checkbox" id={`status-${index}`} checked={coupon.status} onChange={() => {}} />
                      <label htmlFor={`status-${index}`} className="toggle-label"></label>
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-button" onClick={() => onEdit(coupon)}>
                        ✏️
                      </button>
                      <button className="delete-button" onClick={() => onDelete(coupon.id)}>
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13" className="no-data">
                  No coupons found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponList;

