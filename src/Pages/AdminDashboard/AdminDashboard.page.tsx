import React, { useState } from "react";
import Wrapper from "../../Components/Wrapper/Wrapper.component";
import logo from "../../assets/Calendar.png";
import Navbar from "../../Components/DashboardNavbar/Navbar.component";
import { MdDashboard } from "react-icons/md";
import { BsFillChatSquareFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { BsFolder } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { Home, Profile, Search, Analytics, Orders } from "../../Components";
import { subComponentNames } from "../../Components/SubPages/index";

function AdminDashboard() {
  const [currentComponent, setCurrentComponent] = useState(
    subComponentNames.HOME
  );
  const [open, setOpen] = useState(true);
  const Menus: Object[] = [
    { title: "Home", src: <MdDashboard /> },
    { title: "Search", src: <BsSearch /> },
    { title: "Orders", src: <BsFolder /> },
    { title: "Profile", src: <AiOutlineUser /> },
    { title: "Analytics", src: <GrAnalytics /> },
  ];
  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case subComponentNames.HOME:
        return <Home open={open} />;
      case subComponentNames.SEARCH:
        return <Search />;
      case subComponentNames.ORDERS:
        console.log(currentComponent, "hello");
        return <Orders />;
      case subComponentNames.PROFILE:
        return <Profile />;
      case subComponentNames.ANALYTICS:
        return <Analytics />;
    }
  };

  const subPageChangeHandler = (item: string) => {
    console.log(item);
    setCurrentComponent(item);
  };

  const windowSidebar: any = window.innerWidth;
  console.log(windowSidebar);
  return (
    <div>
      <Wrapper>
        {/* <Navbar /> */}
        <div className={`${windowSidebar < 450 ? "flex flex-col" : "flex"} `}>
          {windowSidebar < 450 ? (
            <BiMenu />
          ) : (
            <div className="fixed">
              <div
                className={` ${
                  open ? "w-64" : "w-20 "
                }  bg-orange-100 h-screen p-5  pt-8 relative  duration-300 `}
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
                      onClick={() => subPageChangeHandler(Menu.title)}
                      className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                    >
                      {Menu.src}
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200`}
                      >
                        {Menu.title}
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
