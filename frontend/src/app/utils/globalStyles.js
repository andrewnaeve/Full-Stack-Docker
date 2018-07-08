import { injectGlobal } from 'styled-components';
import { reset } from './cssReset';

injectGlobal`
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
