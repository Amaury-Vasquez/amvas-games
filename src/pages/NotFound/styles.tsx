import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const Credits = styled.p`
  font-size: 0.6rem;
  font-style: italic;
`;

export const Image = styled.img`
  width: auto;

  @media (min-width: ${DeviceSize.laptop}) {
    height: 300px;
  }

  @media (max-width: ${DeviceSize.tablet}) {
    height: 40vh;
  }
`;

export const Landing = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;

  @media (min-width: ${DeviceSize.laptop}) {
    height: 500px;
    padding: 20px 50px;
    & > * {
      margin-top: 40px;
    }

    & > :last-child {
      margin-top: 5px;
    }
  }

  @media (max-width: ${DeviceSize.tablet}) {
    height: 60vh;
    padding: 0 40px;
    margin-top: 120px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: 100px;
  }
`;

export const Text = styled.h3`
  color: #0582c2;
  text-align: center;
  font-size: 1.2rem;
`;
