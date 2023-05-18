import React from "react";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={`${styles}container mx-auto px-4`}>
      <div className="flex">
        <div className="w-64"></div>
        <div className="w-32"></div>
      </div>
    </div>
  );
}

export default Landing;
