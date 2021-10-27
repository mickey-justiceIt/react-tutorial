import React from "react";

import styles from "./Sidebar.module.scss";

import { NavLink, Redirect } from "react-router-dom";

import { imgs } from "../../mock/mock";

const SideBar = ({ isLogin, setIsLogin, setIsReg, isReg }) => {
  const handleLogout = () => {
    setIsReg(localStorage.setItem("ISREG", JSON.stringify(false)));
    setIsLogin(localStorage.setItem("ISLOGIN", JSON.stringify(false)));
  };
  if (!(isLogin && isReg)) {
    return <Redirect to="/registration" />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.logoWrap}>
        <img src={imgs.logoText} className={styles.logoIconText} />
        <div className={styles.logoIconWrap}>
          <img src={imgs.logoIcon} className={styles.logoIcon} />
        </div>
      </div>
      <nav className={styles.navWrap}>
        <ul className={styles.navList}>
          <NavLink to={"/main-page"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.pageIcon}
                alt="page-icon"
              />
              <span className={styles.navText}>Main page</span>
            </li>
          </NavLink>
          <NavLink to={"/products"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.productsIcon}
                alt="product-icon"
              />
              <span className={styles.navText}>My products</span>
            </li>
          </NavLink>
          <NavLink to={"/sales"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.salesIcon}
                alt="sales-icon"
              />
              <span className={styles.navText}>My sales</span>
            </li>
          </NavLink>
          <NavLink to={"/personal-cabinet"}>
            <li className={styles.navItem}>
              <img
                className={styles.navIcon}
                src={imgs.personCabinetIcon}
                alt="cabinet-icon"
              />
              <span className={styles.navText}>Personal cabinet</span>
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className={styles.loginWrap}>
        <hr />
        <div onClick={handleLogout} className={styles.loginElement}>
          <img src={imgs.logout} alt="logout" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
