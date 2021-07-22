import { useState } from "react";
import styled from "styled-components";
import Overlay from "./Drawer/Overlay/Overlay";
import Drawer from "./Drawer/Drawer";
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./Navigation/Navigation";

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <Navigation open={isOpen} clicked={() => setIsOpen(!isOpen)} close={() => setIsOpen(false)} />
      <Sidebar open={isOpen} clicked={() => setIsOpen(!isOpen)} close={() => setIsOpen(false)} />
      <Overlay open={isOpen} clicked={() => setIsOpen(!isOpen)} />
      <Drawer open={isOpen} clicked={() => setIsOpen(!isOpen)} />
    </StyledHeader>
  );
};

export default Navbar;
