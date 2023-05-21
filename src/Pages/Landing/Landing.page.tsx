import React from "react";
import { Navbar } from "../../Components";
import styles from "./Landing.module.css";
import welcome from "../../assets/salt.png";

function Landing() {
  return (
    // container mx-auto px-4
    <div className={`${styles.fullscreen}`}>
      <Navbar />
      <div
        className={`${styles.full} lg:flex-row md:flex-col sm:flex-col xs:flex-col`}
      >
        <div className="w-2/5 flex flex-col  pt-56 px-24">
          <div className="flex pb-8">
            {" "}
            <h1
              className={`${styles.landing_header_h1}  sm:text-[80px] lg:text-[120px] `}
            >
              afrikan{" "}
            </h1>
            <span className={`${styles.k} sm:text-[80px] lg:text-[120px] `}>
              foods
            </span>
          </div>
          <h2 className={styles.h2__opensans}>
            Fresh and tasty afrikan food.A pinch of passion in every dish,
            Relish, Savour, taste and enjoy every african ingredient in your
            meal.
          </h2>
          <div className="flex gap-4">
            <button
              className={`${styles.button1} text-white font-bold py-6 px-16 rounded text-2xl`}
            >
              Order Now
            </button>
            <h3 className={styles.h3_price}> 2000frs</h3>
          </div>
        </div>
        <div className={`w-3/5 xs:w-full sm:w-full `}>
          <div className={styles.welcome}>
            <img src={welcome} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
