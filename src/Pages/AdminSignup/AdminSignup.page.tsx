import React, { useState } from "react";
import styles from "./AdminSignup.module.css";
import logo from "../../assets/g.png";
import { BiUser } from "react-icons/bi";

interface User {
  fname: string;
  lname: string;
  email: string;
  password: string;
  password2: string;
}

function AdminSignUp() {
  const [formData, setFormData] = useState<User>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password2: "",
  } as User);
  const { fname, lname, email, password, password2 } = formData;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  return (
    <div
      className={`${styles.view} w-full h-screen flex flex-col justify-center items-center `}
    >
      <div className="w-[100%] px-52 pb-6 flex justify-end">
        <h3 className=" ">
          <a
            href="/register"
            className="font-semibold text-xl leading-6 text-orange-400 hover:text-orange-500"
          >
            Sign Up as User
          </a>{" "}
        </h3>
        <div>
          <BiUser
            style={{ fontSize: "22px" }}
            className="text-orange-400 hover:text-orange-500"
          />
        </div>
      </div>
      <div className={`${styles.box} xs:w-[100%] flex-row-reverse`}>
        <div
          className={`${styles.back} w-[95%] h-[100%] rounded-xl lg:block md:block xs:hidden`}
        >
          <div
            className="px-8 text-center font-bold"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "white", fontSize: "32px" }}>
              Discover the best African Foods. Healthy food for your body.
            </h2>
            <div className="px-5">
              <p className=" text-white font-medium">
                Eat balance diet which is healthy and full of nutrients for your
                health. Deliver food, at the comfort of your home.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.sec} w-[80%] h-[100%] xs:w-[100%] bg-white-300 flex justify-center items-center `}
        >
          <div
            className={`${styles.shade} w-[100%] h-[85%] md:h-[100%] bg-white-300 rounded-r-xl`}
          >
            <div className="flex min-h-full flex-col justify-center px-6 lg:py-12 md:py-6 md:px-16 sm:py-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src={logo}
                  alt="Your Company"
                />
                <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create a Restaurant Account
                </h2>
              </div>

              <div className="mt-6 sm:mx-auto  sm:w-full sm:max-w-sm">
                <form className="space-y-4" action="#" method="POST">
                  <div>
                    <label
                      id="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Restaurant Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="fname"
                        name="name"
                        value={fname}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 pl-3 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      id="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                        type="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 pl-3 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      id="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        onChange={(e) => handleInputChange(e)}
                        type="password"
                        value={password}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 pl-3 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        id="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Confirm Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={(e) => handleInputChange(e)}
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-3 focus:ring-orange-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Already have an Account?
                  <a
                    href="/login"
                    className="font-semibold leading-6 text-orange-400 hover:text-orange-500"
                  >
                    SignIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
