import { useEffect, useState } from 'react';

export const useTicTacToe = () => {
  // const vars
  const initialBoard = Array.from({ length: 9 }).map(() => '');
  // State
  const [board, setBoard] = useState<string[]>(initialBoard);
  const [message, setMessage] = useState('');
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);

  // Functions
  const buttonClicked = (i: number) => {
    if (winner === null) {
      const arr = [...board];
      if (arr[i] === '') arr[i] = turn === 1 ? 'circle' : 'cross';
      setBoard(() => arr);
      setTurn((turn) => (turn === 1 ? 0 : 1));
    }
  };

  const reset = () => {
    setBoard(() => initialBoard);
    setMessage('');
    setTurn(0);
    setWinner(null);
  };

  // Effects
  useEffect(() => {
    const evalBoard = () => {
      for (let i = 0; i < 3; i++) {
        let initial = board[i];
        if (initial === board[i + 3] && initial === board[i + 6])
          return initial;
      }

      for (let i = 0; i < 7; i += 3) {
        let initial = board[i];
        if (initial === board[i + 1] && initial === board[i + 2])
          return initial;
      }

      if (board[0] === board[4] && board[0] === board[8]) return board[0];
      if (board[2] === board[4] && board[2] === board[6]) return board[2];

      return '';
    };
    const evl = evalBoard();
    if (evl !== '') setWinner(evl);
    else if (!board.includes('')) setWinner('');
  }, [board, setWinner]);

  useEffect(() => {
    let msg = '';
    if (winner !== '') {
      msg = `${winner} player is the winner!`;
      msg.charAt(0).toLocaleUpperCase();
    } else msg = 'Tie game, no winnner!';

    setMessage(msg);
  }, [setMessage, winner]);

  return { board, buttonClicked, message, reset, winner };
};
