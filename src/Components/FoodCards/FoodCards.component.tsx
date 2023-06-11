import React from "react";
import meat from "../../assets/a.jpg";
import styles from "./FoodCards.module.css";

interface FoodProps {
  img?: JSX.Element;
  title?: string;
  icon?: any;
  icon2: any;
}

function FoodCards({ img, title, icon, icon2 }: FoodProps) {
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
        <div className="px-6 pt-4 pb-6 flex justify-between">
          <div>
            <button className="bg-orange-400  hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
              {icon}
            </button>
          </div>
          <div className="flex">
            <p>{icon2} </p>
            <p>{icon2} </p>
            <p>{icon2} </p>
            <p>{icon2} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCards;
