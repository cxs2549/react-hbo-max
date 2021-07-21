import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const StyledDrawer = styled.div`
  position: fixed;
  left: ${({ open }) => (open ? "0" : "-100%")};
  top: 10;
  width: 75%;
  height: 95%;
  background-color: black;
  transition: left .5s ease-in;
  z-index: 9;
  min-height: 0 !important; /* added */
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0;
  nav {
    height: min-content;

    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 0 !important;
    a {
      padding: 1rem;
      font-size: 1.25rem;
      width: 100%;
      text-transform: capitalize;
      &:hover {
        background-color: white;
        color: black;
      }
      &:is(:nth-child(7), :nth-child(25)) {
        border-bottom: 1px solid white;
      }
    }
    
  }
  
`

const Drawer = ({open}) => {
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
            <NavLink to={link.to}>
              {link.name}
            </NavLink>

          ))}
          {links2.map((link, i) => (
            <NavLink key={i} to="/">
              {link}
            </NavLink>

          ))}
          <NavLink to="/">Audio Description</NavLink>
       
      </nav>
    </StyledDrawer>
  )
}

export default Drawer
