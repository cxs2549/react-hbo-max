import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import {
  MenuAlt1Icon,
  XIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Overlay from "./Drawer/Overlay/Overlay";
import Drawer from "./Drawer/Drawer";
import logo from "../../assets/logo.png";

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  nav {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: black;
    padding: 0 1rem;
    z-index: 10;
    svg {
      max-width: 24px;
    }
    & > div {
      display: flex;
      align-items: center;
      width: 33%;
      &:last-child {
        justify-content: end;
      }
    }
    #logo {
      filter: brightness(0) invert(1);
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <nav>
        <div className="space-x-5">
          <div onClick={handleClick}>
            {!isOpen ? (
              <MenuAlt1Icon className="cursor-pointer" />
            ) : (
              <XIcon className="cursor-pointer text-brand-pink" />
            )}
          </div>
          <NavLink to="/" end activeClassName="text-brand-pink">
            <HomeIcon />
          </NavLink>
        </div>
        <div id="logo" className="absolute">
          <img src={logo} alt="" />
        </div>
        <div className="space-x-5">
          <NavLink to="/search" activeClassName="text-brand-pink">
            <SearchIcon />
          </NavLink>
          <NavLink to="/account" activeClassName="text-brand-pink">
            <UserIcon />
          </NavLink>
        </div>
      </nav>
      <Overlay open={isOpen} clicked={() => setIsOpen(!isOpen)} />
      <Drawer open={isOpen} />
    </StyledHeader>
  );
};

export default Navbar;
