import { keyframes, css } from 'styled-components';

const blinkKeyframes = keyframes`
  0% {
    /* transform: scale(1); */
    opacity: 1;
  }

  50% {
    /* transform: scale(1.1); */
    opacity: 0.2;
  }

  100% {
    /* transform: scale(1); */
    opacity: 1;
  }
`;

export const blink = ({ time = '1s' } = {}) => css`
  animation: ${time} ${blinkKeyframes} ease-in-out infinite;
`;

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const fadeOutKeyframes = keyframes`
  from {
    filter: blur(0);
    opacity: 1;
  }
  
  to {
    filter: blur(5px);
    opacity: 0;
  }
`;

export const fadeIn = ({ time = '2s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeOutKeyframes} ${type};
  `;

export const selectableHover = css`
  @media (hover: hover) {
    &:hover {
      outline: none;
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

export const selectable = css`
  transition: transform 0.2s ease;

  &:focus {
    outline: none;
    transform: scale(1.1);
    opacity: 0.8;
  }

  ${!('ontouchstart' in window || navigator.maxTouchPoints) && selectableHover}
`;

export const flip = ({ direction = '180deg' } = {}) => css`
  transition: transform 0.4s;
  transform: rotateY(${direction});
`;
