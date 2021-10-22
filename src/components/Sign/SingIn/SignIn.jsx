import React from "react";

import styles from "./SignIn.module.scss";

import { Formik } from "formik";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.modalBox}>
          <h1>Sign in</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              localStorage.setItem("user", JSON.stringify(values));
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={styles.modalForm} onSubmit={handleSubmit}>
                <input
                  className={styles.formInput}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  className={styles.formInput}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button
                  className={styles.formBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
          <NavLink to={"signup"}>
            <p>Forgot a password</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
