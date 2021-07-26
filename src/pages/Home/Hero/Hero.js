import styled from "styled-components";
import hero from "../../../assets/hero.png";

const StyledHero = styled.div`
  height: 40vh;
  position: relative;
  width: 100%;
  @media (min-width: 640px) {
    height: 50vh;
  }
  @media (min-width: 768px) {
    height: 55vh;
  }
  @media (min-width: 1024px) {
    height: 53vh;
  }
  @media (min-width: 1280px) {
    height: 72vh;
  }

  #hero {
    background-image: url(${hero});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 30vh;
    max-width: 100vw;
    margin: 0 auto;

    @media (min-width: 640px) {
      height: 40vh;
    }
    @media (min-width: 768px) {
      height: 45vh;
    }

    @media (min-width: 1280px) {
      height: 75vh;
    }
    transition: height 0.7s;
  }
  #overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;

    background-image: linear-gradient(to top, #101641 16%, transparent 100%);
  }
  #textContainer {
    max-width: 1300px;
    margin: 0 auto;
  }
  #textWrapper {
    color: white;

    width: 100%;
    padding: 0 1rem;
    position: absolute;
    bottom: -6rem;
    max-width: 1300px;
    
    @media (min-width: 1280px) {
      left: 50%;
      transform: translateX(-50%);
      padding: 0;
      bottom: 0;
    }
    h2 {
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: 700;
      opacity: 0.95;
      @media (min-width: 768px) {
        font-size: 1rem;
      }
      @media (min-width: 1024px) {
        text-shadow: 1px 1px 1px #6d2b63;
        font-size: 1.2rem;
      }
    }
    p {
      font-size: 0.83rem;
      line-height: 1.25;
      opacity: 0.9;
      padding-top: 4px;
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
      @media (min-width: 1024px) {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
        font-size: 1rem;
      }
      @media (min-width: 1268px) {
        font-size: 1.2rem;
      }
    }
    button {
      font-weight: 700;
      letter-spacing: 0.15em;
      padding: 0.6em 1.5em 0.6em;
      width: max-content;
      white-space: nowrap;
      font-size: 0.75rem;
      cursor: pointer;
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
      @media (min-width: 1280px) {
        font-size: 1rem;
      }
      &:first-child {
        position: relative;
        z-index: 500;
        transition: all 400ms;
        &:hover {
          border-color: #ff00e3;
        }
      }
      &:last-child {
        background-color: #c21bd8;
        transition: opacity 400ms;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div id="imageContainer" className="relative">
        <div id="hero"></div>
        <div id="overlay"></div>
      </div>
      
        <div className="relative">
          <div id="textWrapper">
            <h1>
              Space Jam: <br /> A New Legacy
            </h1>
            <h2>Now playing</h2>
            <p>
              In theaters and on HBO Max. Streaming <br /> through Aug 15.
            </p>
            <div className="text-sm flex space-x-4 mt-6">
              <button className="border-2  rounded-full uppercase font-semibold flex items-center space-x-1">
                <div className="text-brand-bright-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-pink"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4>watch</h4>
              </button>
              <button className="rounded-full uppercase font-semibold inline">
                more info
              </button>
            </div>
          </div>
        </div>
   
    </StyledHero>
  );
};

export default Hero;
