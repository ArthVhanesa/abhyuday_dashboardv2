// assets
import {
  IconDashboard,
  IconCurrencyRupee,
  IconBell,
  IconNews,
  IconMapPin,
  IconUser,
  IconAsset,
  IconTransferIn,
  IconMap2,
  IconFileCheck,
} from "@tabler/icons";

// constant
const icons = {
  IconDashboard,
  IconCurrencyRupee,
  IconBell,
  IconNews,
  IconMapPin,
  IconUser,
  IconAsset,
  IconTransferIn,
  IconMap2,
  IconFileCheck,
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: "AdminDashboard",
  title: "Admin Panel",
  type: "group",
  children: [
    {
      id: "default",
      title: "Verify User",
      type: "item",
      icon: icons.IconUser,
      url: "/admin",
    },
    {
      id: "land",
      title: "Verify Land",
      type: "item",
      icon: icons.IconMap2,
      url: "/admin/land-request",
    },
    {
      id: "transaction",
      title: "Verify Transactions",
      type: "item",
      icon: icons.IconFileCheck11,
      url: "/admin/transaction-request",
    },
  ],
};

export default dashboard;
