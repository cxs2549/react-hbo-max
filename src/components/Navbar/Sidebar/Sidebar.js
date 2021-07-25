import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: fixed;
    left: 0;
    top: 56px;
    width: 56px;
    background-color: black;
    border-right: 1px solid #353549;
    height: 100vh;
    z-index: 22;
  }
  nav {
    color: white;
    flex-flow: column;
    display: flex;
    align-items: center;
    width: 100%;
    svg {
      max-width: 24px;
      padding: 0;
      min-height: 64.8px;
      transition: all 250ms;
      transition-delay: 120ms;
      margin-top: .25px;
    }
  }
`;

const Sidebar = ({ open, clicked, close }) => {
  return (
    <StyledSidebar>
      <nav>
        <div className="flex flex-col">
          <div onClick={clicked} className="cursor-pointer">
            {!open ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            ) : (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-brand-pink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            )}
          </div>
          <NavLink to="/" end activeClassName="text-brand-pink" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          </NavLink>
        </div>
        <div className="flex flex-col">
          <NavLink to="/search" activeClassName="text-brand-pink" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          </NavLink>
          <NavLink to="/account/my-list" activeClassName="text-brand-pink" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          </NavLink>
        </div>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
