import styled, { css } from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const RPS = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  place-items: center;

  @media (min-width: ${DeviceSize.laptop}) {
    grid-row-gap: 20px;
    grid-column-gap: 10px;
    width: 1024px;
    padding: 70px 50px;
  }

  @media (min-width: ${DeviceSize.smallTablet}) and (max-width: ${DeviceSize.laptop}) {
    width: 100%;
    padding: 50px;
    grid-gap: 30px;
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    width: 100%;
    padding: 50px 10px;
    grid-gap: 10px;
  }
`;
