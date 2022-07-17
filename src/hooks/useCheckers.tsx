import { useEffect, useState } from 'react';

export interface ChipData {
  color: boolean;
  i: number;
  j: number;
  queen: boolean;
}

export interface SquareData {
  chip: ChipData | null;
  dark: boolean;
  optional: boolean;
}

export const useCheckers = () => {
  // Initializers
  const initBoard = () => {
    let initialBoard: SquareData[][] = [];

    for (let i = 0; i < 10; i++) {
      initialBoard[i] = [];
      const optional = false;
      for (let j = 0; j < 10; j++) {
        let dark: boolean;
        let chip: ChipData | null = null;

        if (i % 2 === 0) dark = j % 2 === 1;
        else dark = j % 2 === 0;
        if (dark) {
          chip =
            i < 4
              ? { color: true, i, j, queen: false }
              : i > 5
              ? { color: false, i, j, queen: false }
              : null;
        }
        initialBoard[i][j] = { chip, dark, optional };
      }
    }
    return initialBoard;
  };

  // State
  const [board, setBoard] = useState(initBoard());
  const [selected, setSelected] = useState<SquareData | null>(null);
  const [darkTurn, setTurn] = useState(false);
  const [optionals, setOptionals] = useState<{ i: number; j: number }[]>([]);

  // Functions
  const squareClicked = (chip: ChipData | null) => {
    if (chip) {
      const { i, j } = chip;
      if (chip.color === darkTurn) setSelected(board[i][j]);
    }
  };

  const flatBoard = () => board.flat();

  useEffect(() => {
    const evalUp = (tmpBoard: SquareData[][], chip: ChipData) => {
      const { i, j } = chip;
      const options: { i: number; j: number }[] = [];

      if (tmpBoard[i - 1][j - 1] && !tmpBoard[i - 1][j - 1].chip) {
        tmpBoard[i - 1][j - 1].optional = true;
        options.push({ i: i - 1, j: j - 1 });
      }
      if (tmpBoard[i - 1][j + 1] && !tmpBoard[i - 1][j + 1].chip) {
        tmpBoard[i - 1][j + 1].optional = true;
        options.push({ i: i - 1, j: j + 1 });
      }

      return options;
    };

    if (selected && selected.chip) {
      const tmpBoard = [...board];
      optionals.forEach((obj) => (tmpBoard[obj.i][obj.j].optional = false));
      const tmp = evalUp(tmpBoard, selected.chip);
      setBoard(() => tmpBoard);
      setOptionals(tmp);
    }
  }, [selected]);

  useEffect(() => {}, [board]);

  return { flatBoard, squareClicked };
};
