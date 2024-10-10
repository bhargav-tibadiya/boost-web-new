import React, { lazy } from "react";
import { retry } from "./utils/CommonFunctions";
import { useRoutes } from "react-router-dom";
import Loader from "./components/Loader";
import Project from "./pages/Project";
import JoinPool from "./pages/JoinPool";

const Home = lazy(() => retry(() => import("./pages/Home")));
const BoostBuy = lazy(() => retry(() => import("./pages/BoostBuy")));
const FourOhFour = lazy(() => retry(() => import("./pages/FourOhFour")));
const Stake = lazy(() => retry(() => import("./pages/Stake")));
// const BoostStake = lazy(() => retry(() => import("./pages/BoostStake")));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/boost-buy",
      element: <BoostBuy />,
    },
    {
      path: "/stake",
      element: <Stake />,
    },
    {
      path: "/launchpad/project/:id",
      element: <Project />,
    },
    {
      path: "/launchpad/project/:id/joinpool",
      element: <JoinPool />,
    },
    // {
    //   path: "/boost-stake",
    //   element: <BoostStake />,
    // },
    {
      path: "/loader",
      element: <Loader />,
    },
    {
      path: "*",
      element: <FourOhFour />,
    },
  ]);
  return routes;
};

export default Routes;
