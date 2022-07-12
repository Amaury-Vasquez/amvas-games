import { FaQuestion } from 'react-icons/fa';
import { GiThink } from 'react-icons/gi';
import { RPS } from './styles';
import { useRps } from '../../hooks/useRps';
import { GameEnd } from '../../components/GameEnd';
import { RpsHand } from '../../components/RpsHand';

const RockPaperScissors = () => {
  const {
    computerMove,
    defaultHand,
    endInfo,
    gameEnd,
    onHandClicked,
    reset,
    selected,
  } = useRps();

  const computerHand = (
    <>
      <RpsHand color="red" Icon={FaQuestion} />
      <RpsHand
        color="red"
        Icon={computerMove ? computerMove.Icon : FaQuestion}
      />
      <RpsHand color="red" Icon={FaQuestion} />
    </>
  );

  const userHand = () => {
    if (!selected)
      return (
        <>
          {defaultHand.map((item, i) => (
            <RpsHand
              callback={onHandClicked}
              color="blue"
              data={item}
              Icon={item.Icon}
              key={item.name + i}
            />
          ))}
        </>
      );
    return (
      <>
        <RpsHand color="blue" Icon={GiThink} />
        <RpsHand color="blue" Icon={selected.Icon} />
        <RpsHand color="blue" Icon={GiThink} />
      </>
    );
  };

  return (
    <RPS>
      {gameEnd && endInfo && (
        <GameEnd
          data={endInfo.data}
          lost={endInfo.message.includes('Computer')}
          message={endInfo.message}
          reset={reset}
        />
      )}
      {computerHand}
      {userHand()}
    </RPS>
  );
};

export default RockPaperScissors;
