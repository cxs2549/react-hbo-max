import { cover3, cover18, cover16 } from "../../../assets/art";
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

const Continue = () => {
  const downloads = [
    { image: cover3, title: "blackhat", original: false, duration: "25%" },
    { image: cover18, title: "Warrior", original: true, duration: "15%" },
    { image: cover16, title: "The Little Things", original: true, duration: "59%" },
  ];
  return (
    <div>
      <Page page={downloads} />
    </div>
  );
};

export default Continue;
