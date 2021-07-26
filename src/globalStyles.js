import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

@media (min-width: 1280px) {
  main {
    margin-left: 0;
  }
}

.modal-open {
  overflow: hidden;
}

h1 {
      font-size: 1.45rem;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.1;
      padding-bottom: 0.25rem;
      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
      @media (min-width: 1024px) {
        font-size: 2.2rem;
      }
      @media (min-width: 1280px) {
        font-size: 300%;
        line-height: 1;
        padding-bottom: 0.5rem;
        text-shadow: 1px 1px 1px #6d2b63;
        letter-spacing: 0.03em;
      }
    }

h3 {
		font-size: 115%;
		font-weight: 600;
		text-transform: capitalize;
	
		padding-bottom: .35rem;
		@media (min-width: 768px) {
		
			padding-bottom: .45rem;
			font-size: 120%;
		}
		@media (min-width: 1024px) {
			font-size: 138%;
		}
    @media (min-width: 1280px) {
     
      padding-bottom: .5rem;
      font-size: 144%;
    }
    @media (min-width: 1340px) {
      padding: 0;
      padding-bottom: .7rem;
    }
	}

`

export default GlobalStyle
