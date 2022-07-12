import { FC, useEffect, useState } from 'react';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

export interface RpsCardProps {
  Icon: FC;
  name: string;
}

export const useRps = () => {
  // Initial variables
  const defaultHand: RpsCardProps[] = [
    {
      Icon: FaHandPaper,
      name: 'paper',
    },
    {
      Icon: FaHandRock,
      name: 'rock',
    },
    { Icon: FaHandScissors, name: 'scissors' },
  ];

  // State
  const [computerMove, setComputerMove] = useState<RpsCardProps | null>(null);
  const [endInfo, setInfo] = useState<{
    data: string;
    message: string;
  } | null>(null);
  const [gameEnd, setEnd] = useState(false);
  const [selected, setSelected] = useState<RpsCardProps | null>(null);

  // Functions
  const onHandClicked = (data: RpsCardProps) => {
    if (!selected) setSelected(data);
  };
  const reset = () => {
    setComputerMove(() => null);
    setEnd(() => false);
    setInfo(() => null);
    setSelected(() => null);
  };
  // Effects
  useEffect(() => {
    if (selected) {
      const randomMove = Math.floor(Math.random() * 3);
      setComputerMove(defaultHand[randomMove]);
    }
  }, [selected, setComputerMove]);

  useEffect(() => {
    const evalWinner = (a: string, b: string) => {
      console.log(a, b);
      if (a === 'rock') {
        if (b === 'scissors') return 1;
        return b === 'paper' ? 0 : -1;
      }
      if (a === 'paper') {
        if (b === 'rock') return 1;
        return b === 'scissors' ? 0 : -1;
      }
      if (a === 'scissors') {
        if (b === 'paper') return 1;
        return b === 'rock' ? 0 : -1;
      }
      return -1;
    };

    let render = true;

    if (render === true) {
      if (!gameEnd && selected && computerMove) {
        setTimeout(() => {
          const winner = evalWinner(selected.name, computerMove.name);
          if (winner === 1)
            setInfo({
              data: `${selected.name} beats ${computerMove.name}`,
              message: 'You are the winner',
            });
          else if (winner === 0)
            setInfo({
              data: `${computerMove.name} beats ${selected.name}`,
              message: 'Computer is the winner',
            });
          else reset();
        }, 1000);
      }
    }

    return () => {
      render = false;
    };
  }, [computerMove, reset, selected, setInfo]);

  useEffect(() => {
    if (endInfo !== null) setEnd(true);
  }, [endInfo]);

  return {
    computerMove,
    defaultHand,
    endInfo,
    gameEnd,
    onHandClicked,
    reset,
    selected,
  };
};
