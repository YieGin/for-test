// Sidebar imports
import {
  UilClipboardAlt,
  UilChart,
  UilApps,
  UilCommentDots,
  UilSchedule,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import "../App.css";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilApps,
    heading: "Home",
  },
  {
    icon: UilClipboardAlt,
    heading: "Tasks",
  },
  {
    icon: UilCommentDots,
    heading: "Chat",
  },
  {
    icon: UilSchedule,
    heading: 'Calendar'
  },
  {
    icon: UilChart,
    heading: 'Statistics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Day",
    color: {
      backGround: "var(--boxelse)",
    },
    barValue: 74.4,
    value: "372",
    png: UilUsdSquare,
    series: [
      {
        name: "Day",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Week",
    color: {
      backGround: "var(--boxelse)",
    },
    barValue: 85.8,
    value: "2.574",
    png: UilUsdSquare,
    series: [
      {
        name: "Week",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Month",
    color: {
      backGround: "var(--boxmonth)", 
    },
    barValue: 100,
    value: "12.259",
    test: "this month.",
    png: UilUsdSquare,
    series: [
      {
        name: "Month",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Kevin",
    noti: "Web-Panel launching soon!",
    time: "1 day ago",
  },
  {
    img: img2,
    name: "Daniel",
    noti: "Test",
    time: "3 days ago",
  },
  {
    img: img3,
    name: "Kamila",
    noti: "Hello!",
    time: "5 days ago",
  },
];
