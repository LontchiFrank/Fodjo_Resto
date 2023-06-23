import { lazy } from "react";
import { RouteType } from "../typings/index";

import { path } from "./paths";

export const routes: Array<RouteType> = [
  {
    path: path.LANDING,
    component: lazy(() => import("../Pages/Landing/Landing.page")),
  },
  {
    path: path.LOGIN,
    component: lazy(() => import("../Pages/SignIn/SignIn.page")),
  },
  {
    path: path.REGISTER,
    component: lazy(() => import("../Pages/SignUp/SignUp.page")),
  },
  {
    path: path.REGISTER_ADMIN,
    component: lazy(() => import("../Pages/AdminSignup/AdminSignup.page")),
  },
  {
    path: path.LOGIN_ADMIN,
    component: lazy(() => import("../Pages/AdminSignin/AdminSignin.page")),
  },
];
