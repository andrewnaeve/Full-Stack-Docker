import { createGlobalStyle } from 'styled-components';
import { reset } from './cssReset';

export default createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Merriweather', sans-serif;
  }
`;
