import React, {useState} from 'react';
import styles from './MySales.module.scss'
import {imgs}  from '../../mock/mock';
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import ProductItem from "../MyProducts/ProductItem/Productitem";

const MySales = (props) => {
    const [hidden, setHidden] = useState(false);
    const openModal = () => {
        setHidden(true)
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.headWrapper}>
                        <div className={styles.headWrapperTitle}>
                            <h1>My sales</h1>
                            <p>Sales table</p>
                        </div>

                        <div onClick={openModal} className={styles.wrapperButton}>
                            <img src={imgs[0].createIcon} className={styles.buttonLogo} alt={'createIcon'}/>
                            <p className={styles.buttonText}>Create a product</p>
                        </div>

                    </div>

                    <div>
                        <div className={styles.productMenu}>
                            <div className={styles.productItem}></div>
                        </div>

                        <div className={styles.productsListMenus}>
                            <div className={styles.productListMenu}>Product Name</div>
                            <div className={styles.productListMenu}>Store</div>
                            <div className={styles.productListMenu}>Address</div>
                            <div className={styles.productListMenu}>Category</div>
                            <div className={styles.productListMenu}>Creation Date</div>
                            <div className={styles.productListMenu}>Price</div>
                            <div className={styles.productListMenu}>Sold item</div>
                            <div className={styles.productListMenu}>Weight/Volume</div>
                            <div className={styles.productListMenu}>Last sale</div>
                        </div>


                    </div>
                </div>
            </div>
            <ModalPopUp hidden={hidden} setHidden={setHidden} />
        </>

    );


}

export default MySales;