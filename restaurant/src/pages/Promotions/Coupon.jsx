"use client"

import { useState } from "react";
import CouponForm from "../../SubComponents/coupon-form.jsx";
import CouponList from "../../SubComponents/coupon-list.jsx";
import "./Coupon.css";

const Coupon = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: "Festival",
      code: "fest",
      couponType: "Default",
      totalUses: 3,
      minPurchase: "50.00",
      maxDiscount: "2,000.00",
      discount: "10",
      discountType: "Percent",
      startDate: "2023-02-07",
      expireDate: "2025-12-01",
      status: true,
    },
  ])

  const [editingCoupon, setEditingCoupon] = useState(null)

  const handleAddCoupon = (couponData) => {
    if (editingCoupon) {
      // Update existing coupon
      setCoupons(coupons.map((coupon) => (coupon.id === editingCoupon.id ? { ...coupon, ...couponData } : coupon)))
      setEditingCoupon(null)
    } else {
      // Add new coupon
      const newCoupon = {
        ...couponData,
        id: Date.now(),
        totalUses: 0,
        status: true,
      }
      setCoupons([...coupons, newCoupon])
    }
  }

  const handleEditCoupon = (coupon) => {
    setEditingCoupon(coupon)
    // You would typically populate the form with the coupon data here
  }

  const handleDeleteCoupon = (couponId) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== couponId))
  }

  return (
    <div className="app-container">
      <CouponForm onAddCoupon={handleAddCoupon} editingCoupon={editingCoupon} />
      <CouponList coupons={coupons} onEdit={handleEditCoupon} onDelete={handleDeleteCoupon} />
    </div>
  )
}

export default Coupon;

