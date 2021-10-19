import React, {useState} from 'react';
import styles from './PersonalCabinet.module.scss'
import {imgs}  from '../../mock/mock';
import ModalPopUp from "../ModalPopUp/ModalPopUp";

const PersonalCabinet = (props) => {
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
                            <h1>Personal Cabinet</h1>
                            <p>Information about your account</p>
                        </div>
                        <div onClick={openModal} className={styles.wrapperButton}>
                            <img src={imgs[0].createIcon} className={styles.buttonLogo} alt={'createIcon'}/>
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

export default PersonalCabinet;