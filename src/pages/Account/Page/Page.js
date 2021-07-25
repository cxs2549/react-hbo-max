import { cover1, cover9, cover20 } from "../../../assets/art";
import styled from "styled-components";

const StyledPage = styled.div`
  #imageWrapper {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  #wrapper {
    grid-template-columns: 1.5fr 2fr;
  }
  #info {
    font-size: 12px;
  }
  img {
    position: relative;
  }
  #durationBar {
    bottom: 2rem;
  }
`;

const Page = ({ page }) => {
  return (
    <StyledPage className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {page.map((item, i) => (
        <div key={i} id="wrapper" className="grid grid-cols-2 gap-3">
          <div id="imageWrapper" className="relative">
            <img src={item.image} className="rounded" alt="" />
            <div className="absolute top-1 right-1 opacity-75 text-purple-700">
              <i class="fa fa-play" aria-hidden="true"></i>
            </div>
            <div className="absolute top-2 right-2 shadow">
              <i class="fa fa-play" aria-hidden="true"></i>
            </div>
            <div className="absolute bottom-1 left-2 right-2 rounded bg-black bg-opacity-60 h-1 durationBar">
              <div
                style={{ width: item.duration }}
                className="bg-gradient-to-r from-green-400 to-brand-pink h-full rounded-l opacity-80"
              ></div>
            </div>
          </div>
          <div id="info">
            <p>{item.title}</p>
            {item.original && <span className="opacity-70">HBO</span>}
          </div>
        </div>
      ))}
    </StyledPage>
  );
};

export default Page;
