import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const Content = styled.div`
  height: auto;
  border-radius: 3px;

  @media (min-width: ${DeviceSize.laptop}) {
    width: 1024px;
    margin: 0 auto;
    padding: 30px 10px;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    width: 100vw;
  }
`;

export const Games = styled.div`
  height: auto;
  width: 100%;

  & > h2 {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: left;
    padding: 10px 15px;
    border-bottom: 1px solid var(--gray);

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (min-width: ${DeviceSize.laptop}) {
    padding: 15px 20px;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    padding: 20px 30px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
  }
`;

export const Message = styled.article`
  text-align: center;
  line-height: 2rem;

  & > h1 {
    font-weight: 500;
    font-size: 1.2rem;
  }

  & > p {
    font-weight: 300;
    font-size: 1rem;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    width: 60%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 20px;
    & > h1 {
      margin-bottom: 10px;
    }
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    width: 100%;
    padding: 20px 100px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    width: 100%;
    padding: 20px;

    & > p {
      text-align: justify;
    }
  }
`;
