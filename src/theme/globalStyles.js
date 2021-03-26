import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

@font-face {
  font-family: 'Antonio Bold';
  src:
    url('../assets/fonts/Antonio-Bold.ttf') format('truetype'),
    /* Safari, Android, iOS */
    url('../assets/fonts/antonio-bold-webfont.woff') format('woff'),
    /* Pretty Modern Browsers */
    url('../assets/fonts/antonio-bold-webfont.woff2') format('woff2'),
    /* Super Modern Browsers */
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Anton", sans-serif;
}

a {
  word-wrap: break-all;
}

button{
  font-family: inherit;
  border: 0;
  outline:none;
  cursor: pointer;
}

`;

export default GlobalStyle;
