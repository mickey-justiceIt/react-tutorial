import styles from './ProductItem.module.scss'

import React from "react";
import {imgs, products} from "../../../mock/mock";

const ProductItem =({product,setAllPrdocuts}) => {

  const onDeleteProduct = (el) => {
    let items = JSON.parse(localStorage.getItem("products"));
    const filteredItems = items.filter((item) => item.id !== el.id);
    localStorage.setItem("products", JSON.stringify(filteredItems));
  }


    const onEditProduct = (item,index) => {

    }
    const onSaleProduct = (item,index) => {
    }
    return(

        <div id={product.id} className={styles.productItems}>
            <div className={styles.productItem}>{product.productName}</div>
            <div className={styles.productItem}>{product.store}</div>
            <div className={styles.productItem}>{product.address}</div>
            <div className={styles.productItem}>{product.category}</div>
            <div className={styles.productItem}>{product.creationDate}</div>
            <div className={styles.productItem}>{product.price}</div>
            <div className={styles.productItem}>{product.remains}</div>
            <div className={styles.productItem}>{product.weight}</div>
            <div className={styles.productItem}>
                <div onClick={onEditProduct} className={styles.button}>
                    <img src={imgs[0].editIcon} alt="edit" />
                </div>
                <div onClick={onSaleProduct} className={styles.button}>
                    <p>Sell</p>
                </div>
                <div onClick={onDeleteProduct} className={styles.button}>
                    <img src={imgs[0].deleteIcon} alt="delete" />
                </div>

            </div>
        </div>

    )

}

export default ProductItem