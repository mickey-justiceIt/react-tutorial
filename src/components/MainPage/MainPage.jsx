import React, { useEffect, useState } from "react";

import { imgs, products } from "../../mock/mock";

import PieChart from "../Charts/PieChart/PieChart";
import BarChart from "../Charts/BarChart/BarChart";
import LineChart from "../Charts/LineChart/LineChart";
import CreateModal from "../Modals/CreateModal/CreateModal";

import styles from "./MainPage.module.scss";

const MainPage = (props) => {
  const [hidden, setHidden] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const handleSubmit = () => {
    if (allProducts && allProducts.length === 0) {
      localStorage.setItem("products", JSON.stringify(products));
      setAllProducts(products);
    }
  };
  useEffect(() => {
    setAllProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  const openModal = () => {
    setHidden(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headWrapper}>
            <div className={styles.headWrapperTitle}>
              <h1>Sales statistics</h1>
              <p>Welcome to CRM dashboard</p>
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
          <div className={styles.mainWrap}>
            <div className={styles.saleDay}>
              <h2>Sales schedule by day</h2>
              <div className={styles.ovalDiagram}>
                <PieChart />
              </div>
            </div>

            <div className={styles.saleTotal}>
              <h2>Total products price</h2>
              <div className={styles.vectorDiagram}>
                <LineChart />
              </div>
            </div>

            <div className={styles.saleOverview}>
              <h2>Products overview</h2>
              <span>Graph sales for all days</span>
              <div className={styles.overviewDiagram}>
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateModal
        allProducts={allProducts}
        handleSubmit={handleSubmit}
        hidden={hidden}
        setHidden={setHidden}
      />
    </>
  );
};
export default MainPage;
