import React from 'react'
import styles from './ModulePopUp.module.scss'
import close from '../../../assets/logo/close.svg'
import plus from '../../../assets/logo/plus.svg'
import {useForm} from "react-hook-form";
import {products} from "../../../mock/mock";


const ModalPopUp = ({hidden, setHidden, allProducts}) => {
	const {register, handleSubmit} = useForm()
	const onSubmit = (data) => {
		allProducts.push(
			{
				id: Math.floor(Math.random() * 1000),
				productName: data.productName,
				store: data.store,
				category: data.category,
				remains: data.remains,
				weight: data.weight,
				creationDate: products[0].creationDate,
				price: data.price,
				address: products[0].address
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
						 src={close} alt="close"
				/>
				<div className={styles.modalBox}>
					<h1>Create a product</h1>
					<form onSubmit={handleSubmit(onSubmit)}
								className={styles.modalForm}
								action="submit">
						<input  {...register('store')}
										placeholder='Store'
										type="text"/>
						<input {...register('price')}
									 placeholder='Price'
									 type="number"/>
						<input {...register('productName')}
									 placeholder='Product Name'
									 type="text"/>
						<input {...register('category')}
									 placeholder='Product Category'
									 type="text"/>
						<input {...register('remains')}
									 placeholder='Quanity of goods'
									 type="number"/>
						<input {...register('weight')}
									 placeholder='Weight/Volume of one item'
									 type="text"/>
						<button className={styles.formBtn}>
							<span>Add a product</span>
							<img src={plus} alt="plus"/>
						</button>
					</form>
				</div>
			</div>
		</div>

	)
}

export default ModalPopUp;