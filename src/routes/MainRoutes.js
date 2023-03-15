import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import Home from "../views/pages/LandingPage/LandingPage";
import NotVerified from "../views/pages/NotVerfiedPage/Verify";
import BuyLand from "../views/pages/BuyLand/BuyLand";
import Accordian from "../views/dashboard/Default/UserAccordian";
import Register from "../views/pages/RegisterPage/Register";
// import Certificate from "../views/pages/Certificate/certificate";
import Profile from "../ui-component/Profile";
import Map from "../ui-component/Map";
import ViewLand from "../views/dashboard/Default/ViewLand";
import RegisterLand from "../views/pages/RegisterLand";
import LandAccordions from "views/dashboard/Default/LandAccordian";
import RecieveAccordian from "../views/dashboard/Default/RecieveAccordian";
import SentAccordian from "../views/dashboard/Default/SentAccordian";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default/index.js"))
);

// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import("views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsMaterialIcons = Loadable(
  lazy(() => import("views/utilities/MaterialIcons"))
);
const UtilsTablerIcons = Loadable(
  lazy(() => import("views/utilities/TablerIcons"))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/dashboard",
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <DashboardDefault />,
    },
    {
      path: "register_land",
      element: <RegisterLand />,
    },

    {
      path: "buy-sell",
      children: [
        {
          path: "buy",
          element: <BuyLand />,
        },
      ],
    },
    {
      path: "map",
      children: [
        {
          path: "geojson",
          element: <Map />,
        },
      ],
    },
    {
      path: "buy-sell",
      children: [
        {
          path: "sell",
          element: <LandAccordions />,
        },
      ],
    },
    {
      path: "request",
      children: [
        {
          path: "sent_req",
          element: <SentAccordian />,
        },
      ],
    },
    {
      path: "request",
      children: [
        {
          path: "received_req",
          element: <RecieveAccordian />,
        },
      ],
    },
    {
      path: "icons",
      children: [
        {
          path: "material-icons",
          element: <UtilsMaterialIcons />,
        },
      ],
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "lands/:id",
      element: <ViewLand />,
    },
  ],
};

export const LandingRoutes = {
  path: "/",
  element: <Home />,
};

export const MapRoutes = {
  path: "/map",
  element: <Map />,
};

export const Not_VerifiedRoutes = {
  path: "/not_verified",
  element: <NotVerified />,
};

export const RegisterRoute = {
  path: "/register",
  element: <Register />,
};

// export const CertificateRoute = {
// 	path: "/Certificate",
// 	element: <Certificate/>,
// };

export default MainRoutes;
