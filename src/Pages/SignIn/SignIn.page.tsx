import React, { useState } from "react";
import styles from "./SignIn.module.css";
import logo from "../../assets/g.png";

interface User {
  email: string;
  password: string;
}
function SignIn() {
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
  } as User);
  const { email, password } = formData;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  return (
    <div
      className={`${styles.view} w-full h-screen flex justify-center items-center `}
    >
      <div className={`${styles.box} xs:w-[100%]`}>
        <div
          className={`${styles.back} w-[90%] h-[100%] rounded-xl lg:block md:block xs:hidden`}
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
            className={`${styles.shade} w-[100%] h-[85%] bg-white-300 rounded-r-xl`}
          >
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src={logo}
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
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
                    <div className="flex items-center justify-between">
                      <label
                        id="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-orange-400 hover:text-orange-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        value={password}
                        type="password"
                        onChange={(e) => handleInputChange(e)}
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
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Don't hve an Account?
                  <a
                    href="/register"
                    className="font-semibold leading-6 text-orange-400 hover:text-orange-500"
                  >
                    Signup
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

export default SignIn;
