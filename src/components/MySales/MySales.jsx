import React, {useState} from 'react';
import styles from './MySales.module.scss'
import mock  from '../mock';
import ModalPopUp from "../ModalPopUp/ModalPopUp";

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
                            <h1>My Sales</h1>
                            <p>Sales Table</p>
                        </div>
                        <div onClick={openModal} className={styles.wrapperButton}>
                            <img src={mock[0].createIcon} className={styles.buttonLogo} alt={'createIcon'}/>
                            <p className={styles.buttonText}>Create a product</p>
                        </div>
                    </div>
                    <hr/>
                    {/*<div className={styles.mainWrap}> </div>*/}
                </div>
            </div>
            <ModalPopUp hidden={hidden} setHidden={setHidden} />
        </>
    );

}

export default MySales;