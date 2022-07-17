import styled, { css } from 'styled-components';

import { ChipData } from '../../hooks/useCheckers';
import { fadeIn, selectable } from '../../styles/animation';

const isOptional = css`
  & > div {
    width: 20%;
    height: 20%;
    background: var(--red);
    opacity: 0.8;
  }
`;

const withChip = ({ color = '' } = {}) => css`
  & > div {
    width: 60%;
    height: 60%;
    background: linear-gradient(
      to right bottom,
      ${color} 0%,
      #eae9d2 5%,
      ${color} 30%
    );
  }
`;

export const Square = styled.button<{
  chip: ChipData | null;
  dark: number;
  optional: number;
}>`
  ${(props) => props.dark === 1 && selectable};
  ${fadeIn()};
  background: ${(props) => (props.dark === 1 ? 'var(--blue)' : '#eae9d2')};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.chip &&
    withChip({ color: props.chip.color ? '#413c38' : '#f4c45c' })};
  ${(props) => !props.chip && props.optional === 1 && isOptional};
`;
