import styled from "styled-components";

const StyledHubs = styled.div`
  background-color: black;
  width: 100%;
  margin-bottom: 56px;
  /* gap: .25rem; */
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    padding: 1rem 2rem;
    padding-bottom: 0;
  }

  #imageWrapper {
    min-width: 49%;
    height: 76px;
    padding: 4px 32px;
    border-radius: 99999px;
    margin-bottom: 1rem;
    background-color: #1fd1f9;
    background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    @media (min-width: 768px) {
      min-width: 19%;
    }
    @media (min-width: 1024px) {
      min-width: 19%;
    }
    @media (min-width: 1536px) {
      min-width: 9%;
    }

    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      padding: .5rem 0;
    }
    #imageBG {
      position: absolute;
      left: 50%;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 92%;
      width: 97%;
      background-color: black;
    }
  }
`;

const Hubs = ({ hubs }) => {
  return (
    <StyledHubs className=''>
      {hubs.map((hub, i) => (
        <div key={i} id="imageWrapper">
          <div className=" rounded-full h-full" id="imageBG">
            <img src={hub} alt="" />
          </div>
        </div>
      ))}
    </StyledHubs>
  );
};

export default Hubs;
