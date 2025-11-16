import {
  HiUser,
  HiHome,
  HiBookOpen,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

import { type ReactNode } from "react";

export interface ISideBar {
  id: number;
  text: string;
  icon: ReactNode;
  children?: ISideBar[];
}

export const sideBarList: ISideBar[] = [
  {
    id: 0,
    text: "首页",
    icon: HiHome,
  },
  {
    id: 1,
    text: "用户管理",
    icon: HiUser,
    children: [
      {
        id: 101,
        text: "用户列表",
        icon: HiUser,
      },
      {
        id: 102,
        text: "用户分类",
        icon: HiUser,
      },
    ],
  },
  {
    id: 2,
    text: "文章管理",
    icon: HiBookOpen,
    children: [
      {
        id: 201,
        text: "文章列表",
        icon: HiBookOpen,
      },
      {
        id: 202,
        text: "文章分类",
        icon: HiBookOpen,
      },
    ],
  },
];
