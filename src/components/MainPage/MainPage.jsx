import React, {useState} from 'react';
import styles from './MainPage.module.scss'
import mock from '../mock';
import ModalPopUp from '../../components/ModalPopUp/ModalPopUp';
import PieChart from "../Charts/PieChart/PieChart";


const MainPage = (props) => {

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
                            <h1>Sales statistics</h1>
                            <p>Welcome to CRM dashboard</p>
                        </div>
                        <div onClick={openModal} className={styles.wrapperButton}>
                            <img src={mock[0].createIcon} className={styles.buttonLogo} alt={'createIcon'}/>
                            <p className={styles.buttonText}>Create a product</p>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.mainWrap}>
                        <div className={styles.saleDay}>
                            {/*<h2>Sales schedule by day</h2>*/}
                            <div className={styles.ovalDiagram}>
                                <PieChart/>
                                {/*<img src={mock[0].oval} alt="" />*/}
                                <ul className={styles.analyticList}>
                                    <li className={styles.analyticItem}>
                                        <img className={styles.ovalIcon} src={mock[0].smallOvalIcon} alt="analytic"/>
                                        <p>Auto goods</p>
                                    </li>
                                    <li className={styles.analyticItem}>
                                        <img src={mock[0].smallOvalIcon} alt=""/>
                                        <p>Auto goods</p>
                                    </li>

                                    <li className={styles.analyticItem}>
                                        <img src={mock[0].smallOvalIcon} alt=""/>
                                        <p>Auto goods</p>
                                    </li>

                                    <li className={styles.analyticItem}>
                                        <img src={mock[0].smallOvalIcon} alt=""/>
                                        <p>Auto goods</p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className={styles.saleTotal}>
                            <h2>Total earned</h2>
                            <div className={styles.vectorDiagram}>
                                <img src={mock[0].vector} alt="vector"/>
                                <p>$106,000</p>
                            </div>
                        </div>

                        <div className={styles.saleOverview}>
                            {/* <h2>Sales overview</h2>
                            <p>Graph sales for all days</p> */}
                            <div className={styles.overviewDiagram}>
                                <img src={mock[0].overview} alt="overview"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalPopUp hidden={hidden} setHidden={setHidden} />
        </>
    );

}
export default MainPage;