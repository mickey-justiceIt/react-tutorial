import React, { useState, useEffect } from "react";

import { NavLink, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import styles from "./Login.module.scss";
import { userLogin } from "../../services/services";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getToken = async (data) => {
    await userLogin(data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("USERID", response.data.userId);
        setIsLogin(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      getToken(values);
      localStorage.setItem("ISAUTH", JSON.stringify(true));
    },
  });
  if (isLogin) {
    return <Redirect to="/main-page" />;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.modalBox}>
            <h1>Sign in</h1>
            <form className={styles.modalForm}>
              <label htmlFor="email" className={styles.formItem}>
                Email
              </label>
              <input
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="Email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
              <label htmlFor="password" className={styles.formItem}>
                Password
              </label>
              <input
                id="password"
                name="password"
                className={styles.formInput}
                placeholder="Enter password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
              <button onClick={formik.handleSubmit} className={styles.formBtn}>
                Sign in
              </button>
            </form>
            <NavLink to={"registration"}>
              <p>Forgot a password</p>
            </NavLink>
          </div>
        </div>
        <div className={styles.heroWrapper}></div>
      </div>
    </>
  );
};
export default Login;
