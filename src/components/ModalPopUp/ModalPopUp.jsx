import React from 'react'
import styles from './ModulePopUp.module.scss'
import close from '../../assets/logo/close.svg'
import plus from '../../assets/logo/plus.svg'
import {useForm} from "react-hook-form";
import TableCharts from "../TableCharts";
const ModalPopUp = ({openModal,hidden,setHidden}) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return(
            <div style={{display: hidden ? 'block' : 'none' }} className={styles.overlay}>
                <div style={{display: hidden ? 'block' : 'none' }} className={styles.modalWrapper}>
                    <div onClick={() => setHidden(false)} className={styles.close} src={close} alt="" />
                    <div className={styles.modalBox}>
                        <h1>Create a product</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.modalForm} action="submit">
                            <input {...register('store')} placeholder='Store' type="text" />
                            <input {...register('price')} placeholder='Price' type="number" />
                            <input {...register('name')} placeholder='Product Name' type="text" />
                            <input {...register('category')} placeholder='Product Category' type="text" />
                            <input {...register('quanity')} placeholder='Quanity of goods' type="number" />
                            <input {...register('weight/volume')} placeholder='Weight/Volume of one item' type="text" />
                            <button className={styles.formBtn}>
                                <span>Add a product</span>
                                <img src={plus} alt="plus" />
                            </button>
                        </form>
                    </div>
                    </div>
                    </div>
                    )
                    }

                    export default ModalPopUp;