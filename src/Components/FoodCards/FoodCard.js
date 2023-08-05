import React from "react";
import meat from "../../assets/a.jpg";
import i from "../../assets/i.jpg";

import b from "../../assets/b.jpg";
import c from "../../assets/meats.png";
import e from "../../assets/e.jpg";
import g from "../../assets/3.jpg";
import { FaCartArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const FoodCardData = [
  {
    image: (
      <img className="w-full h-48" src={meat} alt="Sunset in the mountains" />
    ),
    title: "Fried Rice",
    icon: (
      <FaCartArrowDown className="text-white-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
    icon2: (
      <FaStar className="text-orange-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
  },
  {
    image: (
      <img
        className="w-full h-48"
        src={i}
        alt="Sunset in the mountains"
        // style={{ width: "100%", height: "30%" }}
      />
    ),
    title: "Hot Pot",
    icon: (
      <FaCartArrowDown className="text-white-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
    icon2: (
      <FaStar className="text-orange-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
  },
  {
    image: (
      <img className="w-full h-48" src={b} alt="Sunset in the mountains" />
    ),
    title: "Flaked Rice",
    icon: (
      <FaCartArrowDown className="text-white-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
    icon2: (
      <FaStar className="text-orange-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
  },
  {
    image: (
      <img className="w-full h-48" src={c} alt="Sunset in the mountains" />
    ),
    title: "Spirited Chicken ",
    icon: (
      <FaCartArrowDown className="text-white-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
    icon2: (
      <FaStar className="text-orange-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
  },
  {
    image: (
      <img className="w-full h-48" src={e} alt="Sunset in the mountains" />
    ),
    title: "Jollof Meat",
    icon: (
      <FaCartArrowDown className="text-white-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
    icon2: (
      <FaStar className="text-orange-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
  },
  {
    image: (
      <img className="w-full h-48" src={g} alt="Sunset in the mountains" />
    ),
    title: "Roast Sate",
    icon: (
      <FaCartArrowDown className="text-white-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
    icon2: (
      <FaStar className="text-orange-400 lg:text-[25px] md:text-[25px] xs:text-[25px]" />
    ),
  },
];
