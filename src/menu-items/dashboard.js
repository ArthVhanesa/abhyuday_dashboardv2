// assets
import {
  IconDashboard,
  IconCurrencyRupee,
  IconBell,
  IconNews,
  IconMapPin,
  IconRegistered,
} from "@tabler/icons";

// constant
const icons = {
  IconDashboard,
  IconCurrencyRupee,
  IconBell,
  IconNews,
  IconMapPin,
  IconRegistered,
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
    {
      id: "register_land",
      title: "Register Land",
      type: "item",
      url: "/dashboard/register_land",
      icon: icons.IconRegistered,
      breadcrumbs: false,
    },
    {
      id: "buysell",
      title: "Buy / Sell",
      type: "collapse",
      icon: icons.IconCurrencyRupee,
      // breadcrumbs: false
      children: [
        {
          id: "buy",
          title: "Buy Land",
          type: "item",
          url: "/dashboard/buy-sell/buy",
          breadcrumbs: false,
        },
        {
          id: "sell",
          title: "Sell Land",
          type: "item",
          url: "/dashboard/buy-sell/sell",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "requests",
      title: "Request",
      type: "collapse",
      icon: icons.IconCurrencyRupee,
      // breadcrumbs: false
      children: [
        {
          id: "sent_requests",
          title: "Sent Requests",
          type: "item",
          url: "/dashboard/request/sent_req",
          breadcrumbs: false,
        },
        {
          id: "recieve_requests",
          title: "Recieved Requests",
          type: "item",
          url: "/dashboard/request/received_req",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "notification",
      title: "Notification",
      type: "item",
      url: "/dashboard/notification",
      icon: icons.IconBell,
      breadcrumbs: false,
    },
    {
      id: "instruction",
      title: "Instruction",
      type: "item",
      url: "/not_verified",
      icon: icons.IconNews,
      breadcrumbs: false,
    },
    {
      id: "geojson",
      title: "Geo-Mapping",
      type: "item",
      url: "/dashboard/map/geojson",
      icon: icons.IconMapPin,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
