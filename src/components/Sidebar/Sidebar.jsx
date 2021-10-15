import React from 'react';
import styles from './Sidebar.module.scss'
import Login from "../Login/Login";
import {NavLink} from "react-router-dom";
import logoText from '../../assets/logo/JUSTICE.svg'
import logoIcon from '../../assets/logo/CRM.svg'
const SideBar = (props) => {
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
                              <img  />
                              <a>Main page</a>
                          </li>
                      </NavLink>
                      <NavLink to={'/my-sales'}>
                          <li className={styles.navItem}>
                              <img />
                              <a>My products</a>
                          </li>
                      </NavLink>
                      <NavLink to={'/my-products'}>
                          <li className={styles.navItem}>
                              <img />
                              <a>My sales</a>
                          </li>
                      </NavLink>
                      <NavLink to={'/personal-cabinet'}>
                          <li className={styles.navItem}>
                              <img />
                              <a>Personal cabinet</a>
                          </li>
                      </NavLink>
                  </ul>

              </nav>
            <hr/>
                <div className={styles.login}>
                    <Login/>
                </div>
        </div>
    );
}

export default SideBar;