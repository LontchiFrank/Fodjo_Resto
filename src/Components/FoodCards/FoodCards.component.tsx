import React from "react";
import meat from "../../assets/a.jpg";
import styles from "./FoodCards.module.css";

interface FoodProps {
  img?: JSX.Element;
  title?: string;
}

function FoodCards({ img, title }: FoodProps) {
  return (
    <div>
      <div
        className={`${styles.foodCard} max-w-sm sm:w-full xs:w-full rounded-xl overflow-hidden`}
      >
        {img}
        <div className="px-6 py-4">
          <div className={`${styles.fontSec} font-bold text-xl mb-2`}>
            {title}
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}

export default FoodCards;
