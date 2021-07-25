import { cover1, cover9, cover20 } from "../../../assets/art";
import styled from "styled-components";
import Page from "../Page/Page";

const StyledPage = styled.div`
border: 1px solid white;
  #wrapper {
    grid-template-columns: 1.5fr 2fr;
  }
  #info {
    font-size: 12px;
  }
`;

const MyList = () => {
  const myList = [
    { image: cover1, title: "Euphoria", original: true, duration: "10%" },
    { image: cover9, title: "Scream", original: false, duration: "45%" },
    { image: cover20, title: "WW84", original: false, duration: "5%" },
  ];
  return (
    <div>
      <Page page={myList} />
    </div>
  );
};

export default MyList;
