import React from "react";
import { FoodCards, Navbar } from "../../Components";
import styles from "./Landing.module.css";
import welcome from "../../assets/salt.png";
import meat from "../../assets/cj.png";
import { FaPastafarianism } from "react-icons/fa";
import { WorkCardData } from "../../Components/WorkCards/WorkCard";
import WorkCard from "../../Components/WorkCards/WorkCard.component";
import { FoodCardData } from "../../Components/FoodCards/FoodCard";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

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
            <AttentionSeeker effect="rubberBand">
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
            </AttentionSeeker>
          </div>
          <h2
            className={`${styles.fontSec} md:text-[16px] xs:pb-4 md:pb-4 lg:pb-8  lg:text-[24px]`}
          >
            Fresh and tasty afrikan food. A pinch of passion in every dish,
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
          <Fade direction="right" duration={2000}>
            <div className={styles.welcome}>
              <img src={welcome} />
            </div>
          </Fade>
        </div>
      </div>
      <div className={`${styles.carrySecond} flex flex-col mb-20`}>
        <div
          className={`${styles.second} lg:h-[130%] flex lg:flex-row md:flex-row  sm:flex-col-reverse xs:flex-col-reverse`}
        >
          <div className="lg:w-3/5  lg:h-[122vh] md:h-full sm:w-full xs:w-full lg:justify-content-end md:justify-content-end  sm:justify-content-center ">
            <Fade direction="left" duration={2000}>
              <div className="lg:pt-28 lg:px-28 md:pt-56 md:px-16  ">
                <img
                  src={meat}
                  className={styles.img_shad}
                  style={{ width: "100%", height: "40%" }}
                />
              </div>
            </Fade>
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
        <div className="lg:container mx-auto sm:container">
          <div className="relative isolate overflow-hidden bg-orange-900 py-16 sm:py-24 lg:py-32 rounded-2xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2
                    className={`${styles.fontSec} text-3xl font-bold tracking-tight text-white sm:text-4xl`}
                  >
                    Have Questions In Mind ? Let Us Help You.
                  </h2>
                  <p
                    className={`${styles.fontSec} mt-4 text-lg leading-8 text-gray-300`}
                  >
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
                    <dt
                      className={`${styles.fontSec} mt-4 font-semibold text-white`}
                    >
                      Weekly articles
                    </dt>
                    <dd
                      className={`${styles.fontSec} mt-2 leading-7 text-gray-400`}
                    >
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
                    <dt
                      className={`${styles.fontSec} mt-4 font-semibold text-white`}
                    >
                      No spam
                    </dt>
                    <dd
                      className={`${styles.fontSec} mt-2 leading-7 text-gray-400`}
                    >
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

      <footer className="relative z-10 bg-orange-100 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a
                  href="javascript:void(0)"
                  className="mb-6 inline-block max-w-[160px]"
                >
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="text-body-color mb-7 text-base">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p>
                <p className="text-dark flex items-center text-sm font-medium">
                  <span className="text-primary mr-3">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      className="fill-current"
                    >
                      <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                      <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                      <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                    </svg>
                  </span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Resources
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      SaaS Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      User Flow
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      User Strategy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Company
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      About TailGrids
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Contact & Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Success History
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Setting & Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Quick Links
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Premium Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Know Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Download App
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-body-color text-base">
                  &copy; 2025 TailGrids
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 bottom-0 z-[-1]">
            <svg
              width="217"
              height="229"
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1="281"
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" stop-opacity="0.08" />
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute top-10 right-10 z-[-1]">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2="75"
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#13C296" stop-opacity="0.31" />
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
