import React from "react";
import styles from "./FoodUserCard.module.css";

interface FoodProps {
  img?: JSX.Element;
  item: any;
  title?: string;
  icon?: any;
  icon2?: any;
  open?: any;
}

function FoodUserCard({ img, title, open, item, icon, icon2 }: FoodProps) {
  return (
    <div
      className={`${
        open ? "max-w-xs" : "max-w-[21rem]"
      } relative mb-8 flex  w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md`}
    >
      {/* <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img className="object-cover" src={item.image} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-green-700 px-2 text-center text-sm font-medium text-white">
          Open
        </span>
      </a> */}
      <a
        className="relative mx-3 mt-3 flex h-56 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="w-full h-56"
          src={item.image}
          alt="Sunset in the mountains"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-green-700 px-2 text-center text-sm font-medium text-white">
          Open
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5
            className={`${styles.fontSec} text-xl tracking-tight text-orange-600`}
          >
            {item.name}
          </h5>
        </a>
        <p >
          <h5
            className={` text-sm tracking-tight text-black`}
          >
            {item.desc}
          </h5>
        </p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {item.price}
            </span>
            <span className="text-sm text-slate-900 ">XAF</span>
          </p>
          <div className="flex items-center">
           
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default FoodUserCard;
