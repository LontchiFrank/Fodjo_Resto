import React from "react";
import styles from "./WorkCard.module.css";

interface WorkProps {
  titles?: String;
  name?: String;
  icon?: any;
  des?: String;
}

function WorkCard({ titles, name, icon, des }: WorkProps) {
  return (
    <div
      className={`${styles.work} lg:w-[20%] md:w-[40%] sm:w-full xs:w-full p-10 flex flex-col justify-center items-center`}
    >
      <div className="pb-12"> {icon}</div>
      <div
        className={`${styles.fontSec} lg:text-2xl md:text-lg sm:text-xl xs:text-2xl lg:font-bold md:font-semibold xs:font-bold pb-6`}
      >
        {titles}{" "}
      </div>
      <div className={`${styles.fontSec} text-center md:text-base xs:text-lg`}>
        {des}{" "}
      </div>
    </div>
  );
}

export default WorkCard;
