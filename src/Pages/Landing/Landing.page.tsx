import React from "react";
import { Navbar } from "../../Components";
import styles from "./Landing.module.css";
import welcome from "../../assets/salt.png";
import meat from "../../assets/cj.png";
import { Fade, Bounce } from "react-awesome-reveal";

function Landing() {
  return (
    // container mx-auto px-4
    <div className={`${styles.fullscreen}`}>
      <Navbar />
      <div
        className={`${styles.full} lg:flex-row md:flex-row sm:flex-col xs:flex-col`}
      >
        {/* <Fade direction="up"> */}
        <div className="lg:w-2/5 flex flex-col sm:w-full xs:w-full xs:pt-20 xs:px-9 md:px-10 lg:pt-56 lg:px-24 ">
          <div className="flex lg:pb-8 md:pb-0 ">
            {" "}
            <h1
              className={`${styles.landing_header_h1}  sm:text-[80px] xs:text-[60px] md:text-[60px]  lg:text-[120px] `}
            >
              afrikan{" "}
            </h1>
            <span
              className={`${styles.k} sm:text-[80px] xs:text-[60px] md:text-[60px]  lg:text-[120px] `}
            >
              foods
            </span>
          </div>
          <h2
            className={`${styles.h2__opensans} md:text-[16px] xs:pb-4 md:pb-4 lg:pb-8  lg:text-[20px]`}
          >
            Fresh and tasty afrikan food.A pinch of passion in every dish,
            Relish, Savour, taste and enjoy every african ingredient in your
            meal.
          </h2>
          <div className="flex gap-4">
            <button
              className={`${styles.button1} text-white font-bold lg:py-6 lg:px-16 md:px-4 md:py-2 md:text-[16px] xs:px-4 xs:py-6 rounded lg:text-[20px]`}
            >
              Order Now
            </button>
            <h3
              className={`${styles.h3_price} text-5xl md:text-4xl xs:text-3xl`}
            >
              {" "}
              2000frs
            </h3>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade direction="down"> */}
        <div className={`w-3/5 xs:w-full sm:w-full `}>
          <div className={styles.welcome}>
            <img src={welcome} />
          </div>
        </div>
        {/* </Fade> */}
      </div>
      <div className={`${styles.second} flex`}>
        <div className="w-3/5 h-full flex justify-content-end">
          <div className="pt-72">
            <img
              src={meat}
              className={styles.img_shad}
              style={{ width: "100%", height: "55%" }}
            />
          </div>
        </div>

        <div className="w-2/5 h-full flex flex-col justify-center items-center px-24">
          <h3 className="text-2xl text-orange-500">About</h3>
          <h2>Food Is An Important part Of a Balance Diet</h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
