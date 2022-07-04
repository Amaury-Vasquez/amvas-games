import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { blink, fadeIn, selectable } from '../../styles/animation';

export const Board = styled.div`
  ${fadeIn()};
  height: auto;
  display: grid;

  @media (min-width: ${DeviceSize.laptop}) {
    margin: 0 auto;
    width: 100%;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    margin-top: 20px;
  }

  @media (min-width: ${DeviceSize.smallTablet}) and (max-width: ${DeviceSize.tablet}) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    padding: 20px 50px;
  }

  @media (min-width: ${DeviceSize.mobile}) and (max-width: ${DeviceSize.smallTablet}) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    padding: 10px 20px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 0px 5px;
    margin-top: 10px;
  }
`;

export const GameInfo = styled.div`
  ${fadeIn()};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;

  & > span,
  > p {
    font-size: 1rem;
    text-transform: capitalize;
  }

  & > span {
    display: flex;
    align-items: center;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    height: auto;
    padding: 10px 0;
    margin-bottom: 20px;
    border: 1px solid var(--gray);
  }

  @media (max-width: ${DeviceSize.tablet}) {
  }

  @media (min-width: ${DeviceSize.mobile}) and (max-width: ${DeviceSize.smallTablet}) {
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    padding-top: 10px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > p {
    ${blink()};
    font-size: 1rem;
    color: var(--blue);
    margin-bottom: 20px;
    text-transform: capitalize;
  }

  & > div {
    height: 25px;
    width: 100%;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    padding: 0 200px;
  }

  @media (min-width: ${DeviceSize.smallTablet}) and (max-width: ${DeviceSize.tablet}) {
    padding: 0 100px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    padding: 0 20px;
  }
`;

export const MemoryGame = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: ${DeviceSize.laptop}) {
    padding: 30px 10px;
    margin: 0 auto;
    width: 1024px;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    width: 100vw;
    padding-bottom: 30px;
  }
`;

export const ResetButton = styled.button`
  ${selectable};
  height: 30px;
  width: 30px;
  display: flex;
  border-radius: 100%;
  text-transform: capitalize;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
  background: var(--blue);
  margin-left: 10px;

  & > svg {
    fill: #ffffff;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    height: 30px;
    width: 30px;
    & > svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    height: 20px;
    width: 20px;
    & > svg {
      font-size: 1rem;
    }
  }
`;
