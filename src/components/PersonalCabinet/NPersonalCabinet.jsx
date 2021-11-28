import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { imgs, products } from "../../mock/mock";
import styles from "./PersonalCabinet.module.scss";
import { getUserDate, updateUser } from "../../services/services";
import CreateModal from "../Modals/CreateModal/CreateModal";

const NPersonalCabinet = () => {
  const userInfo = JSON.parse(localStorage.getItem("USERID"));
  const [allProducts, setAllProducts] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState({});
  const { register, reset, handleSubmit } = useForm({
    defaultValues: useMemo(() => {
      return {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        company: user?.company,
        address: user?.address || "No configured address",
        oldPassword: "",
        newPassword: "",
      };
    }, [user]),
  });
  useEffect(() => {
    reset(user);
  }, [user]);

  const openModal = () => {
    setHidden(true);
  };

  const handlerSubmit = () => {
    if (allProducts && allProducts.length === 0) {
      localStorage.setItem("products", JSON.stringify(products));
      setAllProducts(products);
    }
  };
  console.log("===>user", user);
  const getInfo = async (data) => {
    await getUserDate({ id: data })
      .then((response) => {
        setUser({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          company: response.data.company,
          address: response.data.address,
        });
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setAllProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  useEffect(() => {
    getInfo(userInfo);
  }, []);

  const onSubmit = (values) => {
    const updUser = {
      id: userInfo,
      firstName: values.firstName || user.firstName,
      lastName: values.lastName || user.lastName,
      email: values.email || user.email,
      address: values.address || user.address,
      company: values.company || user.company,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    updateUser(updUser);
  };

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
            <form
              className={styles.formContainer}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.formColumn}>
                <label htmlFor="firstName" className={styles.formItem}>
                  First name
                  <input
                    {...register("firstName")}
                    id="firstName"
                    name="firstName"
                    className={styles.formInput}
                    placeholder="Enter First name"
                    type="text"
                  />
                </label>
                <label htmlFor="lastName" className={styles.formItem}>
                  Last name
                  <input
                    {...register("lastName")}
                    id="lastName"
                    name="lastName"
                    className={styles.formInput}
                    placeholder="Enter Last name"
                    type="text"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <label htmlFor="company" className={styles.formItem}>
                  Company name
                  <input
                    {...register("company")}
                    id="company"
                    name="company"
                    className={styles.formInput}
                    placeholder="Company Name"
                    type="text"
                  />
                </label>
                <label className={styles.formItem}>
                  Company email
                  <input
                    {...register("email")}
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Company email"
                    type="email"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <label htmlFor="address" className={styles.formItem}>
                  Address
                  <input
                    {...register("address")}
                    id="address"
                    name="address"
                    className={styles.formInput}
                    placeholder="Enter address"
                    type="text"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <label htmlFor="oldPassword" className={styles.formItem}>
                  Enter Old Password
                  <input
                    {...register("oldPassword")}
                    id="oldPassword"
                    name="oldPassword"
                    className={styles.formInput}
                    placeholder="Enter password"
                    type="password"
                  />
                </label>
                <label htmlFor="newPassword" className={styles.formItem}>
                  Enter New Password
                  <input
                    {...register("newPassword")}
                    id="newPassword"
                    name="newPassword"
                    className={styles.formInput}
                    placeholder="Enter a new password"
                    type="password"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <button className={styles.formBtn}>Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CreateModal
        hidden={hidden}
        setHidden={setHidden}
        allProducts={allProducts}
        handleSubmit={handlerSubmit}
      />
    </>
  );
};

export default NPersonalCabinet;
