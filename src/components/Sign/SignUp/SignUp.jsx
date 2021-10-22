import React from "react";

import styles from "./SignUp.module.scss";

import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { validate } from "../../../validate/validate";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("users", JSON.stringify(values));
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.modalBox}>
          <h1>Create an account</h1>
          <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            <div className={styles.formColumn}>
              <label htmlFor="firstName" className={styles.formItem}>
                First name
                <input
                  className={styles.formInput}
                  placeholder="First name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </label>
              <label htmlFor="lastName" className={styles.formItem}>
                Last name
                <input
                  className={styles.formInput}
                  placeholder="Last name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </label>
            </div>
            <label htmlFor="company" className={styles.formItem}>
              Company name
              <input
                className={styles.formInput}
                placeholder="Company Name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.companyName}
              />
            </label>
            <label htmlFor="email" className={styles.formItem}>
              Email
              <input
                className={styles.formInput}
                placeholder="Email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </label>
            <label htmlFor="password" className={styles.formItem}>
              Enter New Password
              <input
                className={styles.formInput}
                placeholder="Password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </label>
            <label htmlFor="repeatPassword" className={styles.formItem}>
              Enter New Password
              <input
                className={styles.formInput}
                placeholder="Repeat password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
              />
            </label>

            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button type="submit" className={styles.formBtn}>
              Submit
            </button>
          </form>
          <p>Already have an account</p>
          <NavLink to={"signin"}>
            <span>Log in</span>
          </NavLink>
        </div>
      </div>
      <div className={styles.heroWrapper}></div>
    </div>
  );
};

export default SignUp;
