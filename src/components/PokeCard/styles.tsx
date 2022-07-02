import styled, { css } from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn } from '../../styles/animation';

const flip = ({ direction = '180deg' } = {}) => css`
  transition: transform 0.4s;
  transform: rotateY(${direction});
`;

export const Card = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;

  & > div {
    height: inherit;
    width: inherit;
  }

  &:focus {
    opacity: 0.5;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const CoverDiv = styled.div<{ willFlip: number }>`
  & > img {
    ${(props) => props.willFlip === 1 && flip()}
    ${fadeIn({ time: '0.4s' })};
    border-radius: 5px;
    box-shadow: var(--shadow);
    height: inherit;
    width: inherit;
  }
`;

export const PokemonDiv = styled.div<{ willFlip: number }>`
  ${(props) => props.willFlip === 1 && flip({ direction: '-180deg' })}
  ${fadeIn({ time: '0.4s' })};
  border-radius: 5px;
  padding: 5px;
  box-shadow: var(--shadow);
  background: repeating-linear-gradient(
    to bottom right,
    white 0%,
    white 3%,
    #f5f5f5 3%,
    #f5f5f5 3%,
    white 4%,
    white 6%,
    #f5f5f5 6%,
    #f5f5f5 6%,
    white 8%,
    white 10%,
    #f5f5f5 11%,
    #f5f5f5 11%,
    white 12%,
    white 16%,
    #f5f5f5 16%,
    #f5f5f5 18%
  );

  & > div {
    height: inherit;
    width: inherit;
    background: white;
    padding: 20px;
    border: 2px solid #f5f5f5;
    border-radius: 50%;
    & > img {
      height: 100%;
      width: 100%;
    }
  }
`;
