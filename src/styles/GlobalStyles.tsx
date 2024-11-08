import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Markazi+Text:wght@400..700&family=Poppins:wght@700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 body {
   font-family: 'Roboto', sans-serif;
   background-Color:#F7F9FC;
   }

`;

export default GlobalStyles;