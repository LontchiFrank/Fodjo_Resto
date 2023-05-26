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
    <div className={`${styles.work} flex-col justify-center items-center`}>
      <div> {icon}</div>
      <div>{titles} </div>
    </div>
  );
}

export default WorkCard;
