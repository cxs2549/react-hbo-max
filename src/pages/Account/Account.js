import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import {
  cover1, cover11
} from '../../assets/art'


const StyledAccount = styled.div`
  margin-top: 56px;
  padding: 0 1rem;
  color: white;
  position: relative;
  z-index: 1;
  background-image: linear-gradient(to top, #1f1128 0%, black 74%);
  height: 100vh;
  position: relative;
  @media (min-width: 640px) {
    height: 100vh;
  }
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  a {
    opacity: .8;
    position: relative;
   
  }
	.active {
    font-weight: 600;
		opacity: 1;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -14px;
      width: 100%;
      height: 3px;
      background-color: #FF00E4;
    }
	}
  #top {
    padding: 0 1rem;
    height: 250px;
    position: relative;
    z-index: 2;
		@media (min-width: 768px) {
			height: 300px;
		}
    @media (min-width: 1024px) {
      margin-right: 56px;
    }
    #innerTop {
      border-color: #353549;
      height: 250px;
      background-color: black;
      position: fixed;
			top: 2.75rem;
      left: 0;
      width: 100%;
			transition: height 200ms;
			@media (min-width: 768px) {
        top: 3.5rem;
			height: 300px;
		}
			span {
				font-size: 90%;
				color: #B535F5;
			}
      #topBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        padding: 0 1rem;
        padding-bottom: 2rem;
        height: 74px;
        @media (min-width: 768px) {
          margin-left: 56px;
    padding: 0 2rem;

        }
        #links {
          border-color: #353549;
					display: flex;
					justify-content: space-between;
					@media (min-width: 470px) {
						justify-content: flex-start;
						gap: 2.5rem;
					}
        }
      }
    }
  }
  #bottom {
    position: relative;
    z-index: 1;
  }
`;

const Account = () => {
  
  return (
    <StyledAccount>
      <div id="top" className="pb-3">
        <div id="innerTop" className=" px-4">
          <div className="flex flex-col space-y-3 items-center justify-center py-8">
            <div className="h-20 w-20 md:h-32 md:w-32 border-2 rounded-full flex items-center justify-center text-3xl md:text-5xl">
              CS
            </div>
            <span className="uppercase font-semibold text-purple-500">
              switch profiles
            </span>
          </div>
          <div id="topBottom" className="">
            <div id="links" className="border-b pb-3 whitespace-nowrap text-sm md:text-base">
              <NavLink to="my-list" activeClassName="active">
                My List
              </NavLink>
              <NavLink to="downloads" activeClassName="active">Downloads</NavLink>
              <NavLink activeClassName="active" to="continue-watching">Continue Watching</NavLink>
            </div>
            <div className="pt-2 cursor-pointer">
              <div className="flex items-center space-x-1 text-sm md:text-base pb-4">
                <div className='opacity-90'>Sort: Recently Added</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom" className="pt-2 md:pt-5">
        
        <Outlet />
      </div>
    </StyledAccount>
  );
};

export default Account;
