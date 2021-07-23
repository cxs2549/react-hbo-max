import styled from "styled-components";

const StyledHubs = styled.div`
  background-color: black;
  width: 100%;
 
  margin-bottom: 56px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
  #imageWrapper {
    min-width: 160px;
    max-width: 160px;
    height: 76px;
    padding: 4px 32px;
    border-radius: 99999px;
    background-color: #1fd1f9;
    background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);

    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      padding: .25rem 0;
    }
    #imageBG {
      position: absolute;
      left: 50%;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 90%;
      width: 96%;
      background-color: black;
    }
  }
`;

const Hubs = ({ hubs }) => {
  return (
    <StyledHubs className='grid grid-cols-2 md:grid-cols-3'>
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
