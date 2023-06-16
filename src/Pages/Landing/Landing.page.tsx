import React from "react";
import { FoodCards, Navbar } from "../../Components";
import styles from "./Landing.module.css";
import welcome from "../../assets/salt.png";
import meat from "../../assets/cj.png";
import { FaPastafarianism } from "react-icons/fa";
import { WorkCardData } from "../../Components/WorkCards/WorkCard";
import WorkCard from "../../Components/WorkCards/WorkCard.component";
import { FoodCardData } from "../../Components/FoodCards/FoodCard";

function Landing() {
  return (
    // container mx-auto px-4
    <div className={`${styles.fullscreen}`}>
      <Navbar />
      <div
        className={`${styles.full} lg:flex-row md:flex-row sm:flex-col xs:flex-col`}
      >
        <div className="lg:w-2/5 flex flex-col sm:w-full xs:w-full xs:pt-20 xs:px-9 md:px-10 lg:pt-56 lg:px-24 ">
          <div className="flex lg:pb-8 md:pb-0 ">
            {" "}
            <h1
              className={`${styles.landing_header_h1}  sm:text-[80px] xs:text-[60px] md:text-[60px]  lg:text-[120px] `}
            >
              afrikan{" "}
            </h1>
            <span
              className={`${styles.k} sm:text-[80px] xs:text-[60px] md:text-[60px]  lg:text-[120px] `}
            >
              foods
            </span>
          </div>
          <h2
            className={`${styles.h2__opensans} md:text-[16px] xs:pb-4 md:pb-4 lg:pb-8  lg:text-[24px]`}
          >
            Fresh and tasty afrikan food.A pinch of passion in every dish,
            Relish, Savour, taste and enjoy every african ingredient in your
            meal.
          </h2>
          <div className="flex gap-4">
            <button
              className={`${styles.button1} bg-orange-400 text-white font-bold lg:py-6 lg:px-16 md:px-4 md:py-2 md:text-[16px] xs:px-4 xs:py-6 rounded lg:text-[20px]`}
            >
              Order Now
            </button>
            <h3
              className={`${styles.h3_price} text-5xl md:text-4xl xs:text-3xl`}
            >
              {" "}
              2000frs
            </h3>
          </div>
        </div>
        <div className={`w-3/5 xs:w-full sm:w-full `}>
          <div className={styles.welcome}>
            <img src={welcome} />
          </div>
        </div>
      </div>
      <div className={`${styles.carrySecond} flex flex-col`}>
        <div
          className={`${styles.second} lg:h-[130%] flex lg:flex-row md:flex-row  sm:flex-col-reverse xs:flex-col-reverse`}
        >
          <div className="lg:w-3/5  lg:h-[122vh] md:h-full sm:w-full xs:w-full lg:justify-content-end md:justify-content-end  sm:justify-content-center ">
            <div className="lg:pt-28 lg:px-28 md:pt-56 md:px-16  ">
              <img
                src={meat}
                className={styles.img_shad}
                style={{ width: "100%", height: "40%" }}
              />
            </div>
          </div>

          <div className="lg:w-2/5 lg:h-screen md:h-full flex-col  sm:px-10 xs:px-12  lg:pt-[20rem] lg:pr-20 md:pt-[13rem] md:pr-12">
            <h3
              className={`${styles.fontSec} lg:text-3xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
            >
              About
            </h3>
            <h2
              className={`${styles.fontSec} lg:text-4xl md:text-2xl font-bold lg:pb-8 md:pb-4 sm:pb-4 xs:pb-3`}
            >
              Food Is An Important Part Of A Balance Diet
            </h2>
            <p
              className={`${styles.fontSec} md:text-[12px] sm:text-[12px] xs:pb-4 md:pb-4 lg:pb-8 text-stone-950 lg:text-[20px]`}
            >
              A healthy diet rich in fruits, vegetables, whole grains and
              low-fat dairy can help to reduce your risk of heart disease by
              maintaining blood pressure and cholesterol levels. <br />
              <br /> High blood pressure and cholesterol can be a symptom of too
              much salt and saturated fats in your diet.
              <br />
              <br /> Eating a portion of oily fish - such as salmon and trout -
              each week can also help to lower your risk of developing heart
              disease. The high levels of omega-3 fatty acids in oily fish are
              good for heart health.
            </p>
            <div className="flex gap-4">
              <button
                className={`${styles.fontSec} bg-orange-400 text-white font-bold lg:py-4 lg:px-6 md:px-4 md:py-2 md:text-[16px] sm:text-[14px] xs:text-[9px] xs:px-4 xs:py-6 rounded-lg lg:text-[20px]`}
              >
                Learn More
              </button>
              <h3
                className={`${styles.h3_price} text-5xl md:text-4xl xs:text-3xl`}
              >
                {" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="relative lg:h-full w-full flex-col flex items-center lg:pb-32 lg:px-16 lg:pt-16 xs:p-8 ">
          <h3
            className={`${styles.fontSec} lg:text-2xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            Work
          </h3>
          <h2
            className={`${styles.fontSec} lg:text-4xl md:text-2xl sm:text-2xl xs:text-2xl font-bold lg:pb-8 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            How It Works
          </h2>
          <div className="lg:px-[38rem]md:px-[29rem]">
            <p
              className={`${styles.fontSec} md:text-[12px] sm:text-[12px] xs:text-base xs:pb-4 md:pb-4 lg:pb-8 lg:text-center md:text-center sm:text-center xs:text-center lg:w-[50rem] md:w-[30rem]  text-stone-950 lg:text-[20px] `}
            >
              A healthy diet rich in fruits, vegetables, whole grains and
              low-fat dairy can help to reduce your risk of heart disease by
              maintaining blood pressure and cholesterol levels. <br />
            </p>
          </div>
          <div className="lg:px-32 lg:pt-16 md:px-28 md:pt-0 sm:px-32 sm:pt-16 xs:px-0 flex justify-center items-center gap-12 sm:flex-wrap xs:flex-wrap">
            {WorkCardData.map((item, index) => (
              <WorkCard titles={item.titles} icon={item.icon} des={item.des} />
            ))}
          </div>
        </div>
        <div className="h-full w-full flex-col flex items-center xs:p-8">
          <h3
            className={`${styles.fontSec} lg:text-2xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            Menu
          </h3>
          <h2
            className={`${styles.fontSec} lg:text-4xl md:text-2xl sm:text-2xl xs:text-2xl font-bold lg:pb-8 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            Explore Our Menu
          </h2>
          <div className="lg:px-[38rem]md:px-[29rem]">
            <p
              className={`${styles.fontSec} md:text-[12px] sm:text-[12px] xs:text-base xs:pb-4 md:pb-4 lg:pb-8 lg:text-center md:text-center sm:text-center xs:text-center lg:w-[50rem] md:w-[30rem]  text-stone-950 lg:text-[20px] `}
            >
              A healthy diet rich in fruits, vegetables, whole grains and
              low-fat dairy can help to reduce your risk of heart disease by
              maintaining blood pressure and cholesterol levels. <br />
            </p>
          </div>
          <div className="lg:px-32 lg:pt-16 md:px-28 md:pt-0 sm:px-32 sm:pt-16 xs:px-0 flex justify-center items-center gap-12 sm:flex-wrap xs:flex-wrap">
            {FoodCardData.map((item, index) => (
              <FoodCards
                img={item.image}
                title={item.title}
                icon={item.icon}
                icon2={item.icon2}
              />
            ))}
          </div>
          <div className="pt-10 flex justify-center items-center">
            <button className="bg-orange-400  hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
              Load More
            </button>
          </div>
        </div>
        <div className=" w-full flex-col flex items-center xs:p-8">
          <h3
            className={`${styles.fontSec} lg:text-2xl md:text-xl xs:text-xl text-orange-500 font-bold lg:pb-6 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            Testimonial
          </h3>
          <h2
            className={`${styles.fontSec} lg:text-4xl md:text-2xl sm:text-2xl xs:text-2xl font-bold lg:pb-8 md:pb-4 sm:pb-4 xs:pb-3`}
          >
            What They Are Saying
          </h2>
          <div className="lg:px-[38rem]md:px-[29rem]">
            <p
              className={`${styles.fontSec} md:text-[12px] sm:text-[12px] xs:text-base xs:pb-4 md:pb-4 lg:pb-8 lg:text-center md:text-center sm:text-center xs:text-center lg:w-[50rem] md:w-[30rem]  text-stone-950 lg:text-[20px] `}
            >
              It's throught mistakes that you actually grow you get rid
              ofeverything that is not essential to make it have to get bad.{" "}
              <br />
            </p>
          </div>
          <div className="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-orange-400"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2
                className={`${styles.fontSec} text-gray-800 text-3xl font-semibold`}
              >
                Design Tools
              </h2>
              <p className={`${styles.fontSec} mt-2 text-gray-600`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-orange-400">
                Alice Ndeh
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="relative isolate overflow-hidden bg-orange-900 py-16 sm:py-24 lg:py-32 rounded-2xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Have Questions In Mind ? Let Us Help You.
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Nostrud amet eu ullamco nisi aute in ad minim nostrud
                    adipisicing velit quis. Duis tempor incididunt dolore.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label id="email-address1" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                    </div>
                    <dt className="mt-4 font-semibold text-white">
                      Weekly articles
                    </dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                      Non laboris consequat cupidatat laborum magna. Eiusmod non
                      irure cupidatat duis commodo amet.
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                        />
                      </svg>
                    </div>
                    <dt className="mt-4 font-semibold text-white">No spam</dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                      Officia excepteur ullamco ut sint duis proident non
                      adipisicing. Voluptate incididunt anim.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
