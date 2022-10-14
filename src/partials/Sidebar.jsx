import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import navigationItems from "../config/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";

import { IconContext } from "react-icons";
import { MdAccessTime } from "react-icons/md";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <aside
        id="sidebar"
        ref={sidebar}
        className={`no-scrollbar fixed left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col overflow-y-scroll bg-slate-800 transition-all duration-200 ease-in-out lg:left-auto lg:top-auto lg:block lg:w-20 lg:translate-x-0 lg:overflow-y-auto lg:sidebar-expanded:!w-64 2xl:!w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div
          id="navWrapper"
          className="scrolling-touch max-w-2xs top:24 z-20 h-full overflow-y-auto bg-white dark:bg-gray-900 lg:sticky lg:top-28 lg:mr-0 lg:block"
        >
          {/* Sidebar header */}
          <div className="absolute right-0 mb-10 flex justify-between pr-3 sm:px-2">
            {/* Close button */}
            <button
              ref={trigger}
              className="text-slate-500 hover:text-slate-400 lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="space-y-8">
            {/* Pages group */}
            <ul className="mt-3">
              {navigationItems.sidebar.map((item) => (
                <>
                  <SidebarLinkGroup
                    activecondition={
                      pathname === "/" || pathname.includes(item.text)
                    }
                  >
                    {(handleClick, open) => {
                      return (
                        <>
                          <a
                            href="#0"
                            className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                              (pathname === "/" ||
                                pathname.includes(item.text)) &&
                              "hover:text-slate-200"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                {/* <svg
                                  className="h-6 w-6 shrink-0"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    className={`fill-current text-slate-400 ${
                                      (pathname === "/" ||
                                        pathname.includes(item.text)) &&
                                      "!text-indigo-500"
                                    }`}
                                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                                  />
                                  <path
                                    className={`fill-current text-slate-600 ${
                                      (pathname === "/" ||
                                        pathname.includes(item.text)) &&
                                      "text-indigo-600"
                                    }`}
                                    d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                                  />
                                  <path
                                    className={`fill-current text-slate-400 ${
                                      (pathname === "/" ||
                                        pathname.includes(item.text)) &&
                                      "text-indigo-200"
                                    }`}
                                    d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                                  />
                                </svg> */}
                                <IconContext.Provider
                                  value={{
                                    color: "white",
                                    className: "react-icons",
                                  }}
                                >
                                  <MdAccessTime  className="h-6 w-6 shrink-0"/>
                                </IconContext.Provider>
                                <span
                                  className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100"
                                  key={item.name}
                                >
                                  {item.name}
                                </span>
                              </div>
                              {/* Icon */}
                              <div className="ml-2 flex shrink-0">
                                <svg
                                  className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                                    open && "rotate-180"
                                  }`}
                                  viewBox="0 0 12 12"
                                >
                                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                          {/* inner Route */}
                          <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                            <ul className={`mt-1 pl-9 ${!open && "hidden"}`}>
                              {item.child?.map((innerItem) => (
                                <li
                                  className="mb-1 last:mb-0"
                                  key={innerItem.text}
                                >
                                  <NavLink
                                    end
                                    to={innerItem.to}
                                    className={({ isActive }) =>
                                      "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                      (isActive ? "!text-indigo-500" : "")
                                    }
                                  >
                                    <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                      {innerItem.name}
                                    </span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      );
                    }}
                  </SidebarLinkGroup>
                </>
              ))}
              {/* Inbox */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 ${
                  pathname.includes("inbox") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/"
                  className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                    pathname.includes("inbox") && "hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname.includes("inbox") && "text-indigo-500"
                        }`}
                        d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
                      />
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname.includes("inbox") && "text-indigo-300"
                        }`}
                        d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
                      />
                    </svg>
                    <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      Inbox
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Expand / collapse button */}
          <div className="mt-auto hidden justify-end pt-3 lg:inline-flex 2xl:hidden">
            <div className="px-3 py-2">
              <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                <span className="sr-only">Expand / collapse sidebar</span>
                <svg
                  className="h-6 w-6 fill-current sidebar-expanded:rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="text-slate-400"
                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                  />
                  <path className="text-slate-600" d="M3 23H1V1h2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
