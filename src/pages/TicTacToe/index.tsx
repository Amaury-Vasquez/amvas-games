import { ImCross } from 'react-icons/im';
import { Helmet } from 'react-helmet-async';

import { GameEnd } from '../../components/GameEnd';
import { Board, Square, TicTacGame } from './styles';
import { hoverableProp } from '../../styles/templates';
import { useTicTacToe } from '../../hooks/useTicTacToe';

const TicTacToe = () => {
  const { board, buttonClicked, message, reset, winner } = useTicTacToe();

  return (
    <>
      <Helmet>
        <title> Tic tac toe | Amaury Vasquez </title>
      </Helmet>
      <TicTacGame>
        {winner !== null && (
          <GameEnd data={message} message="Game ended!" reset={reset} />
        )}
        <Board hoverable={hoverableProp}>
          {board.map((item, i) => (
            <Square key={`${item}+${i}`} onClick={() => buttonClicked(i)}>
              {item === 'circle' && <div />}
              {item === 'cross' && <ImCross />}
            </Square>
          ))}
        </Board>
      </TicTacGame>
    </>
  );
};

export default TicTacToe;
