import { lazy } from "react";
import { RouteType } from "../typings/index";

import { path } from "./paths";

export const routes: Array<RouteType> = [
  {
    path: path.LANDING,
    component: lazy(() => import("../Pages/Landing/Landing.page")),
  },
  //   {
  //     path: path.REGISTER,
  //     component: lazy(() => import("../pages/Register/Register.screen")),
  //   },
  //   {
  //     path: path.LOGIN,
  //     component: lazy(() => import("../pages/Login/Login.screen")),
  //   },
];
