import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';
import theme from './theme';

const { colors } = theme;

const GlobalStyles = createGlobalStyle`
 ${modernNormalize}
  body {
  font-family: 'Inter', sans-serif;
  color: ${colors.primaryTtextColor};
  background:${colors.backgroundLight} ;
  margin: 0;
  padding: 0;
   
  }
  main {
  padding-bottom: 80px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

`;
export default GlobalStyles;
