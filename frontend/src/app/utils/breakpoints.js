import { css } from 'styled-components';

// example:
// import { media } from '../../utilities/breakpoints';
// ${media.tablets`
//    font-size: 1.6rem;
// `};

export const media = {
  smallPhones: (...args) => css`
    @media (max-width: 320px) {
      ${css(...args)};
    }
  `,
  largePhones: (...args) => css`
    @media (max-width: 400px) {
      ${css(...args)};
    }
  `,
  tablets: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 1200) {
      ${css(...args)};
    }
  `
};
