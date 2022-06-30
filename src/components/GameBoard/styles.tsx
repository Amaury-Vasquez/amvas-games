import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const Board = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  grid-gap: 20px;

  @media (min-width: ${DeviceSize.laptop}) {
    grid-template-columns: repeat(4, 1fr);
    padding: 30px 10px;
  }

  @media (max-width: ${DeviceSize.tablet}) and (min-width: ${DeviceSize.smallTablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 50px 60px;
    grid-gap: 50px 0;
  }

  @media (max-width: ${DeviceSize.smallTablet}) and (min-width: ${DeviceSize.mobile}) {
    grid-template-columns: 1fr 1fr;
    padding: 20px 40px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 20px;
  }
`;
