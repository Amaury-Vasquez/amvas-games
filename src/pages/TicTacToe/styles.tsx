import styled, { css } from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

const isHoverable = css`
  & > button {
    &:hover {
      background: rgba(256, 256, 256, 0.2);
    }
  }
`;

export const Board = styled.div<{ hoverable: number }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border-radius: 5px;
  background: #070909;

  button:nth-child(-n + 6) {
    border-bottom: 5px solid #fefefe;
  }

  button:nth-child(3n + 4),
  button:nth-child(1),
  button:nth-child(2),
  button:nth-child(5),
  button:nth-child(8) {
    border-right: 5px solid #fefefe;
  }

  ${(props) => props.hoverable === 0 && isHoverable};

  @media (min-width: ${DeviceSize.smallTablet}) {
    width: 500px;
    height: 500px;
    margin: 0 auto;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    width: 100%;
    height: 100%;
  }
`;

export const Square = styled.button`
  height: 100%;
  width: 100%;

  & > svg {
    font-size: 2.5rem;
    color: white;
  }

  & > div {
    height: 50%;
    width: 50%;
    border: 10px solid white;
    border-radius: 100%;
    margin: 0 auto;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    padding: 30px;
  }
`;

export const TicTacGame = styled.div`
  width: 100%;
  height: auto;

  @media (min-width: ${DeviceSize.laptop}) {
    margin: 0 auto;
    width: 1024px;
    padding: 50px 0;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    width: 100vw;
    height: 100vw;
    padding: 30px 10px;
  }
`;
