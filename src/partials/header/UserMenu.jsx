import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../../utils/Transition";

import { IconContext } from "react-icons";
import { MdPerson } from "react-icons/md";

const UserMenu = (signOut) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="group inline-flex items-center justify-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <div className="flex items-center truncate">
          <IconContext.Provider value={{ color: "#fff" }}>
            <MdPerson
              key={signOut.signOut}
              className="ml-1 h-5 w-5 shrink-0 fill-current text-slate-400"
            />
          </IconContext.Provider>
        </div>
      </button>

      <Transition
        className="absolute top-full right-0 z-10 mt-1 min-w-44 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="mb-1 border-b border-slate-200 px-3 pt-0.5 pb-2">
            <div className="font-medium text-slate-800">Acme Inc.</div>
            <div className="text-xs italic text-slate-500">Administrator</div>
          </div>
          <ul>
            <li>
              <Link
                className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              <button
                className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                onClick={signOut.signOut}
              >
                {/* onClick={() => setDropdownOpen(!dropdownOpen)} */}
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default UserMenu;
