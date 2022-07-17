import { Square } from './styles';
import { ChipData } from '../../hooks/useCheckers';
import { useItemClick } from '../../hooks/useItemClick';

export const CheckersSquare = (props: {
  callback: Function;
  chip: ChipData | null;
  dark: boolean;
  optional: boolean;
}) => {
  const { callback, chip, dark, optional } = props;
  const handleClick = useItemClick();
  return (
    <Square
      chip={chip}
      dark={dark ? 1 : 0}
      onClick={(e) => {
        handleClick(e);
        callback(chip);
      }}
      optional={optional ? 1 : 0}
      disabled={!dark}
    >
      {(chip || optional) && <div />}
    </Square>
  );
};
