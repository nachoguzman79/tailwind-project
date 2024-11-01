import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({onClickShoppingBtn}) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between ">
      {/* logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="lg:hidden hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list Hidden hace que desaparezca el menu em mobile version*/}

      <div
        className={`${!isMobileMenuShown && "hidden"}  w-full lg:w-auto lg:block`}
      >
        <ul
          className=" lg:space-x-8 flex flex-col lg:flex-row lh bg-gray-100 lg:border-none lg:bg-transparent
        text-lg border border-gray-100 rounded-lg p-4"
        >
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 lg:bg-transparent px-3 py-2 cursor-pointer rounded ${
                  i === 0
                    ? "bg-blue-500 text-white lg:text-blue-500 lg:bg-transparent"
                    : "hover:bg-gray-200"
                } ${(i === 3 || i === 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* //Cart button */}
      <div onClick={onClickShoppingBtn} 
      className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8"
      >
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
