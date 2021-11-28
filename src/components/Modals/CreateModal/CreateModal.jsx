import React, { useState } from "react";

import styles from "./CreateModal.module.scss";

import { imgs } from "../../../mock/mock";
import { createProduct } from "../../../services/services";
const CreateModal = ({ hidden, setHidden, allProducts, handleSubmit }) => {
  const [form, setForm] = useState({
    productName: "",
    store: "",
    category: "",
    remains: "",
    weight: "",
    price: "",
  });
  const userInfo = JSON.parse(localStorage.getItem("CURRENT USER"));

  const onChangeForm = (e, name) => {
    const { value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const presentDate =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();

    const newProduct = {
      id: Date.now(),
      productName: form.productName,
      store: form.store,
      price: form.price,
      remains: form.remains,
      category: form.category,
      weight: form.weight,
      creationDate: presentDate,
      address: userInfo?.address || "No configured address",
    };

    const newProducts = [...allProducts, newProduct];
    createProduct(newProduct);
    localStorage.setItem("products", JSON.stringify(newProducts));
    handleSubmit();
    setHidden(false);
  };

  return (
    <div
      style={{ display: hidden ? "block" : "none" }}
      className={styles.overlay}
    >
      <div
        style={{ display: hidden ? "block" : "none" }}
        className={styles.modalWrapper}
      >
        <div
          onClick={() => setHidden(false)}
          className={styles.close}
          src={imgs.close}
          alt="close"
        />
        <div className={styles.modalBox}>
          <h1>Create a product</h1>
          <div className={styles.modalForm}>
            <input
              onChange={(e) => onChangeForm(e, "store")}
              value={form.store}
              placeholder="Store"
              type="text"
            />
            <input
              onChange={(e) => onChangeForm(e, "price")}
              value={form.price}
              placeholder="Price"
              type="number"
              id="number"
              min="0"
            />
            <input
              onChange={(e) => onChangeForm(e, "productName")}
              value={form.productName}
              placeholder="Product Name"
              type="text"
            />
            <input
              onChange={(e) => onChangeForm(e, "category")}
              value={form.category}
              placeholder="Product Category"
              type="text"
            />
            <input
              onChange={(e) => onChangeForm(e, "remains")}
              value={form.remain}
              placeholder="Quanity of goods"
              type="number"
              min="0"
            />
            <input
              onChange={(e) => onChangeForm(e, "weight")}
              value={form.weight}
              placeholder="Weight/Volume of one item"
              type="text"
              min={"0"}
            />
            <div className={styles.formBtn} onClick={onSubmit}>
              <span>Add a product</span>
              <img src={imgs.plus} alt="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
