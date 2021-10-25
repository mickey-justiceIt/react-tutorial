import React from "react";

export default function LineChart() {
  const arr = [];
  const lineData = JSON.parse(localStorage.getItem("products")) || [];
  lineData.map((dataItem) =>
    arr.push({ area: dataItem.remains, price: dataItem.price })
  );
  const total = arr.reduce((accum, item) => accum + Number(item.price), 0);
  return (
    <>
      <span style={{ fontSize: "40px" }}>${total}</span>
    </>
  );
}
