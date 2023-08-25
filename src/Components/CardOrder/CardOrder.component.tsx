import React from "react";
import { BsFilePlusFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import styles from "./CardOrder.module.css";

function CardOrder() {
  return (
    <div className=" ">
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg md:flex-row"
      >
        <img
          className=" w-full rounded-t-lg h-32 md:h-28 md:w-32 md:rounded-none md:rounded-l-lg"
          src="https://img.freepik.com/free-photo/chicken-nuggets-kfc-style-with-french-fries-mayonnaise-ketchup-vegetable-salad_114579-907.jpg?t=st=1692806655~exp=1692807255~hmac=aca475dec4b263fcab91351784c2345becf54169e5c3b930503c83ed5926280c"
          alt=""
        />
        <div className="flex flex-col w-[100%]">
          <div className="flex flex-col justify-between pt-3 pl-3 ">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Fries and Chicken
            </h5>
            <p className="mb-1 font-bold text-xl text-orange-700 m-0 p-0">
              {" "}
              4000XAF
            </p>
            <p className="mb-1 font-bold text-sm text-green-800 m-0 p-0">
              {" "}
              Paid
            </p>
          </div>
          <div className="flex justify-between px-2">
            {" "}
            <p className="mb-1 flex font-bold text-md text-black m-0 p-0">
              <BsFilePlusFill
                style={{ fontSize: "22px" }}
                className="text-orange-400"
              />
              3 plates{" "}
            </p>
            <div className="rounded-full bg-orange-100 p-2 cursor-pointer hover:bg-orange-200">
              <FaRegEye
                style={{ fontSize: "22px" }}
                className="text-orange-700"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardOrder;
