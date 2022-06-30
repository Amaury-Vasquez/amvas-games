import { FC } from 'react';
import { MdMemory, MdOutlineFrontHand } from 'react-icons/md';
import { GiTicTacToe, GiToken } from 'react-icons/gi';

export interface GameData {
  imageUrl: string;
  Icon: FC;
  info: string;
  link: string;
  name: string;
}

export const useGameList = () => {
  const games: GameData[] = [
    {
      imageUrl: 'https://i.imgur.com/UYQhEzt.jpg',
      Icon: MdMemory,
      info: 'memory game',
      link: '/pokemory',
      name: 'pokemory',
    },
    {
      imageUrl: 'https://i.imgur.com/KpUpxXb.jpg?1',
      Icon: GiTicTacToe,
      info: 'two players offline game',
      link: '/tic-tac-toe',
      name: 'tic tac toe',
    },
    {
      imageUrl: 'https://i.imgur.com/nCR9uUJ.jpg?1',
      Icon: MdOutlineFrontHand,
      info: 'offline vs computer game',
      link: '/rock-paper-scissors',
      name: 'rock paper scissors',
    },
    {
      imageUrl: 'https://i.imgur.com/kq9UlDU.jpg?1',
      Icon: GiToken,
      info: 'two players offline game',
      link: '/checkers',
      name: 'Checkers',
    },
  ];

  return games;
};
