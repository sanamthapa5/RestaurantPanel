"use client";

import OrdersTable from "./OrdersTable"; // adjust the path if it's in another folder

export default function PendingOrder() {
  return <OrdersTable filterStatus="Pending" />;
}
