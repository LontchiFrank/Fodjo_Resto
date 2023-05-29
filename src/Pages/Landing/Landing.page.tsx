import React from "react";
import { Navbar } from "../../Components";
import styles from "./Landing.module.css";
import welcome from "../../assets/salt.png";
import meat from "../../assets/cj.png";
import { FaPastafarianism } from "react-icons/fa";
import { WorkCardData } from "../../Components/WorkCards/WorkCard";
import WorkCard from "../../Components/WorkCards/WorkCard.component";

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
            className={`${styles.h2__opensans} md:text-[16px] xs:pb-4 md:pb-4 lg:pb-8  lg:text-[24px]`}
          >
            Fresh and tasty afrikan food.A pinch of passion in every dish,
            Relish, Savour, taste and enjoy every african ingredient in your
            meal.
          </h2>
          <div className="flex gap-4">
            <button
              className={`${styles.button1} bg-orange-400 text-white font-bold lg:py-6 lg:px-16 md:px-4 md:py-2 md:text-[16px] xs:px-4 xs:py-6 rounded lg:text-[20px]`}
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
        <div className={`w-3/5 xs:w-full sm:w-full `}>
          <div className={styles.welcome}>
            <img src={welcome} />
          </div>
        </div>
      </div>
      <div className={`${styles.carrySecond} flex flex-col`}>
        <div
          className={`${styles.second} lg:h-full md:h-[40%] flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse`}
        >
          <div className="lg:w-3/5  lg:h-screen md:h-96 sm:w-full xs:w-full lg:justify-content-end md:justify-content-end  sm:justify-content-center ">
            <div className="lg:pt-28 lg:px-28 md:pt-56 md:px-16  ">
              <img
                src={meat}
                className={styles.img_shad}
                style={{ width: "100%", height: "40%" }}
              />
            </div>
          </div>

          <div className="lg:w-2/5 lg:h-[25rem] md:h-96 flex flex-col  sm:px-10 xs:px-12  lg:pt-[20rem] lg:pr-20 md:pt-[20rem] md:pr-12">
            <h3
              className={`${styles.fontSec} lg:text-3xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
            >
              About
            </h3>
            <h2
              className={`${styles.fontSec} lg:text-4xl md:text-2xl font-bold lg:pb-8 md:pb-4 sm:pb-4 xs:pb-3`}
            >
              Food Is An Important Part Of A Balance Diet
            </h2>
            <p
              className={`${styles.fontSec} md:text-[12px] sm:text-[12px] xs:pb-4 md:pb-4 lg:pb-8 text-stone-950 lg:text-[20px]`}
            >
              A healthy diet rich in fruits, vegetables, whole grains and
              low-fat dairy can help to reduce your risk of heart disease by
              maintaining blood pressure and cholesterol levels. <br />
              <br /> High blood pressure and cholesterol can be a symptom of too
              much salt and saturated fats in your diet.
              <br />
              <br /> Eating a portion of oily fish - such as salmon and trout -
              each week can also help to lower your risk of developing heart
              disease. The high levels of omega-3 fatty acids in oily fish are
              good for heart health.
            </p>
            <div className="flex gap-4">
              <button
                className={`${styles.fontSec} bg-orange-400 text-white font-bold lg:py-4 lg:px-6 md:px-4 md:py-2 md:text-[16px] sm:text-[14px] xs:text-[9px] xs:px-4 xs:py-6 rounded-lg lg:text-[20px]`}
              >
                Learn More
              </button>
              <h3
                className={`${styles.h3_price} text-5xl md:text-4xl xs:text-3xl`}
              >
                {" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full flex-col flex items-center lg:pb-32 lg:px-16 lg:pt-16 xs:p-16 ">
          <h3
            className={`${styles.fontSec} lg:text-2xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            Work
          </h3>
          <h2
            className={`${styles.fontSec} lg:text-4xl md:text-2xl sm:text-2xl xs:text-2xl font-bold lg:pb-8 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            How It Works
          </h2>
          <div className="lg:px-[38rem]md:px-[29rem]">
            <p
              className={`${styles.fontSec} md:text-[12px] sm:text-[12px] xs:text-base xs:pb-4 md:pb-4 lg:pb-8 lg:text-center md:text-center sm:text-center xs:text-center lg:w-[50rem] md:w-[30rem]  text-stone-950 lg:text-[20px] `}
            >
              A healthy diet rich in fruits, vegetables, whole grains and
              low-fat dairy can help to reduce your risk of heart disease by
              maintaining blood pressure and cholesterol levels. <br />
            </p>
          </div>
          <div className="w-full h-96 px-32 pt-16 flex justify-center items-center gap-12 sm:flex-wrap xs:flex-wrap">
            {WorkCardData.map((item, index) => (
              <WorkCard titles={item.titles} icon={item.icon} des={item.des} />
            ))}
          </div>
        </div>
        <div className="h-full w-full flex-col flex items-center xs:p-16">
          <h3
            className={`${styles.fontSec} lg:text-2xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            Menu
          </h3>
          <h2
            className={`${styles.fontSec} lg:text-4xl md:text-2xl sm:text-2xl xs:text-2xl font-bold lg:pb-8 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            Explore Our Menu
          </h2>
          <div className="lg:px-[38rem]md:px-[29rem]">
            <p
              className={`${styles.fontSec} md:text-[12px] sm:text-[12px] xs:text-base xs:pb-4 md:pb-4 lg:pb-8 lg:text-center md:text-center sm:text-center xs:text-center lg:w-[50rem] md:w-[30rem]  text-stone-950 lg:text-[20px] `}
            >
              A healthy diet rich in fruits, vegetables, whole grains and
              low-fat dairy can help to reduce your risk of heart disease by
              maintaining blood pressure and cholesterol levels. <br />
            </p>
          </div>
        </div>
      </div>
      {/* <div> */}
      {/* <h3
          className={`${styles.fontSec} lg:text-3xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
        >
          Work
        </h3> */}
    </div>
  );
}

export default Landing;
