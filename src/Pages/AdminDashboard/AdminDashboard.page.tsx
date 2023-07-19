import React, { useState } from "react";
import Wrapper from "../../Components/Wrapper/Wrapper.component";
import styles from "./AdminDashboard.module.css";
import control from "../../assets/control.png";
import Chart_fill from "../../assets/Chart_fill.png";
import Chat from "../../assets/Chat.png";
import User from "../../assets/User.png";
import Calendar from "../../assets/Calendar.png";
import Search from "../../assets/Search.png";
import Folder from "../../assets/Folder.png";
import Setting from "../../assets/Setting.png";
import logo from "../../assets/Calendar.png";
import Chart from "../../assets/Chart.png";
import Navbar from "../../Components/DashboardNavbar/Navbar.component";
import { MdDashboard } from "react-icons/md";
import { BsFillChatSquareFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { BsFolder } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

function AdminDashboard() {
  const [open, setOpen] = useState(true);
  const Menus: Object[] = [
    { title: "Dashboard", src: <MdDashboard /> },
    { title: "Inbox", src: <BsFillChatSquareFill /> },
    { title: "Accounts", src: <AiOutlineUser /> },
    { title: "Search", src: <BsSearch /> },
    { title: "Analytics", src: <GrAnalytics /> },
    { title: "Orders ", src: <BsFolder /> },
    { title: "Setting", src: <AiOutlineSetting /> },
  ];
  return (
    <div>
      <Wrapper>
        {/* <Navbar /> */}
        <div className="flex">
          <div
            className={` ${
              open ? "w-72" : "w-20 "
            } bg-slate-100 h-screen p-5  pt-8 relative duration-300`}
          >
            <div
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            >
              <FaChevronRight />
            </div>
            <div className="flex gap-x-4 items-center">
              <img
                src={logo}
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-black origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Designer
              </h1>
            </div>
            <ul className="pt-6">
              {Menus.map((Menu: any, index: any) => (
                <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  {/* <img src={`${Menu.src}`} /> */}
                  {Menu.src}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="h-screen flex-1 
          "
          >
            <h1 className="text-2xl font-semibold ">
              <Navbar />
              Home Page
            </h1>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default AdminDashboard;
