import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import FoodCardDash from "../../FoodCardDash/FoodCardDash.component";
import { FoodCardData } from "../../../Components/FoodCards/FoodCard";
import { BiPlus } from "react-icons/bi";
import Modal from "../../Modal/Modal.component";
import load from "../../../assets/cube.svg";
import {
  getPrivateFood,
  getPrivateFoodAsync,
} from "../../../features/foodSlice";
import { useDispatch } from "react-redux";
import CardOrder from "../../CardOrder/CardOrder.component";
type FillProps = {
  open: boolean;
};

function Home(props: FillProps) {
  const dispatch = useDispatch();
  const windowSidebar: any = window.innerWidth;
  const data = useSelector((state: any) => state.food?.data);
  console.log(data);
  useEffect(() => {
    dispatch(getPrivateFoodAsync());
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const admin: any = JSON.parse(localStorage.getItem("admin") || "");
  const adminName: string = admin.restaurant_name;
  const onModal: any = () => {
    setOpenModal(true);
  };
  const offModal: any = (num: boolean) => {
    setOpenModal(num);
  };
  return (
    <div
      className={`${
        windowSidebar > 450 ? (props.open ? "ml-64 " : "ml-20") : "ml-0"
      } `}
    >
      <Modal open={openModal} offModal={offModal} />
      <div className={`${styles} flex gap-4 bg-gray-200`}>
        <div
          className={`${
            props.open ? "lg:w-[65%]" : " lg:w-[69%]"
          } p-4 md:w-[100%] sm:w-[100%] xs:w-[100%] `}
        >
          <div className=" rounded-lg dark:border-gray-700 bg-gray-200">
            <div
              className={`${styles.back} flex items-left justify-left h-96 mb-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            >
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <h2 className="lg:text-2xl font-normal px-12 pt-12">
                  <h3 className={`${styles.wel} text-white text-3xl`}>
                    Welcome
                  </h3>{" "}
                  <p className={`${styles.resto_name} text-3xl`}>
                    {" "}
                    {adminName}
                  </p>
                </h2>
              </p>
            </div>
            <div className="grid grid-cols-3 w-full gap-4 mb- 4">
              <div
                className={`${styles.ham} flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-orange-800`}
              >
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div
                className={`${styles.gril} flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-orange-800`}
              >
                <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
              </div>

              <div
                className={`${styles.cream} flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-orange-800`}
              >
                <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
              </div>
            </div>
            <div
              className={`${props.open ? "p-5" : "p-10"} ${
                data.length == 0
                  ? "flex  justify-center items-center"
                  : "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
              }   mb-4 rounded bg-gray-50 dark:bg-white`}
            >
              {data.length > 0 ? (
                data.map((item: any, index: any) => (
                  <FoodCardDash
                    key={index}
                    item={item}
                    img={item.image}
                    title={item.title}
                    icon={item.icon}
                    icon2={item.icon2}
                    open={props.open}
                  />
                ))
              ) : (
                <div className=" h-screen flex justify-center items-center ">
                  <img src={load} style={{ width: "28%", height: "28%" }} />
                </div>
              )}
            </div>
            <div
              className={`${styles.plusColor} cursor-pointer fixed top-[85%] left-[65%] rounded-full bg-white w-[100px] h-[100px] flex justify-center items-center text-orange-400`}
              onClick={onModal}
            >
              <BiPlus style={{ fontSize: "50px" }} />
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-100 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen lg:w-[30%] lg:block md:hidden sm:hidden fixed left-[84rem]  dark:bg-white">
          <div className="pt-10 px-5">
            <h2 className="text-2xl font-bold">Current Order</h2>
          </div>
          <div className="flex flex-col h-screen p-5 rounded mb-5">
            <CardOrder />
            <CardOrder />
            <CardOrder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
