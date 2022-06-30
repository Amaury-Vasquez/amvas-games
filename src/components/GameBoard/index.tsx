import { Board } from './styles';
import { useGameList } from '../../hooks/useGameList';
import { useImageLoad } from '../../hooks/useImageLoad';
import { Game } from '../Game';

export const GameBoard = () => {
  const games = useGameList();

  return (
    <Board>
      {games.map((item, i) => (
        <Game gameData={item} key={item.name + i} />
      ))}
    </Board>
  );
};
