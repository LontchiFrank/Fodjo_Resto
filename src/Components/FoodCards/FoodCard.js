import React from "react";
import meat from "../../assets/a.jpg";
import f from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/meats.png";
import e from "../../assets/e.jpg";
import g from "../../assets/3.jpg";
import { FaCartArrowDown } from "react-icons/fa";

export const FoodCardData = [
  {
    image: <img className="w-full" src={meat} alt="Sunset in the mountains" />,
    title: "Fried Rice",
    icon: (
      <FaCartArrowDown className="text-orange-400 lg:text-[100px] md:text-[80px] xs:text-[80px]" />
    ),
  },
  {
    image: <img className="w-full" src={f} alt="Sunset in the mountains" />,
    title: "Hot Pot",
    icon: (
      <FaCartArrowDown className="text-orange-400 lg:text-[100px] md:text-[80px] xs:text-[80px]" />
    ),
  },
  {
    image: <img className="w-full" src={b} alt="Sunset in the mountains" />,
    title: "Flaked Rice",
    icon: (
      <FaCartArrowDown className="text-orange-400 lg:text-[100px] md:text-[80px] xs:text-[80px]" />
    ),
  },
  {
    image: <img className="w-full" src={c} alt="Sunset in the mountains" />,
    title: "Spirited Chicken ",
    icon: (
      <FaCartArrowDown className="text-orange-400 lg:text-[100px] md:text-[80px] xs:text-[80px]" />
    ),
  },
  {
    image: <img className="w-full" src={e} alt="Sunset in the mountains" />,
    title: "Jollof Meat",
    icon: (
      <FaCartArrowDown className="text-orange-400 lg:text-[100px] md:text-[80px] xs:text-[80px]" />
    ),
  },
  {
    image: <img className="w-full" src={g} alt="Sunset in the mountains" />,
    title: "Roast Sate",
    icon: (
      <FaCartArrowDown className="text-orange-400 lg:text-[100px] md:text-[80px] xs:text-[80px]" />
    ),
  },
];
