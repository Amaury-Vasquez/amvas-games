import { SquareValues } from '../../hooks/useCheckers';
import { Chip, SquareContainer, Optional } from './styles';

export const Square = (props: SquareValues) => {
  const { piece, active, whiteSquare, optional, selected, callback } = props;

  return (
    <SquareContainer
      optional={optional}
      whitePiece={piece.whitePiece}
      selected={selected}
      whiteSquare={whiteSquare}
      onClick={() => {
        if (callback) callback(props);
      }}
    >
      {!active && optional && <Optional />}
      {active && <Chip white={piece.whitePiece ? 1 : 0} />}
    </SquareContainer>
  );
};
