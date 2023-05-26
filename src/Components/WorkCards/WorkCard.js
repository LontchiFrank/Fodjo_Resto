import React from "react";
import { MdFastfood } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";
import { GiChickenOven } from "react-icons/gi";
import { BsChatSquareText, BsBell } from "react-icons/bs";

export const WorkCardData = [
  {
    titles: "Pick Meals",
    name: "home",
    icon: (
      <GiChickenOven
        style={{ fontSize: "100px" }}
        className="text-orange-400"
      />
    ),
    des: "Choose your meals, from our diverse weekly menu. Find gluten or diary free,low carb & vergie options.",
  },
  {
    titles: "Choose How Often",
    name: "notifications",
    icon: (
      <MdFastfood style={{ fontSize: "100px" }} className="text-orange-400" />
    ),
    des: "Our teams or chef do the prep work no more chopping, measuring or sink full of dishes!",
  },

  {
    titles: "Fast Deliveries",
    name: "messages",
    icon: (
      <RiEBike2Fill style={{ fontSize: "100px" }} className="text-orange-400" />
    ),
    des: "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.",
  },
];
