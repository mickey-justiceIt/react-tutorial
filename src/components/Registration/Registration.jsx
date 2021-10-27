import React from "react";

import { NavLink, Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { validate } from "../../validate/validate";

import styles from "./Registration.module.scss";

const Registration = ({ isReg, setIsReg, setIsLogin }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      company: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("CURRENT USER", JSON.stringify(values));
      localStorage.setItem("ISREG", JSON.stringify(true));
      localStorage.setItem("ISLOGIN", JSON.stringify(true));
    },
  });
  if (isReg) {
    return <Redirect to="/main-page" />;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.modalBox}>
            <h1>Create an account</h1>
            <form className={styles.formContainer}>
              <div className={styles.formColumn}>
                <div className={styles.inputBlock}>
                  <label htmlFor="firstName" className={styles.formItem}>
                    First name
                    <input
                      id="firstName"
                      name="firstName"
                      className={styles.formInput}
                      placeholder={"First name"}
                      type="text"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                  </label>
                  {formik.errors.firstName ? (
                    <div className={styles.errors}>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="lastName" className={styles.formItem}>
                    Last name
                    <input
                      id="lastName"
                      name="lastName"
                      className={styles.formInput}
                      placeholder="Last name"
                      type="text"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                  </label>
                  {formik.errors.lastName ? (
                    <div className={styles.errors}>
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="company" className={styles.formItem}>
                  Company name
                  <input
                    id="company"
                    name="company"
                    className={styles.formInput}
                    placeholder="Company Name"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.company}
                  />
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="email" className={styles.formItem}>
                  Email
                  <input
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Email"
                    type="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </label>
                {formik.errors.email ? (
                  <div className={styles.errors}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="password" className={styles.formItem}>
                  Enter Password
                  <input
                    id="password"
                    name="password"
                    className={styles.formInput}
                    placeholder="Password"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </label>
                {formik.errors.password ? (
                  <div className={styles.errors}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="repeatPassword" className={styles.formItem}>
                  Repeat Password
                  <input
                    id="repeatPassword"
                    name="repeatPassword"
                    className={styles.formInput}
                    placeholder="Repeat password"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.repeatPassword}
                  />
                </label>
                {formik.errors.password ? (
                  <div className={styles.errors}>{formik.errors.password}</div>
                ) : null}
              </div>
              <button onClick={formik.handleSubmit} className={styles.formBtn}>
                Create an account
              </button>
            </form>
            <div className={styles.formLink}>
              <span>Already have an account?</span>
              <span>
                <NavLink to={"/login"}>Log in</NavLink>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.heroWrapper}></div>
      </div>
    </>
  );
};

export default Registration;