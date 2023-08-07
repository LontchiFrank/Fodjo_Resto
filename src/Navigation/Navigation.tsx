import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Analytics,
  Home,
  Orders,
  Profile,
  RouterLoader,
  Search,
} from "../Components";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard.page";
import { routes } from "./routes";

const Landing = lazy(() => import("../Pages/Landing/Landing.page"));

function Navigation() {
  const [open, setOpen] = useState(true);
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
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route path="home" element={<Home open={open} />} />
            <Route path=":search" element={<Search open={open} />} />
            <Route path=":orders" element={<Orders open={open} />} />
            <Route path=":profile" element={<Profile open={open} />} />
            <Route path=":analytics" element={<Analytics open={open} />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Navigation;
