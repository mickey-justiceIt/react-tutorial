import React, { useEffect, useState } from "react";

import styles from "./MyProducts.module.scss";

import { imgs, products } from "../../mock/mock";

import ProductItem from "./ProductItem/Productitem";
import CreateModal from "../Modals/CreateModal/CreateModal";

const MyProducts = (props) => {
  const [hidden, setHidden] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [allProducts, setAllProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const handleSubmit = () => {
    setIsSubmit(!isSubmit);
  };
  const openModal = () => {
    setHidden(true);
  };

  useEffect(() => {
    if (allProducts && allProducts.length === 0) {
      localStorage.setItem("products", JSON.stringify(products));
      setAllProducts(products);
    }
  }, []);

  useEffect(() => {
    setAllProducts(JSON.parse(localStorage.getItem("products")));
  }, [isSubmit]);

  const updateAllProducts = (date) => {
    setAllProducts(date);
    localStorage.setItem("products", JSON.stringify(date));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headWrapper}>
            <div className={styles.headWrapperTitle}>
              <h1>My product</h1>
              <p>Product table</p>
            </div>
            <div onClick={openModal} className={styles.wrapperButton}>
              <img
                src={imgs.createIcon}
                className={styles.buttonLogo}
                alt={"createIcon"}
              />
              <span className={styles.buttonText}>Create a product</span>
            </div>
          </div>
          <div>
            <div className={styles.productsListMenus}>
              <div className={styles.productListMenu}>Product Name</div>
              <div className={styles.productListMenu}>Store</div>
              <div className={styles.productListMenu}>Address</div>
              <div className={styles.productListMenu}>Category</div>
              <div className={styles.productListMenu}>Creation Date</div>
              <div className={styles.productListMenu}>Price</div>
              <div className={styles.productListMenu}>Remains</div>
              <div className={styles.productListMenu}>Weight/Volume</div>
              <div className={styles.productListMenu}>Actions</div>
            </div>
            <div className={styles.products}>
              {allProducts.map((product) => (
                <ProductItem
                  product={product}
                  allProducts={allProducts}
                  updateAllProducts={updateAllProducts}
                  setIsSubmit={setIsSubmit}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CreateModal
        allProducts={allProducts}
        handleSubmit={handleSubmit}
        hidden={hidden}
        setHidden={setHidden}
      />
    </>
  );
};

export default MyProducts;
