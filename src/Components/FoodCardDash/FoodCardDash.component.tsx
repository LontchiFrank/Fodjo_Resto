import React from "react";
import meat from "../../assets/a.jpg";
import styles from "./FoodCardDash.module.css";

interface FoodProps {
  img?: JSX.Element;
  title?: string;
  icon?: any;
  icon2?: any;
  open?: any;
}

// max-w-sm sm:w-full xs:w-full  rounded-xl overflow-hidden hover:translate-y-2 transition duration-300
function FoodCardDash({ img, title, open, icon, icon2 }: FoodProps) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${
          open ? "max-w-xs" : "max-w-[21rem]"
        } relative mb-8 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md`}
      >
        <a
          className="relative mx-3 mt-3 flex h-48 overflow-hidden rounded-xl"
          href="#"
        >
          {img}
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <div
              className={`${styles.fontSec} font-bold text-xl mb-2 text-orange-400`}
            >
              {title}
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla!
            </p>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900">
                1,500XAF
              </span>
              <span className="text-sm text-slate-900 line-through">
                2000frs
              </span>
            </p>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>

              <svg
                aria-hidden="true"
                className="h-5 w-5 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="mr-2 ml-3 rounded bg-orange-400 px-2.5 py-0.5 text-xs font-semibold">
                3.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCardDash;
