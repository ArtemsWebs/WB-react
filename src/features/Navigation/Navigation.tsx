import { Link } from "@tanstack/react-router";

import LogoWb from "~/shared/icons/logoWb.svg";
import { MenuButton } from "~/shared/ui/MenuButton/MenuButton";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsBasket3 } from "react-icons/bs";
import { useWindowSize } from "~/shared/hooks/useWindowSize";
import { AiOutlineHome } from "react-icons/ai";
import { MdScreenSearchDesktop } from "react-icons/md";
import { GoHeart } from "react-icons/go";

import StyledLink from "./ui/StyledLink";
import { SearchInput } from "./ui/SearchInput";

export const Navigation = () => {
  const { isMobile } = useWindowSize();
  return (
    <div>
      <nav className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 justify-center flex items-center gap-4 mx-auto my-0">
        {!isMobile && (
          <ul className="flex justify-end space-x-6 items-center">
            <li>
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800"
                activeProps={{ className: "font-bold" }}
              >
                <img src={LogoWb} alt="logo" className="w-[217px] h-[58px]" />
              </Link>
            </li>
            <li>
              <MenuButton />
            </li>
          </ul>
        )}
        <SearchInput isMobile={isMobile} />
        {!isMobile && (
          <ul className="flex justify-start  space-x-6 items-center">
            <li>
              <StyledLink to="/posts">
                <IoLocationOutline size={24} />
                <span>Адрес</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/posts">
                <IoPersonCircleOutline size={24} />
                <span>Войти</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/basket">
                <BsBasket3 size={24} />
                <span>Корзина</span>
              </StyledLink>
            </li>
          </ul>
        )}
      </nav>
      {isMobile && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-[1] border-b border-white ">
          <ul className="flex justify-around">
            <li>
              <Link to="/">
                <AiOutlineHome size={24} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <MdScreenSearchDesktop size={24} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsBasket3 size={24} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <GoHeart size={24} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <IoPersonCircleOutline size={24} />
              </Link>
            </li>
          </ul>
        </footer>
      )}
    </div>
  );
};
