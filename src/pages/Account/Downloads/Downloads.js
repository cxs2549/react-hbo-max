import { cover15, cover19, cover6 } from "../../../assets/art";
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

const Downloads = () => {
  const downloads = [
    { image: cover15, title: "The Hunt", original: true, duration: "75%" },
    { image: cover19, title: "White Chicks", original: false, duration: "15%" },
    { image: cover6, title: "Identity Thief", original: false, duration: "59%" },
  ];
  return (
    <div>
      <Page page={downloads} />
    </div>
  );
};

export default Downloads;
