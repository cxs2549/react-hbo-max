import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
$HBOPink: #FF00E4;
#root {
  z-index: -3;
  position: relative;
}
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
  margin-top: 56px;
  position: relative;
  z-index: -2;
}

@media (min-width: 768px) {
  main {
    margin-left: 56px;
  }
}

.modal-open {
  overflow: hidden;
}

h3 {
		font-size: 115%;
		font-weight: 600;
		text-transform: capitalize;
		padding: 0 1rem;
		padding-bottom: .35rem;
		@media (min-width: 768px) {
			padding: 0 2rem;
			padding-bottom: .45rem;
			font-size: 120%;
		}
		@media (min-width: 1024px) {
			font-size: 138%;
		}
	}

`;

export default GlobalStyle;
