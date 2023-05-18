import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouterLoader } from "../Components";
import { routes } from "./routes";

const Landing = lazy(() => import("../Pages/Landing/Landing.page"));

function Navigation() {
  return (
    <Router>
      <Suspense fallback={<RouterLoader />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Navigation;
