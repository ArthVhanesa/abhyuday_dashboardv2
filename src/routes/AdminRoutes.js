import { lazy } from "react";

// project imports
import AdminLayout from "layout/MainLayout copy";
import Loadable from "ui-component/Loadable";
import Home from "../views/pages/LandingPage/LandingPage";
import NotVerified from "../views/pages/NotVerfiedPage/Verify";
import BuyLand from "../views/pages/BuyLand/BuyLand";
import VerifyLandAccordian from "../views/Admin/VerifyLandAccordian";
import VerifyUserAccordian from "../views/Admin/VerifyUserAccordian";
import TransactionLandAccordian from "../views/Admin/TransactionLandAccordian";
import Register from "../views/pages/RegisterPage/Register";
import VerifyLand from "../views/Admin/VerifyLand";
import VerifyUser from "../views/Admin/VerifyUser";
import TransactionLand from "../views/Admin/TransactionLand";
import OneUser from "../views/Admin/VerifyUser";
// import Certificate from "../views/pages/Certificate/certificate";
import Profile from "../ui-component/Profile";
import Map from "../ui-component/Map";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/Admin/Default/index.js"))
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

const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "/admin",
      element: <DashboardDefault />,
    },
    {
      path: "/admin/users/:id",
      element: <OneUser />,
    },
    {
      path: "/admin/lands/:id",
      element: <VerifyLand />,
    },
    {
      path: "user-request",
      element: <VerifyUserAccordian />,
      // children: [
      // 	{
      // 		path: "verify-user",
      // 		element: <VerifyUser />,
      // 	},
      // ]
    },
    {
      path: "land-request",
      element: <VerifyLandAccordian />,
      // children: [
      // 	{
      // 		path: "verify-land",
      // 		element: <VerifyLand />,
      // 	},
      // ]
    },
    {
      path: "transaction-request",
      element: <TransactionLandAccordian />,
      // children: [
      // 	{
      // 		path: "transaction-land",
      // 		element: <TransactionLand />,
      // 	},
      // ]
    },
    {
      path: "verify-land",
      element: <VerifyLandAccordian />,
    },
    {
      path: "transaction-land",
      element: <TransactionLand />,
    },
    {
      path: "verify-user",
      element: <VerifyUser />,
    },
  ],
};

// export const CertificateRoute = {
// 	path: "/Certificate",
// 	element: <Certificate/>,
// };

export default AdminRoutes;
