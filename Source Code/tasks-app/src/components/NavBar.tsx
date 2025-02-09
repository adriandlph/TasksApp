import { Bars3Icon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import linuxLogoLight from "../assets/linuxIcon-light.png";
import linuxLogoDark from "../assets/linuxIcon-dark.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function NavBar() {
  const navigate = useNavigate();

  var [darkTheme, setDarkTheme] = useState(false);

  document.documentElement.className = darkTheme ? "dark" : "light";

  const pagesClassName =
    "text-xl font-semibold dark:text-white hover:dark:text-orange-400 ";

  const popoverOptionClassName =
    "hover:bg-orange-400/30 dark:hover:bg-white/10 py-2";
  return (
    <>
      <nav
        aria-label="Global"
        className="flex w-10/12 mx-auto items-center justify-between p-6 lg:px-8 border-2 border-stone-800 rounded-lg w-full dark:border-orange-400"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tasks</span>
            <img
              alt=""
              src={darkTheme ? linuxLogoDark : linuxLogoLight}
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => /* setMobileMenuOpen(true) */ {}}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open nav bar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-20">
          <button
            onClick={() => {
              navigate("/");
            }}
            className={pagesClassName}
          >
            Home
          </button>

          <button
            onClick={() => {
              navigate("/task");
            }}
            className={pagesClassName}
          >
            Tasks
          </button>

          <button
            onClick={() => {
              navigate("/calendar");
            }}
            className={pagesClassName}
          >
            Calendar
          </button>
        </div>
        {/*
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}

        <Popover className="relative flex flex-1 justify-end">
          <PopoverButton>
            <Cog6ToothIcon
              aria-hidden="true"
              className="size-10"
              color={darkTheme ? "white" : "black"}
            />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom end"
            className="flex flex-col my-2 bg-white dark:bg-black text-black dark:text-white border border-[1px] border-black dark:border-zinc-600 rounded-md w-40 divide-y divide-black/10 dark:divide-zinc-600/60 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <button
              onClick={() => setDarkTheme(!darkTheme)}
              className={popoverOptionClassName}
            >
              Set light theme
            </button>
            <button className={popoverOptionClassName}>Profile</button>
            <button className={popoverOptionClassName}>Settings</button>
          </PopoverPanel>
        </Popover>
      </nav>
    </>
  );
}

/*
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <button>Settings</button>
  <div>
    <button
      onClick={() => {
        setDarkTheme(!darkTheme);
      }}
    >
      Switch to {darkTheme ? "Dark" : "Light"} theme
    </button>
  </div>
</div>
*/

export default NavBar;
