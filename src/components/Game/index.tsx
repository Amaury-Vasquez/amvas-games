import { GameCard, GameInfo } from './styles';

import { SkeletonLoader } from '../SkeletonLoader';
import { GameData } from '../../hooks/useGameList';
import { useImageLoad } from '../../hooks/useImageLoad';

export const Game = (props: { gameData: GameData }) => {
  const { gameData } = props;
  const { img, loaded } = useImageLoad(gameData.imageUrl);

  return (
    <GameCard
      hoverable={'ontouchstart' in window || navigator.maxTouchPoints ? 1 : 0}
      to={gameData.link}
    >
      {loaded ? (
        <>
          <img alt={gameData.name} src={img} />
          <GameInfo>
            <h3> {gameData.name} </h3>
            <p> {gameData.info} </p>
            <gameData.Icon />
          </GameInfo>
        </>
      ) : (
        <SkeletonLoader />
      )}
    </GameCard>
  );
};
