import React, { Component, useState } from "react";
import Wrapper from "../../Components/Wrapper/Wrapper.component";
import logo from "../../assets/Calendar.png";
import Navbar from "../../Components/DashboardNavbar/Navbar.component";
import { GoHome } from "react-icons/go";
import { BsFillChatSquareFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { BsFolder } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { Home, Profile, Search, Analytics, Orders } from "../../Components";
import { subComponentNames } from "../../Components/SubPages/index";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function AdminDashboard() {
  const [currentComponent, setCurrentComponent] = useState(
    subComponentNames.HOME
  );
  const [open, setOpen] = useState(true);
  const [displaySide, setDisplaySide] = useState(false);
  const handleDisplaySide: any = () => {
    setDisplaySide(!displaySide);
  };
  const Menus: Object[] = [
    {
      title: "Home",
      src: <GoHome style={{ fontSize: "22px" }} />,
    },
    {
      title: "Search",
      src: <BsSearch style={{ fontSize: "22px" }} />,
    },
    {
      title: "Orders",
      src: <BsFolder style={{ fontSize: "22px" }} />,
    },
    {
      title: "Profile",
      src: <AiOutlineUser style={{ fontSize: "22px" }} />,
    },
    {
      title: "Analytics",
      src: <GrAnalytics style={{ fontSize: "22px" }} />,
    },
  ];
  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case subComponentNames.HOME:
        return <Home open={open} />;
      case subComponentNames.SEARCH:
        return <Search open={open} />;
      case subComponentNames.ORDERS:
        console.log(currentComponent, "hello");
        return <Orders open={open} />;
      case subComponentNames.PROFILE:
        return <Profile open={open} />;
      case subComponentNames.ANALYTICS:
        return <Analytics open={open} />;
    }
  };

  const subPageChangeHandler = (item: string) => {
    // console.log(item);
    setCurrentComponent(item);
  };

  const windowSidebar: any = window.innerWidth;
  return (
    <div>
      <Wrapper>
        <div className={`${windowSidebar < 550 ? " flex-col" : "flex"} `}>
          {windowSidebar < 550 ? (
            <div onClick={handleDisplaySide}>
              {displaySide ? (
                <GrClose className="cursor-pointer" />
              ) : (
                <BiMenu
                  className="cursor-pointer"
                  style={{ fontSize: "22px" }}
                />
              )}
              {displaySide ? (
                <div
                  className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <a
                      href="#"
                      className="flex  text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Home <GoHome className="ml-2" />
                    </a>
                    <a
                      href="#"
                      className="flex text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-1"
                    >
                      Search <BsSearch className="ml-2" />
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="flex text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-2"
                    >
                      Orders <BsFolder className="ml-2" />
                    </a>
                    <a
                      href="#"
                      className="flex text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Profile <AiOutlineUser className="ml-2" />
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="flex text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-4"
                    >
                      Analytics <GrAnalytics className="ml-2" />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="fixed">
              <div
                className={` ${
                  open ? "w-64" : "w-20 "
                }  bg-white h-screen p-5  pt-8 relative  duration-300 `}
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
                      style={{
                        color: currentComponent.includes(Menu.title)
                          ? "#df4120"
                          : "black",
                      }}
                      onClick={() => subPageChangeHandler(Menu.title)}
                      className={`flex
                   
                      rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                    >
                      {Menu.src}
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200`}
                      >
                        <h2 className="font-semibold"> {Menu.title}</h2>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className=" w-[100%]">
            <div className="">
              {/* <Navbar open={open} /> */}
              <div>{renderCurrentComponent()}</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default AdminDashboard;
