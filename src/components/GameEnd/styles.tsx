import styled, { css } from 'styled-components';
import { Link as Anchor } from 'react-router-dom';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn, selectable } from '../../styles/animation';

export const End = styled.div`
  ${fadeIn()};
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);

  @media (min-width: ${DeviceSize.laptop}) {
    border-radius: 5px;
  }

  @media (max-width: ${DeviceSize.tablet}) {
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    padding: 0 10px;
  }
`;

export const EndMessage = styled.div`
  background: white;
  line-height: 2rem;
  display: grid;
  flex-direction: column;
  place-items: center;
  box-shadow: var(--shadow);
  border-radius: 5px;

  & > h3 {
    color: var(--gray-text);
    font-size: 1.1rem;
    font-weight: 500;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  & > span {
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    font-weight: 300;
    font-size: 1rem;

    & > svg {
      margin-left: 10px;
      color: #5bd666;
      font-size: 1.2rem;
    }
  }

  @media (min-width: ${DeviceSize.mobile}) {
    width: auto;
    grid-gap: 10px;
    padding: 30px;
    height: auto;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    padding: 20px;
    grid-gap: 10px;
  }
`;

const option = css`
  ${selectable};
  height: 40px;
  width: 100%;
  padding: 5px 30px;
  background: var(--blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 1rem;
  & > svg {
    margin-left: 10px;
    font-size: 1.2rem;
  }
`;

export const Link = styled(Anchor)`
  ${option};
`;

export const ResetButton = styled.button`
  ${option};
`;
