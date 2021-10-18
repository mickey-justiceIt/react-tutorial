import React, {useState} from 'react';
import styles from './MyProducts.module.scss'
import mock  from '../mock';
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import TableChart from "../Charts/TableChart/TableChart";
import MyAwesomeTable from "../TableCharts";
import TableCharts from "../TableCharts";

const MyProducts = (props) => {
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
                            <h1>My Products</h1>
                            <p>Product table</p>
                        </div>
                        <div onClick={openModal} className={styles.wrapperButton}>
                            <img src={mock[0].createIcon} className={styles.buttonLogo} alt={'createIcon'}/>
                            <p className={styles.buttonText}>Create a product</p>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.mainWrap}>
                        <tr></tr>
                        {/*<TableCharts/>*/}
                        <TableChart/>
                    </div>
                </div>
            </div>
            <ModalPopUp hidden={hidden} setHidden={setHidden} />
            </>
    );

}

export default MyProducts;