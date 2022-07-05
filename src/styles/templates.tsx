import styled, { css } from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background: var(--white-rgba);
`;

export const focusable = css`
  &:focus {
    outline: none;
    border: 1px solid var(--blue);
    border-radius: 3px;
    padding: 5px;
  }
`;

export const hoverableProp =
  'ontouchstart' in window || navigator.maxTouchPoints ? 1 : 0;
