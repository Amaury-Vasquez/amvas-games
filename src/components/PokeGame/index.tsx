import { MdOutlineRestartAlt } from 'react-icons/md';

import { GameEnd } from '../GameEnd';
import { PokeCard } from '../PokeCard';
import { ProgressBar } from '../ProgressBar';
import { useItemClick } from '../../hooks/useItemClick';
import { useMemoryGame } from '../../hooks/useMemoryGame';
import { Board, GameInfo, Loading, MemoryGame, ResetButton } from './styles';

export const PokeGame = () => {
  const {
    callback,
    cover,
    cards,
    gameEnded,
    getTime,
    limit,
    loadCount,
    loaded,
    reset,
    score,
    turns,
  } = useMemoryGame();
  const handleClick = useItemClick();

  const mapCards = () => {
    return cards.map((data, i) => {
      return (
        <PokeCard
          alt={`pokesprite+${i}`}
          callback={callback}
          cover={cover}
          data={data}
          key={`pokemon:${i}`}
        />
      );
    });
  };

  return (
    <MemoryGame>
      {gameEnded && (
        <GameEnd
          data={`Time: ${getTime()}s, turns: ${turns}`}
          message="Congratulations, you have won!"
          reset={reset}
        />
      )}
      {loaded ? (
        <>
          <GameInfo>
            <p> score: {score} </p>
            <span>
              reset
              <ResetButton
                onClick={(e) => {
                  handleClick(e);
                  reset();
                }}
              >
                <MdOutlineRestartAlt />
              </ResetButton>
            </span>
          </GameInfo>
          <Board>{mapCards()}</Board>
        </>
      ) : (
        <Loading>
          <p> loading... </p>
          <ProgressBar loadCount={loadCount} limit={limit} />
        </Loading>
      )}
    </MemoryGame>
  );
};
