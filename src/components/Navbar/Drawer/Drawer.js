import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDrawer = styled.div`
  position: fixed;
  left: ${({ open }) => (open ? "0" : "-100%")};
  top: 10;
  width: 75%;
  max-width: 400px;
  height: 95%;
  background-color: black;
  transition: left 0.35s ease-in;
  transition-delay: .2s;
  z-index: 9;
  min-height: 0 !important; /* added */
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0;
  z-index: 12;
  @media (min-width: 768px) {
    left: ${({ open }) => (open ? "56px" : "-100%")};
  }
  nav {
    height: min-content;
    color: white;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 0 !important;
    .active {
      opacity: .95;
      color: black;
      background-color: white;
    }
    a {
      padding: 12px 1rem;
      font-size: 1.25rem;
      font-weight: 300;
      width: 100%;
      text-transform: capitalize;
      transition: all 150ms;
      transition-delay: 100ms;
      opacity: .8;
     
      &:hover {
        background-color: white;
        color: black;
        opacity: .9;
      }
      &:is(:nth-child(7), :nth-child(25)) {
        border-bottom: 1px solid #353549;
      }
      @media (min-width: 768px) {
        font-size: 1.7rem;
      }
    }
  }
`;

const Drawer = ({ open, clicked }) => {
  const links1 = [
    { name: "series", to: "/series" },
    { name: "movies", to: "/movies" },
    { name: "originals", to: "/originals" },
    { name: "just added", to: "/just_added" },
    { name: "last chance", to: "/last_chance" },
    { name: "coming soon", to: "/coming_soon" },
    { name: "trending now", to: "/trending_now" },
  ];
  const links2 = [
    "action",
    "animation",
    "comedy",
    "crime",
    "docuseries",
    "drama",
    "fantasy & sci-fi",
    "horror",
    "international",
    "kids & family",
    "latino",
    "music",
    "news/talk",
    "reality",
    "romance",
    "shorts",
    "sports",
    "suspense",
  ];
  return (
    <StyledDrawer open={open}>
      <nav>
        {links1.map((link) => (
          <NavLink to={link.to} end activeClassName="active" onClick={clicked}>{link.name}</NavLink>
        ))}
        {links2.map((link, i) => (
          <NavLink key={i} to={`genre-${i}`} activeClassName="active" onClick={clicked}>
            {link}
          </NavLink>
        ))}
        <NavLink to="/audio-description" activeClassName="active" onClick={clicked}>Audio Description</NavLink>
      </nav>
    </StyledDrawer>
  );
};

export default Drawer;
