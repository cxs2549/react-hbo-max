import styled from "styled-components";
import hero from "../../../assets/hero.png";

const StyledHero = styled.div`
  img {
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
    height: 100%;
    width: 100%;
  }
  #info {
    background-image: linear-gradient(#0f0337, black);
    color: white;
    height: 130px;
    @media (min-width: 768px) {
      height: 165px;
    }

    h1 {
      letter-spacing: 0.1em;
      text-transform: uppercase;
      line-height: 1.15;
      font-weight: 700;
      font-size: 1.2rem;
      opacity: .95;
      @media (min-width: 768px) {
        font-size: 2rem;
        top: -3.7rem;
      }
    }
    h2 {
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
      padding-bottom: 3px;
      @media (min-width: 768px) {
        padding-top: 1rem;
        font-size: 1rem;
      }
    }
    p {
      font-size: 0.8rem;
      line-height: 1.25;
      opacity: 0.9;
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
    }
    button {
      font-weight: 700;
      letter-spacing: 0.2em;
      padding: 0.6em 1.5em 0.6em;
      width: max-content;
      white-space: nowrap;
      font-size: 0.75rem;
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
      &:last-child {
        background: linear-gradient(to top, #543abf 0%, #ff00e6e3 50%);
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <img src={hero} alt="" />

      <div id="info" className="px-4 md:px-8 relative">
        <h1 className="absolute hidden md:block -top-8">
          Space Jam: <br /> A New Legacy
        </h1>
        <h2>Now playing</h2>
        <p>
          In theaters and on HBO Max.  Streaming <br /> through Aug 15.
        </p>

        <div className="text-sm flex space-x-4 mt-6">
          <button className="border-2 rounded-full uppercase font-semibold flex items-center space-x-1">
            <div className="text-brand-bright-pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-brand-pink"
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
          <button className="border-2 rounded-full uppercase font-semibold inline bg-brand-bright-pink bg-opacity-70 border-none">
            more info
          </button>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
