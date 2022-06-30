import styled, { css, keyframes } from 'styled-components';

const placeHolderKeyframes = keyframes`
  from {
    background-position: -400px 0;
  }
  to {
    background-position: 400px 0;
  }
`;

const skeleton = ({ time = '1s' } = {}) => css`
  animation-duration: ${time};
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${placeHolderKeyframes};
`;

export const Skeleton = styled.div`
  display: block !important;
  border-radius: inherit;

  & > div {
    ${skeleton({ time: '1.5s' })};
    background: linear-gradient(
      to right,
      var(--white-rgba) 0%,
      #ffffff 40%,
      var(--white-rgba) 60%
    );
    background-size: 400px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
  }
`;
