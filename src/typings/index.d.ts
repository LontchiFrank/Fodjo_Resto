import { LazyExoticComponent } from "react";

export type RouteType = {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
};
