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
      className={`${styles.work} p-10 flex flex-col justify-center items-center`}
    >
      <div className="pb-12"> {icon}</div>
      <div className={`${styles.fontSec} text-2xl font-bold pb-6`}>
        {titles}{" "}
      </div>
      <div className={`${styles.fontSec} text-center`}>{des} </div>
    </div>
  );
}

export default WorkCard;
