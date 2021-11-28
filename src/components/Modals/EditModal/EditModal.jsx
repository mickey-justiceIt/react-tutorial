import React, { useMemo, useState } from "react";

import styles from "./EditModal.module.scss";
import { imgs } from "../../../mock/mock";
import { editProduct } from "../../../services/services";

const EditModal = ({ hidden, setHidden, id, products, setIsSubmit }) => {
  const [form, setForm] = useState({
    productName: "",
    store: "",
    category: "",
    remains: "",
    weight: "",
    price: "",
  });

  const onChangeForm = (e, name) => {
    const { value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    const userInfo = JSON.parse(localStorage.getItem("CURRENT USER"));
    const today = new Date();
    const presentDate =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();

    const newProducts = products.map((pr) => {
      if (pr.id === id) {
        return {
          id: id,
          productName: form.productName || pr.productName,
          store: form.store || pr.store,
          category: form.category || pr.category,
          remains: form.remains || pr.remains,
          weight: form.weight || pr.weight,
          creationDate: presentDate || null,
          price: form.price || pr.price,
          address: userInfo?.address || "No configured address",
        };
      }
      return pr;
    });

    localStorage.setItem("products", JSON.stringify(newProducts));
    setIsSubmit();
    setHidden(false);
  };

  const newProduct = useMemo(() => {
    const np = products.filter((pr) => pr.id === id)[0];
    editProduct(np);
    setForm(np);
    return np;
  }, [products]);

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
          alt="closeIcon"
        />
        <div className={styles.modalBox}>
          <h1>Editing a product</h1>
          <div id={id} className={styles.modalForm}>
            <input
              defaultValue={newProduct.store}
              placeholder="Store"
              onChange={(e) => onChangeForm(e, "store")}
              type="text"
            />
            <input
              defaultValue={newProduct.price}
              placeholder="Price"
              onChange={(e) => onChangeForm(e, "price")}
              type="number"
              min="0"
            />
            <input
              defaultValue={newProduct.productName}
              placeholder="Product Name"
              onChange={(e) => onChangeForm(e, "productName")}
              type="text"
            />

            <input
              defaultValue={newProduct.category}
              placeholder="Product Category"
              onChange={(e) => onChangeForm(e, "category")}
              type="text"
            />
            <input
              defaultValue={newProduct.remains}
              placeholder="Quanity of goods"
              onChange={(e) => onChangeForm(e, "remains")}
              type="number"
              min="0"
            />
            <input
              defaultValue={newProduct.weight}
              placeholder="Weight/Volume of one item"
              onChange={(e) => onChangeForm(e, "weight")}
              type="text"
            />
            <button onClick={onSubmit} className={styles.formBtn}>
              <span>Save changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
