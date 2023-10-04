import React, { useState } from "react";
import styles from "./SignIn.module.css";
import logo from "../../assets/log.png";
import { BiRestaurant } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../features/authSlice";
import { GoogleLogin } from "react-google-login";

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
  const dispatch: any = useDispatch();
  const loader = useSelector((data: any) => data.users?.loading);
  let token = undefined
  if(localStorage.getItem('token') !== 'undefined') token = localStorage.getItem('token')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  const clientId: string =
    "102302105342-hkb4u532lnubs0vaep2atg6ioane2v74.apps.googleusercontent.com";

  // client secret = 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

  const onSuccess = (res: any) => {
    console.log("Login successfull! current user:", res.profileObj);
  };
  const onFailure = (res: any) => {
    console.log("Login Failure! res:", res);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    const sign: any = dispatch(signInUser(formData));
    console.log(sign);
  };

  console.log(token);
  

  return (
    <>
      {token ? (
        window.location.replace("/dashboard")
      ) : (
        <div
          className={`${styles.view} w-full h-screen flex  flex-col justify-center items-center `}
        >
          <div className="w-[100%] px-52 pb-6 flex justify-end">
            <h3 className=" ">
              <a
                href="/login-admin"
                className="font-semibold text-xl  leading-6 text-orange-400 hover:text-orange-500"
              >
                Sign In as Restaurant
              </a>{" "}
            </h3>
            <div>
              <BiRestaurant
                style={{ fontSize: "22px" }}
                className="text-orange-400 hover:text-orange-500"
              />
            </div>
          </div>
          <div className={`${styles.box} xs:w-[100%]`}>
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
                    Eat balance diet which is healthy and full of nutrients for
                    your health. Deliver food, at the comfort of your home.
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
                      style={{ width: "50%", height: "80%" }}
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign in to your account
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                      className="space-y-6"
                      action="#"
                      method="POST"
                      onSubmit={(e) => handleSubmit(e)}
                    >
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
                          {loader ? (
                            <svg
                              aria-hidden="true"
                              role="status"
                              className="inline mr-3 w-4 h-4 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              ></path>
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          ) : null}
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
      )}
    </>
  );
}

export default SignIn;
