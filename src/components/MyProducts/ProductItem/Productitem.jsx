import React, {useState,useEffect} from "react";

import styles from './ProductItem.module.scss'

import {imgs} from "../../../mock/mock";

import EditModal from '../../Modals/EditModal/EditModal';
import MySales from '../../MySales/MySales';

const ProductItem =({product,allProducts,setAllProducts}) => {
  const [hidden, setHidden] = useState(false);

  const onDeleteProduct = (id) => {
    let newProducts = allProducts.filter(item => item.id !== id);
    setAllProducts(newProducts)
  }

  const onEditProduct = (product) => {
    setHidden(true)
    allProducts.filter(item => item.id === product.id
      ? <EditModal
        id={product.id}
        productName={product.productName}
        store={product.store}
        category={product.category}
        remains={product.remains}
        weight={product.weight}
        hidden={hidden}
        setHidden={setHidden}
      />
      : false
    );
  }

  const onSaleProduct = (product) => {
    setHidden(true)
    allProducts.filter(item => item.id === product.id
      ? <MySales id={product.id}
               productName={product.productName}
               store={product.store}
               category={product.category}
               remains={product.remains}
               weight={product.weight} />
      : false
    );
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