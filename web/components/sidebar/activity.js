import Image from "next/image";
import React from "react";
import Logo from "../../public/img/logo.svg";
import {
  BellIcon,
  CalendarIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import ActivityBox from "./activityBox";

const ActivitySidebar = () => {
  const router = useRouter();

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto w-60 fixed min-h-screen py-4 px-3 dark:bg-neutral-900 bg-white border-r dark:border-r-neutral-800 border-r-gray-100">
        <Link href="/dashboard">
          <button className="mb-5 cursor-pointer">
            <span className="font-logo text-xl pl-2.5 text-teal-600 font-semibold whitespace-nowrap dark:text-white">
              Datelly
            </span>
          </button>
        </Link>

        <ActivityBox />

        <ul className="space-y-1">
          <li>
            <Link href="/dashboard">
              <div
                className={
                  router.pathname === "/dashboard"
                    ? "navLink bg-gray-100 font-medium dark:text-white dark:bg-neutral-800"
                    : "navLink"
                }
              >
                <PresentationChartBarIcon
                  className={
                    router.pathname === "/dashboard"
                      ? "navLinkIcon dark:text-white text-black"
                      : "navLinkIcon"
                  }
                />
                <span className="ml-3">Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/appointments">
              <div
                className={
                  router.pathname === "/appointments"
                    ? "navLink bg-gray-100 font-medium dark:text-white dark:bg-neutral-800"
                    : "navLink"
                }
              >
                <CalendarIcon
                  className={
                    router.pathname === "/appointments"
                      ? "navLinkIcon dark:text-white text-black"
                      : "navLinkIcon"
                  }
                />
                <span className="ml-3">Appointments</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <div
                className={
                  router.pathname === "/inbox"
                    ? "navLink bg-gray-100 font-medium dark:text-white dark:bg-neutral-800"
                    : "navLink"
                }
              >
                <BellIcon
                  className={
                    router.pathname === "/inbox"
                      ? "navLinkIcon dark:text-white text-black"
                      : "navLinkIcon"
                  }
                />
                <span className="ml-3">Inbox</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <div
                className={
                  router.pathname === "/users"
                    ? "navLink bg-gray-100 font-medium dark:text-white dark:bg-neutral-800"
                    : "navLink"
                }
              >
                <UserGroupIcon
                  className={
                    router.pathname === "/user"
                      ? "navLinkIcon dark:text-white text-black"
                      : "navLinkIcon"
                  }
                />
                <span className="ml-3">Users</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ActivitySidebar;
