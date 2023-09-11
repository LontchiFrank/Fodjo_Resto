import React from "react";

type FillProps = {
  open: boolean;
};

function Profile(props: FillProps) {
  const windowSidebar: any = window.innerWidth;
  console.log(windowSidebar);

  return (
    <div
      className={`${
        windowSidebar > 450 ? (props.open ? "ml-64 " : "ml-20") : "ml-0"
      } `}
    >
      <div className=" flex flex-col gap-4 bg-gray-200">
        <div
          className={`${
            props.open
              ? "lg:w-[100%]  flex items-center sm:flex-col "
              : " lg:w-[100%]  flex items-center sm:flex-col"
          } p-4  md:w-[100%] sm:w-[100%] xs:w-[100%] `}
        >
          {/* <div className="text-2xl ">Admin Setting</div> */}
          <div className="flex-col w-full">
            <p className="font-bold text-xl">Admin Setting</p>

            <div className="w-full rounded-lg dark:border-gray-700 bg-gray-200">
              <div className="flex flex-col gap-4">
                <div className="flex  h-36 rounded bg-gray-50 dark:bg-white">
                  <div className="flex p-5 justify-left">
                    <img
                      className="w-24 h-24 rounded"
                      src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Default avatar"
                    />
                    <p className=" text-gray-400 dark:text-gray-500">
                      <h2 className="pl-3 font-bold text-2xl md:text-xl sm:text-lg">
                        Tasty Fried Chicken
                      </h2>
                      <h2 className="pl-3 font-medium text-base">
                        Restaurant{" "}
                      </h2>
                      <div className="pl-3">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Change Picture
                        </button>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="  h-80 rounded bg-gray-50 dark:bg-white mb-4">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <div className="w-full  px-8 py-8 mb-6 md:mb-0">
                      <p className="font-bold text-[20px] text-left pb-6">
                        Language & Time
                      </p>
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Select Language
                      </label>
                      <select
                        id="countries"
                        className="mb-6 bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose Language</option>
                        <option value="US">English</option>
                        <option value="CA">French</option>
                      </select>

                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Time Zone
                      </label>
                      <select
                        id="countries"
                        className="mb-4 bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>GMT +1 (Greenwich Mean TIme )</option>
                        <option value="US">English</option>
                        <option value="CA">French</option>
                      </select>
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Save All
                      </button>
                    </div>
                  </p>
                </div>
              </div>

              <div className="col-span-2 flex justify-center  rounded bg-gray-50 dark:bg-white">
                <form className="w-full px-12 py-8">
                  <label className="block  tracking-wide text-gray-700 text-lg font-bold mb-2">
                    General Information
                  </label>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 leading-tight  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Country
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="Cameroon"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        City
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 leading-tight  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Buea"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Address
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="Molyko"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 leading-tight  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="TFC@yahoo.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="+237699999999"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Zip Postal
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 leading-tight  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="00000"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Organization
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="TFC"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Role
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  rounded-md py-3 px-4 leading-tight  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="admin"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Save All
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
