import styled, { css } from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn } from '../../styles/animation';
import { focusable } from '../../styles/templates';

const buttonHover = css`
  &:hover {
    opacity: 0.8;
  }
`;

export const Hand = styled.button<{ color: string; hoverable: number }>`
  ${focusable}
  width: 100%;
  height: 200px;
  border-radius: 5px;

  & > svg {
    ${fadeIn()};
    font-size: 3rem;
    color: white;
  }

  &:focus {
    opacity: 0.8;
  }

  background: ${(props) => `var(--${props.color})`};
  ${(props) => props.hoverable === 0 && buttonHover};

  @media (min-width: ${DeviceSize.smallTablet}) and (max-width: ${DeviceSize.laptop}) {
    & > svg {
      font-size: 3rem;
    }
  }

  @media (max-width: ${DeviceSize.smallTablet}) {
    /* width: 100%; */
    & > svg {
      font-size: 2rem;
    }
  }
`;
