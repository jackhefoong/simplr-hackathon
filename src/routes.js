import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdLock,
  MdApproval,
} from "react-icons/md";
import {CalendarIcon} from '@chakra-ui/icons';
import {IoMdHeart} from 'react-icons/io';

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn"; 

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  {
    name: "Leave Application",
    layout: "/admin",
    icon: <Icon as={CalendarIcon} width='20px' height='15px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Performance Review",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdApproval}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Employee Benefits",
    layout: "/admin",
    path: "/rtl-default",
    icon: <Icon as={IoMdHeart} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
  {
    name: "Log Out",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default routes;
