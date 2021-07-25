import styled from "styled-components";

const StyledList = styled.div`

  #imageContainer {
    display: flex;
    overflow-x: scroll;
    padding: 0 1rem;
    scrollbar-width: none;
    @media (min-width: 768px) {
      padding: 0 1.25rem;
      padding-bottom: 20px;
    }
    @media (min-width: 1280px) {
      padding: 0;
      padding-bottom: 20px;

    }
    #image {
      min-width: 48%;
      cursor: pointer;
      img {
				transition: transform 400ms;
        &:hover {
          transform: scale(1.02);
        }
      }
      @media (min-width: 768px) {
        min-width: ${(props) => props.size || "30%"};
      }
      @media (min-width: 1024px) {
        min-width: ${(props) => props.size || "20%"};
      }
    }
  }
`;

const List = ({ title, art, size }) => {
  return (
    <StyledList size={size}>
      <h3>{title}</h3>
      <div id="imageContainer" className="gap-4">
        {art.map((image, i) => (
          <div key={i} id="image">
            <img src={image} alt="" className="rounded" />
          </div>
        ))}
      </div>
    </StyledList>
  );
};

export default List;
