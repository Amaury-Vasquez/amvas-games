import { MdOutlineRestartAlt } from 'react-icons/md';

import { PokeCard } from '../PokeCard';
import { ProgressBar } from '../ProgressBar';
import { useItemClick } from '../../hooks/useItemClick';
import { useMemoryGame } from '../../hooks/useMemoryGame';
import { Board, GameInfo, Loading, MemoryGame, ResetButton } from './styles';

export const PokeGame = () => {
  const { loadCount, cover, images, limit, loaded, reset, score } =
    useMemoryGame();
  const handleClick = useItemClick();

  const mapCards = () => {
    return images.map((item, i) => {
      // const id = item.replace(raw, '');
      return (
        <PokeCard
          alt={`pokesprite${item}`}
          cover={cover}
          key={`pokemon:${item}+${i}`}
          img={item}
        />
      );
    });
  };

  return (
    <MemoryGame>
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
