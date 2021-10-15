import React from 'react';
import styles from './MainPage.module.scss'
import oval from '../../assets/elements/oval.png'
import vector from '../../assets/elements/vector.png'
import smallOvalIcon from '../../assets/logo/Ellipse 7.svg'
import overview from '../../assets/elements/overview.png'

const MainPage = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.headWrapper}>
                    <div className={styles.headWrapperTitle}>
                        <h1>Sales statistics</h1>
                        <p>Welcome to CRM dashboard</p>
                    </div>
                    <div className={styles.wrapperButton}>
                            <img className={styles.buttonLogo}/>
                            <p className={styles.buttonText}>Create a product</p>
                    </div>
                </div>
                <hr/>
                <div className={styles.mainWrap}>
                    <div className={styles.saleWrap}>
                        <div className={styles.saleSchedule}>
                            <div className={styles.saleDay}>
                                <h2>Sales schedule by day</h2>
                                <div className={styles.ovalDiagram}>
                                    <img src={oval} alt="oval"/>
                                    <ul className={styles.analyticList}>
                                        <li className={styles.analyticItem}>
                                            <img className={styles.ovalIcon} src={smallOvalIcon} alt=""/>
                                            <p>Auto goods</p>
                                        </li>
                                        <li className={styles.analyticItem}>
                                            <img src={smallOvalIcon} alt=""/>
                                            <p>Auto goods</p>
                                        </li>
                                        <li className={styles.analyticItem}>
                                            <img src={smallOvalIcon}  alt=""/>
                                            <p>Auto goods</p>
                                        </li>
                                        <li className={styles.analyticItem}>
                                            <img src={smallOvalIcon}  alt=""/>
                                            <p>Auto goods</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.saleTotal}>
                                    <h2>Total earned</h2>
                                    <div className={styles.vectorDiagram}>
                                        <img src={vector} alt="vector"/>
                                        <p>$106,000</p>
                                    </div>
                            </div>
                        </div>
                        <div className={styles.saleOverview}>
                            <h2>Sales overview</h2>
                            <p>Graph sales for all days</p>
                            <div className={styles.overviewDiagram}>
                                {/*<img src={overview} alt="overview"/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;