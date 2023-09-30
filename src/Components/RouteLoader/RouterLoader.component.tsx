import React from "react";
import load from "../../assets/cube.svg";
import styles from "./Loader.module.css";
// import load from "../../assert/load1.svg";

function RouterLoader() {
  return (
    <div
    className="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    
    <div className="fixed inset-0 bg-white transition-opacity"></div>

    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white-50 text-left  transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white-50 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="  flex flex-col justify-center items-center ">
                <img src={load} style={{ width: "28%", height: "26%" }} />
             <p className={`${styles.fontSec} font-semibold`}>   Loading...</p>
              </div>
          </div>
          </div>
          </div>
          </div>
          </div>  
  );
}

export default RouterLoader;
