import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn } from '../../styles/animation';

const appearKeyframes = keyframes`
  from {
    background: none;
  }
  to {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const appear = css`
  animation-duration: 0.3s;
  animation-name: ${appearKeyframes};
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
`;

const gameHover = css`
  & > div {
    display: none;
  }

  @media (hover: hover) {
    &:hover {
      & > div {
        display: flex;
      }
    }
  }
`;

const onTouchDevice = css`
  & > div {
    display: flex;
  }
`;

export const GameCard = styled(Link)<{ hoverable: number }>`
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);

  & > div,
  > img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
  }

  & > img {
    ${fadeIn()}
  }

  &:focus {
    outline: none;
    & > div {
      display: flex;
    }
  }

  ${(props) => (props.hoverable === 1 ? onTouchDevice : gameHover)};

  @media (min-width: ${DeviceSize.laptop}) {
    height: 220px;
    width: 220px;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    height: 220px;
    width: 220px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) and (min-width: ${DeviceSize.mobile}) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    height: 250px;
    width: 250px;
  }
`;

export const GameInfo = styled.div`
  ${appear};
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-evenly;
  color: white;

  & > h3 {
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: capitalize;
  }

  & > p {
    font-weight: 400;
    &::first-letter {
      text-transform: uppercase;
    }
    font-size: 0.9rem;
  }

  & > svg {
    font-size: 2rem;
  }
`;
