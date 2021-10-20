import React from 'react'
import styles from './ModulePopUp.module.scss'


import {useForm} from "react-hook-form";
import {imgs, products} from "../../../mock/mock";

const SaleModal = ({hidden, setHidden, allProducts}) => {
	const {register, handleSubmit} = useForm()

	const onSubmit = (data) => {
		allProducts.push(
			{
				id: Math.floor(Math.random() * 1000),
				number: data.numberProducts,
				dateSale: products[0].creationDate,
			}
		)
		localStorage.setItem('products', JSON.stringify(allProducts))
	}
	return (
		<div style={{display: hidden ? 'block' : 'none'}}
				 className={styles.overlay}>
			<div style={{display: hidden ? 'block' : 'none'}}
					 className={styles.modalWrapper}>
				<div onClick={() => setHidden(false)}
						 className={styles.close}
						 src={imgs[0].close}
						 alt="close"/>
				<div className={styles.modalBox}>
					<h1>Sell product</h1>
					<form onSubmit={handleSubmit(onSubmit)}
								className={styles.modalForm}
								action="submit">
						<input  {...register('numberProducts')}
										placeholder='Store'
										type="number"/>
						<input {...register('dateSale')}
									 placeholder='Price'
									 type="number"/>
						<button className={styles.formBtn}>Sell Product</button>
					</form>
				</div>
			</div>
		</div>

	)
}

export default SaleModal;