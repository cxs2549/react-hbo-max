import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  z-index: 1;
}

html,
body {
  scrollbar-width: none;
}

main {
  /* margin-top: 56px; */
  position: relative;
  z-index: 0;
}

@media (min-width: 768px) {
  main {
    margin-left: 56px;
  }
}

.modal-open {
  overflow: hidden;
}

`;

export default GlobalStyle;
