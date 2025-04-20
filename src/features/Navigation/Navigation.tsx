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
import { useBasketGoods } from "~/entitites/good/store/basketGoods";
import { Badge } from "~/shared/ui/Badge";

import StyledLink from "./ui/StyledLink";
import { SearchInput } from "./ui/SearchInput";
import {
  BasketIcon,
  HomeIcon,
  ProfileIcon,
  SearchIcon,
} from "~/shared/ui/icons";

export const Navigation = () => {
  const { isMobile } = useWindowSize();
  const goods = useBasketGoods((state) => state.goods);

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
              <StyledLink to="/address">
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
              <StyledLink to="/basket" className="relative">
                <BsBasket3 size={24} />
                {goods.length > 0 && (
                  <Badge className="right-[10px]">{goods.length}</Badge>
                )}
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
                <HomeIcon />
              </Link>
            </li>
            <li>
              <Link to="/address">
                <SearchIcon />
              </Link>
            </li>
            <li className="relative">
              <Link to="/basket">
                <BasketIcon />
                {goods.length > 0 && <Badge>{goods.length}</Badge>}
              </Link>
            </li>
            <li>
              <Link to="/">
                <GoHeart size={24} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <ProfileIcon />
              </Link>
            </li>
          </ul>
        </footer>
      )}
    </div>
  );
};
