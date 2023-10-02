import React, { useEffect,useMemo,useState } from "react";
import styles from "./HomeComponents.module.css";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../ItemCate/Item.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import load from "../../../assets/cube.svg";
import FoodUserCard from "../../FoodUserCard/FoodUserCard.component";
import { getAllFoodAsync } from "../../../features/foodSlice";
import { useGetFoodsQuery } from "../../../services/apiFood";
import { myAlert } from "../../Alert/myAlert";
import { useGetCategoryQuery } from "../../../services/apiCategories";

type FillProps = {
  open: boolean;
};

function HomeComponent(props: FillProps) {
  const {data,isLoading,error,isFetching,isSuccess } =useGetFoodsQuery();
  const windowSidebar: any =useMemo(()=> window.innerWidth,[]);
  const dispatch = useDispatch();


  return (
    <div
      className={`${
        windowSidebar > 450
          ? props.open
            ? "ml-64  bg-gray-200 "
            : "ml-20  bg-gray-200"
          : "ml-0"
      } `}
    >
      <div className=" w-[100%] flex gap-4 ">
        <div
          className={`${
            props.open ? "lg:w-[65%] " : " lg:w-[69%]"
          } p-4  md:w-[100%] sm:w-[100%] xs:w-[100%] `}
        >
          <div className=" rounded-lg dark:border-gray-700 bg-gray-200">
            <div
              className={`${styles.hero} flex flex-col items-start justify-left h-80 mb-4 rounded bg-gray-50 dark:bg-gray-800`}
            >
              <p
                className={`${styles.fontSec} text-4xl font-bold ml-5 mt-12 text-white dark:text-white`}
              >
                Full In the stomach, Good for <br />
                your health
              </p>
              <p className="text-lg font-bold text-white ml-5 mt-3 ">
                Here we have listed short and long
                <br /> restaurant slogan ideas.You can pick any of
                <br /> them for your business.{" "}
              </p>
              <button
                className={`${styles.button1} ml-5 mt-3 bg-orange-400 text-white font-bold lg:py-4 lg:px-8 md:px-4 md:py-2 md:text-[12px] xs:px-4 xs:py-6 rounded lg:text-[16px]`}
              >
                Order Now
              </button>
            </div>
            <div className={`${styles.fontSec1} mt-3 text-left text-2xl`}>
              Categories{" "}
            </div>
         <Category/>

            <div
              className={`${props.open ? "p-5" : "p-10"} ${
                data?.length == 0
                  ? "flex  justify-center items-center"
                  : "grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1"
              }   mb-4 rounded bg-gray-50 dark:bg-white `}
            >
              {isLoading &&  <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      
      <div className="fixed inset-0 bg-white transition-opacity"></div>
  
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white-50 text-left  transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white-50 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="  flex flex-col justify-center items-center ">
                  <img src={load} style={{ width: "28%", height: "26%" }} />
               <p className={`${styles.fontSec} font-semibold`}>   Loading...</p>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>  
            
                }
                {error && <>{myAlert(false,'Something went wrong')}</> }
                {/* {isFetching&& <>{alert('Fetching')} </>} */}
                {isSuccess && (
                   
                    data?.map((item: any, index: any) => (
                      <FoodUserCard
                        key={index}
                        item={item}
                        img={item.image}
                        title={item.title}
                        icon={item.icon}
                        icon2={item.icon2}
                        open={props.open}
                      />
                    ))
                       
                ) }
             
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen lg:block lg:w-[35%]  md:hidden sm:hidden fixed left-[79rem] xl:left-[84rem] bg-white">
          <div className="flex items-center justify-center h-screen rounded "></div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

export const Category =()=>{
const {data,isLoading,isSuccess} =useGetCategoryQuery();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return(
    <div className={`${styles.slick}  gap-4 mb-4`}>
    <Slider {...settings}>
     {
      isLoading && <div>Loading</div>
     }
     {isSuccess&& (
      data?.map((item)=><Item item={item}/>)
     )}
    </Slider>
    {/* </Carousel> */}
  </div>
  )
}