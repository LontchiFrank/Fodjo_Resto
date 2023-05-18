import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouterLoader } from "../Components";

const Landing = lazy(() => import("../Pages/Landing/Landing.page"));

function Navigation() {
  return (
    <Router>
      <Suspense fallback={<RouterLoader />}></Suspense>
    </Router>
  );
}

export default Navigation;
