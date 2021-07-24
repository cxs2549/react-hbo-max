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
  background-image: linear-gradient(to top, #1f1128 0%, black 74%);
  height: 100%;
  #pops {
    padding-bottom: 4.5rem;
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
      <div className="w-full px-4 md:px-8">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="rounded px-4  py-2 mt-3 bg-gray-800 w-full"
        />
      </div>
      <div id="pops" className="mt-8">
        <h3>Popular Searches</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-1 px-4 md:px-8">
          {art.map((image, i) => (
            <div>
              <img src={image} alt="" className='rounded' />
            </div>
          ))}
        </div>
      </div>
    </StyledSearch>
  );
};

export default Search;
