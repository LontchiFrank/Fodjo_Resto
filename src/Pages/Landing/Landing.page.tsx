import React from "react";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={`${styles}container mx-auto px-4`}>
      <div className="flex bg-gray-700">
        <div className="w-64 "></div>
        <div className=" w-32 bg-gray-700"></div>
      </div>
    </div>
  );
}

export default Landing;
