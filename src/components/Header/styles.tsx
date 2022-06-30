import styled from 'styled-components';
import { Link as Anchor } from 'react-router-dom';

import { DeviceSize } from '../../DeviceSize';

export const Head = styled.header`
  position: relative;
  z-index: 1;

  @media (min-width: ${DeviceSize.laptop}) {
    margin: 0 auto;
    width: 1024px;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    padding: 15px 30px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    width: 100vw;
  }
`;

export const LeftLink = styled(Anchor)`
  & > svg {
    margin-right: 5px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  justify-content: space-between;
  height: auto;
  border-radius: 3px;
  margin: 0 auto;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;
    color: var(--gray-text);
    font-weight: 300;

    & > svg {
      font-size: 1.5rem;
    }

    &:hover,
    :focus {
      outline: none;
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @media (min-width: ${DeviceSize.laptop}) {
    padding: 15px 25px;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    padding: 15px 30px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    padding: 10px;
  }
`;

export const RightLink = styled(Anchor)`
  & > svg {
    margin-left: 5px;
  }
`;
