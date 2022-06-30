import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

//Width and height expected to be given by father
export const Spinner = styled.div`
  position: relative;

  & > div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--blue);
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: ${bounce} 2s infinite ease-in-out;
    animation: ${bounce} 2s infinite ease-in-out;
  }

  & > :last-child {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
`;
