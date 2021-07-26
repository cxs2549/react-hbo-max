import styled from "styled-components";
import {
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
  cover11,
  cover12,
  cover13,
  cover14,
  cover15,
  cover16,
  cover17,
  cover18,
  cover19,
  cover20,
} from "../../assets/art";

const StyledSearch = styled.div`
  color: white;
  margin-top: 56px;
  padding: 0 1rem;
  padding-top: 12px;
  height: 100vh;
  
	background-color: #923cb5;
	background-image: linear-gradient(to right, #371645 0%, #000000 74%);
 
	@media (min-width: 1024px) {
		padding: 0 1.25rem;

	}
  #wrapper {
    max-width: 1300px;
    margin: 0 auto;

  }
  input {
		transition: 250ms;
		border-radius: 0;
		border-color: #353549;
  }

  input[type="search"] {
    -webkit-appearance: none;
  }
  #pops {
    padding-bottom: 4.5rem;
  }
  #searchIcon {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    @media (min-width: 768px) {
      left: 0;
    }
    @media (min-width: 1280px) {
      left: 0;
    }
  }
`;

const Search = () => {
  const art = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    cover7,
    cover8,
    cover9,
    cover10,
    cover11,
    cover12,
    cover13,
    cover14,
    cover15,
    cover16,
    cover17,
    cover18,
    cover19,
    cover20,
  ];
  return (
    <StyledSearch>
      <div id="wrapper">
        <div className="w-full relative">
          <input
            type="search"
            placeholder="What are you looking for?"
            className=" pl-7 md:pl-8  py-2 border-b bg-transparent w-full focus:outline-none md:text-lg xl:text-xl"
          />
          <div className="absolute text-white" id="searchIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
        </div>
        <div id="pops" className="mt-8">
          <h3>Popular Searches</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-1 ">
            {art.map((image, i) => (
              <div>
                <img
                  src={image}
                  alt=""
                  className="rounded cursor-pointer hover:scale-105 transform transition duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledSearch>
  );
};

export default Search;
