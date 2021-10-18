import React from 'react';
import styles from './Sidebar.module.scss'
import Login from "../Login/Login";
import {NavLink} from "react-router-dom";
import logoText from '../../assets/logo/JUSTICE.svg'
import logoIcon from '../../assets/logo/CRM.svg'
import pageIcon from '../../assets/logo/home.svg'
import productsIcon from '../../assets/logo/products.svg'
import salesIcon from '../../assets/logo/sales.svg'
import personCabinetIcon from '../../assets/logo/user.svg'
import { useHistory } from "react-router-dom";

const SideBar = (props) => {

//     let history = useHistory();
//
// history    function handleClick() {
//         history.push("/home");
//     }
    return (
        <div className={styles.container}>
            <div className={styles.logoWrap}>

                <img src={logoText} className={styles.logoIconText}/>

                <div className={styles.logoIconWrap}>

                    <img src={logoIcon} className={styles.logoIcon} />
                </div>

            </div>

            <nav className={styles.navWrap}>
                <ul className={styles.navList}>
                    <NavLink to={'/main-page'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={pageIcon} alt='page-icon'/>
                            <a className={styles.navText}>Main page</a>
                        </li>
                    </NavLink>

                    <NavLink to={'/products'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={productsIcon} alt='product-icon' />
                            <a className={styles.navText}>My products</a>
                        </li>
                    </NavLink>

                    <NavLink to={'/sales'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={salesIcon} alt='sales-icon' />
                            <a className={styles.navText}>My sales</a>
                        </li>
                    </NavLink>

                    <NavLink to={'/personal-cabinet'}>
                        <li className={styles.navItem}>
                            <img className={styles.navIcon} src={personCabinetIcon} alt='cabinet-icon' />
                            <a className={styles.navText}>Personal cabinet</a>
                        </li>
                    </NavLink>
                </ul>
            </nav>
            <div className={styles.loginWrap}>
                <hr/>
                <div className={styles.loginElement}><Login/></div>
            </div>
        </div>
    );
}

export default SideBar;