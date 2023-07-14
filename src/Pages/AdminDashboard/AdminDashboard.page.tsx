import React from "react";
import Wrapper from "../../Components/Wrapper/Wrapper.component";
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
  return (
    <div>
      <Wrapper>
        <div className={styles.hero}></div>
        <h1 className="text-center text-2xl ">AdminDashboard</h1>
      </Wrapper>
    </div>
  );
}

export default AdminDashboard;
