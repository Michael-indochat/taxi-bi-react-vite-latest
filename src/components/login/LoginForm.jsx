import { IconContext } from "react-icons";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { MdOutlineLock, MdPerson, MdShoppingBag } from "react-icons/md";

const LoginForm = (props) => {
  console.log("props:", props.showPassword);
  return (
    <div className="relative z-10 flex max-w-sm flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:max-w-md md:flex-none md:px-0">
      <div className="mx-auto w-full max-w-xs sm:px-4 md:w-96 md:max-w-md md:px-10">
        {/* form title */}
        <div className="flex flex-col">
          <div className="xl:mt-10">
            <h2 className="mb-[28px] text-center text-[1.75rem] font-bold text-[#44474a]">
              Log In
            </h2>
          </div>
        </div>
        <form action="#" className="mt-0 grid grid-cols-1 gap-y-5">
          <div>
            <label className="relative block ">
              <span className="sr-only">SMARTAX 365 ID</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <IconContext.Provider
                  value={{
                    color: "current",
                    className: "text-2xl",
                  }}
                >
                  <MdShoppingBag />
                </IconContext.Provider>
              </span>
              <input
                className="block w-full rounded-md border-2 border-[#e4e9ec] bg-white py-2 pl-9 pr-3 text-base text-black shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="SMARTAX 365 ID"
                type="SMARTAX 365 ID"
                name="search"
              />
            </label>
          </div>

          <div>
            <label className="relative block">
              <span className="sr-only">Account</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <IconContext.Provider
                  value={{
                    color: "current",
                    className: "text-2xl",
                  }}
                >
                  <MdPerson />
                </IconContext.Provider>
              </span>
              <input
                className="block w-full rounded-md border-2 border-[#e4e9ec] bg-white py-2 pl-9 pr-3 text-base text-black shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Account"
                type="account"
                name="account"
              />
            </label>
          </div>

          <div>
            <label className="relative block ">
              <span className="sr-only">Password</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <IconContext.Provider
                  value={{
                    color: "current",
                    className: "text-2xl",
                  }}
                >
                  <MdOutlineLock />
                </IconContext.Provider>
              </span>
              <input
                className="block w-full rounded-md border-2 border-[#e4e9ec] bg-white py-2 pl-9 pr-3 text-base text-black shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Password"
                type={props.showPassword ? "text" : "password"}
                name="password"
              />

              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2"
                onClick={props.handleShowPassord}
              >
                {props.showPassword ? (
                  <IconContext.Provider
                    value={{
                      color: "current",
                      className: "text-2xl",
                    }}
                  >
                    <IoIosEyeOff />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{
                      color: "current",
                      className: "text-2xl",
                    }}
                  >
                    <IoIosEye />
                  </IconContext.Provider>
                )}
              </span>
            </label>
          </div>

          {/* login button */}
          <div className="mt-2">
            <button
              className="group inline-flex w-full items-center justify-center rounded-full bg-blue-500  py-2 px-4 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
              type="submit"
              onClick={props.login}
            >
              <span>
                Sign in <span aria-hidden="true">→</span>
              </span>
            </button>
          </div>
          {/* forget button */}
          <div className="mt-4">
            <button
              className="group inline-flex w-full items-center justify-center  rounded-full border-none py-2 px-4 text-sm font-semibold text-blue-600 shadow-none outline-none hover:bg-blue-300 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
              type="submit"
            >
              <span>
                Forget Password <span aria-hidden="true">?</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
