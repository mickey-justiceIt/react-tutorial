import React, { useState, useEffect } from "react";

import { imgs, products } from "../../mock/mock";

import CreateModal from "../Modals/CreateModal/CreateModal";
import { useFormik } from "formik";
import {cabinetValidate} from "../../validate/validate";

import styles from "./PersonalCabinet.module.scss";
import {getUserDate, updateUser} from "../../services/services";

const PersonalCabinet = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [user,setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address: "",
    oldPassword: "",
    newPassword: ""
  })

  const openModal = () => {
    setHidden(true);
  };

  const handleSubmit = () => {
    if (allProducts && allProducts.length === 0) {
      localStorage.setItem("products", JSON.stringify(products));
      setAllProducts(products);
    }
  };

  const userInfo = JSON.parse(localStorage.getItem("USERID"));

  const getInfo =  async (data) => {
      await getUserDate(data)
          .then(response =>  {
            setUser ({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              email: response.data.email,
              company: response.data.company,
              address: response.data.address,
            })
          }).catch(e => console.log(e))
  }

  useEffect(() => {
    setAllProducts(JSON.parse(localStorage.getItem("products")));

  }, []);
  useEffect(() => {
    getInfo(userInfo)
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      company: user.company,
      oldPassword: "",
      newPassword: "",
      address: user.address || "No configured address",

    },
    cabinetValidate,
    onSubmit: (values) => {
      const updUser = {
            firstName: values.firstName || user.firstName,
            lastName: values.lastName || user.lastName,
            email: values.email || user.email,
            password:
                values.oldPassword === user.password
                    ? values.newPassword
                    : userInfo.password,
            address: values.address || "No configured address",
            company: values.company || user.company,
          }
          updateUser({
            id: userInfo,
            data:updUser
          })

    },
  });
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
                <img
                    src={imgs.createIcon}
                    className={styles.buttonLogo}
                    alt={"createIcon"}
                />
                <span className={styles.buttonText}>Create a product</span>
              </div>
            </div>
            <hr />
            <div>
              <form className={styles.formContainer} action="submit">
                <div className={styles.formColumn}>
                  <label htmlFor="firstName" className={styles.formItem}>
                    First name
                    <input
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className={styles.formInput}
                        placeholder="Enter First name"
                        type="text"
                    />
                    {formik.errors.firstName ? (
                        <div className={styles.errors}>
                          {formik.errors.firstName}
                        </div>
                    ) : null}
                  </label>
                  <label htmlFor="lastName" className={styles.formItem}>
                    Last name
                    <input
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className={styles.formInput}
                        placeholder="Enter Last name"
                        type="text"
                    />
                    {formik.errors.lastName ? (
                        <div className={styles.errors}>
                          {formik.errors.lastName}
                        </div>
                    ) : null}
                  </label>
                </div>
                <div className={styles.formColumn}>
                  <label htmlFor="company" className={styles.formItem}>
                    Company name
                    <input
                        id="company"
                        name="company"
                        className={styles.formInput}
                        placeholder="Company Name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.company}
                    />
                  </label>
                  <label className={styles.formItem}>
                    Company email
                    <input
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={styles.formInput}
                        placeholder="Company email"
                        type="email"
                    />
                    {formik.errors.email ? (
                        <div className={styles.errors}>{formik.errors.email}</div>
                    ) : null}
                  </label>
                </div>
                <div className={styles.formColumn}>
                  <label htmlFor="address" className={styles.formItem}>
                    Address
                    <input
                        id="address"
                        name="address"
                        value={formik.values.address}
                        className={styles.formInput}
                        placeholder="Enter address"
                        type="text"
                        onChange={formik.handleChange}
                    />
                  </label>
                </div>
                <div className={styles.formColumn}>
                  <label htmlFor="oldPassword" className={styles.formItem}>
                    Enter Old Password
                    <input
                        id="oldPassword"
                        name="oldPassword"
                        onChange={formik.handleChange}
                        value={formik.values.oldPassword}
                        className={styles.formInput}
                        placeholder="Enter password"
                        type="password"
                    />
                    {formik.errors.oldPassword ? (
                        <div className={styles.errors}>
                          {formik.errors.oldPassword}
                        </div>
                    ) : null}
                  </label>
                  <label htmlFor="newPassword" className={styles.formItem}>
                    Enter New Password
                    <input
                        id="newPassword"
                        name="newPassword"
                        onChange={formik.handleChange}
                        value={formik.values.newPassword}
                        className={styles.formInput}
                        placeholder="Enter a new password"
                        type="password"
                    />
                    {formik.errors.newPassword ? (
                        <div className={styles.errors}>
                          {formik.errors.newPassword}
                        </div>
                    ) : null}
                  </label>
                </div>
                <div className={styles.formColumn}>
                  <button
                      onClick={formik.handleSubmit}
                      className={styles.formBtn}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <CreateModal
            hidden={hidden}
            setHidden={setHidden}
            allProducts={allProducts}
            handleSubmit={handleSubmit}
        />
      </>
  );
};

export default PersonalCabinet;