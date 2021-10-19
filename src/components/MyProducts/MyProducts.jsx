import React, {useEffect, useState} from 'react';

import styles from './MyProducts.module.scss'

import { imgs } from '../../mock/mock'
import ProductItem from "./ProductItem/Productitem";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import { products } from "../../mock/mock";
import {set} from "react-hook-form";

const MyProducts = (props) => {
	const [hidden, setHidden] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false)

	const [allProducts, setAllProducts] = useState([])

  const handleSubmit = () => {
    setIsSubmit(!isSubmit)
  }
	const openModal = () => {
		setHidden(true)
	}

  useEffect(() => {
    setAllProducts(JSON.parse(localStorage.getItem('products')))
  }, [])

  useEffect(() => {
    if (allProducts && allProducts.length === 0) {
      localStorage.setItem('products', JSON.stringify(products))
      setAllProducts(products)
    }
  }, [handleSubmit])

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.headWrapper}>
						<div className={styles.headWrapperTitle}>
							<h1>My products</h1>
							<p>Product table</p>
						</div>
						<div onClick={openModal} className={styles.wrapperButton}>
							<img src={imgs[0].createIcon} className={styles.buttonLogo} alt={'createIcon'}/>
							<p className={styles.buttonText}>Create a product</p>
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
            {allProducts.map((product) =>
              <ProductItem product={product} />
            )}
					</div>
				</div>
			</div>
			<ModalPopUp
				allProducts={allProducts}
        handleSubmit={handleSubmit}
				hidden={hidden}
				setHidden={setHidden}
			/>
		</>

	);

}

export default MyProducts;