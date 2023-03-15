// material-ui
import { Typography } from "@mui/material";

// project imports
import NavGroup from "./NavGroup";
import menuItem from "menu-items";
import AdminList from "../../../../menu-items/AdminList";

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
	const navItems = AdminList.items.map((item) => {
		switch (item.type) {
			case "group":
				return <NavGroup key={item.id} item={item} />;
			default:
				return (
					<Typography key={item.id} variant='h6' color='error' align='center'>
						Menu Items Error
					</Typography>
				);
		}
	});

	return <>{navItems}</>;
};

export default MenuList;
