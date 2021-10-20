import React from 'react'
import {useForm} from "react-hook-form";

import styles from './EditModal.module.scss'

import {imgs, products} from "../../../mock/mock";

const EditModal = ({hidden, setHidden, allProducts,id,store,price,remains,weight,productName,category}) => {

	const {register, handleSubmit} = useForm()

	const onSubmit = (data) => {

		allProducts.push(
			{
				id: Math.floor(Math.random() * 1000),
				store: data.store,
				productName: data.productName,
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
		<div style={{ display: hidden ? 'block' : 'none'}}
				 className={styles.overlay}>
			<div style={{display: hidden ? 'block' : 'none'}}
					 className={styles.modalWrapper}>
				<div onClick={() => setHidden(false)}
						 className={styles.close}
						 src={imgs[0].close}
						 alt="closeIcon"/>
				<div className={styles.modalBox}>
					<h1>Editing a product</h1>
					<form id={id}
								onSubmit={handleSubmit(onSubmit)}
								className={styles.modalForm}
								action="submit">
						<input value={store}
									 {...register('store')}
									 placeholder='Store'
									 type="text" />
						<input value={price}
									 {...register('price')}
									 placeholder='Price'
									 type="number"/>
						<input value={productName}
									 {...register('productName')}
									 placeholder='Product Name'
									 type="text"/>
						<input value={category}
									 {...register('category')}
									 placeholder='Product Category'
									 type="text"/>
						<input value={remains}
									 {...register('remains')}
									 placeholder='Quanity of goods' type="number"/>
						<input value={weight} {...register('weight')}
									 placeholder='Weight/Volume of one item'
									 type="text"/>
						<button className={styles.formBtn}>
							<span>Add a product</span>
							 <img src={imgs[0].plus} alt="plus"/>
						</button>
					</form>

				</div>
			</div>
		</div>
	)

}

export default EditModal;