import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

const isOptional = css`
  & > div {
    width: 20%;
    height: 20%;
    background: var(--red);
    opacity: 0.8;
  }
`;

export const Optional = styled.div`
  width: 20%;
  height: 20%;
  background: var(--red);
  opacity: 0.8;
`;

const chipColor = ({ color = '' } = {}) => css`
  background: linear-gradient(
    to right bottom,
    ${color} 0%,
    #eae9d2 5%,
    ${color} 30%
  );
`;

export const Chip = styled.div<{ white: number }>`
  width: 60%;
  height: 60%;
  ${(props) =>
    chipColor({ color: `${props.white === 1 ? '#413c38' : '#f4c45c'}` })}
`;

const onSelection = css`
  @media (hover: hover) {
    &:hover,
    :focus {
      outline: none;
      opacity: 0.8;
    }
  }
`;

export const SquareContainer = styled.div<{
  whiteSquare: boolean;
  whitePiece: boolean | undefined;
  selected: boolean;
  optional: boolean;
}>`
  ${fadeIn({ time: '0.2s' })};

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

  background-color: ${(props) =>
    props.whiteSquare ? 'var(--white-square)' : 'var(--dark-square)'};
  background: ${(props) => (props.whiteSquare ? 'var(--blue)' : '#eae9d2')};
  ${(props) => props.selected && onSelection};
`;

/* ${(props) =>
  props.whitePiece !== undefined &&
  withChip({ color: props.whitePiece ? '#413c38' : '#f4c45c' })}; */
/* ${(props) => props.optional && isOptional}; */
