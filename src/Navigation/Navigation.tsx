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
import { QueryClient, QueryClientProvider } from "react-query";

const Landing = lazy(() => import("../Pages/Landing/Landing.page"));

function Navigation() {
  const [open, setOpen] = useState(true);
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  );
}

export default Navigation;
