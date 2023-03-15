import { useRoutes } from "react-router-dom";

// routes
import MainRoutes, {
	LandingRoutes,
	Not_VerifiedRoutes,
	RegisterRoute,
	MapRoutes,
	CertificateRoute,
} from "./MainRoutes";
import AdminRoutes from "./AdminRoutes";

import AuthenticationRoutes from "./AuthenticationRoutes";
// import Register from "views/pages/RegisterPage/Register";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
	return useRoutes([
		LandingRoutes,
		MainRoutes,
		AuthenticationRoutes,
		Not_VerifiedRoutes,
		RegisterRoute,
		MapRoutes,
		AdminRoutes,
	]);
}
