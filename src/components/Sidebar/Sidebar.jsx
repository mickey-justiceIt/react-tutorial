import React from 'react';
import styles from './Sidebar.module.scss'
import {NavLink, Redirect} from "react-router-dom";

import {imgs} from "../../mock/mock";

const SideBar = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.logoWrap}>

                <img src={imgs[0].logoText} className={styles.logoIconText}/>

                <div className={styles.logoIconWrap}>

                    <img src={imgs[0].logoIcon} className={styles.logoIcon} />
                </div>

            </div>

            <nav className={styles.navWrap}>
                <ul className={styles.navList}>
                    <NavLink to={'/main-page'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={imgs[0].pageIcon} alt='page-icon'/>
                            <a className={styles.navText}>Main page</a>
                        </li>
                    </NavLink>

                    <NavLink to={'/products'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={imgs[0].productsIcon} alt='product-icon' />
                            <a className={styles.navText}>My products</a>
                        </li>
                    </NavLink>

                    <NavLink to={'/sales'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={imgs[0].salesIcon} alt='sales-icon' />
                            <a className={styles.navText}>My sales</a>
                        </li>
                    </NavLink>

                    <NavLink to={'/personal-cabinet'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={imgs[0].personCabinetIcon} alt='cabinet-icon' />
                            <a className={styles.navText}>Personal cabinet</a>
                        </li>
                    </NavLink>
                </ul>
            </nav>
            <div className={styles.loginWrap}>
                <hr/>
                <div className={styles.loginElement}>
                    <Redirect to={'sign-in'} pa/>
                </div>
            </div>
        </div>
    );
}

export default SideBar;