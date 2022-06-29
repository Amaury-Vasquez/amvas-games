import styled, { keyframes } from 'styled-components';

import { fadeIn } from '../styles/animation';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled.div`
  ${fadeIn()};
  border: 1px solid var(--gray);
  border-top: 1px solid var(--blue);
  border-radius: 100%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.4s linear infinite;
`;
