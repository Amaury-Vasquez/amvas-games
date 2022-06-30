import styled, { keyframes } from 'styled-components';

// import { DeviceSize } from '../../DeviceSize';
import { blink } from '../../styles/animation';

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  & > div {
    height: 50px;
    width: 50px;
  }

  & > h3 {
    ${blink()};
    color: var(--blue);
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
