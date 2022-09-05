import { useCheckers } from '../../hooks/useCheckers';
import { CheckersContent, Rules } from './styles';
import { CheckersBoard } from '../../components/CheckersBoard';

const Checkers = () => {
  // const board = Array.from({ length: 64 });
  // const { flatBoard, squareClicked } = useCheckers();
  const { boardDimension, callback, gameBoard } = useCheckers();
  return (
    <CheckersContent>
      <CheckersBoard
        boardDimension={boardDimension}
        callback={callback}
        gameBoard={gameBoard}
      />
      <Rules>
        <h3> How to play </h3>
        <p>
          On your turn, move any of your checkers by the movement rules
          described below, after you move one checker your turn is over. The
          game continues with players alternating turns.
        </p>
        <h4> Movement rules</h4>
        <p>
          Checkers can move diagonally forward, towards your opponent's side of
          the board, if a checker becomes a queen, it can move diagonally
          forwards or backwards. <br />
          Move your checker one space diagonally to an open adjacent square; or
          jump one or more checkers diagonally to an open square adjacent to the
          checker you jumped. <br />
          When you jump an opponent's checker you capture it. <br />
          If all squares adjacent to your checker are occupied, your checker is
          blocked and cannot move. <br />
        </p>
        <h4> Capturing An Opponent's Checker</h4>
        <p>
          If you jump an opponent's checker, you capture it. Remove it from play
          afterwards. If you can jump an opponents checker you HAVE TO.
        </p>
        <h4> Becoming a "Queen" </h4>
        <p>
          As soon as one of your checkers reaches the first row on your
          opponent's side of the gameboard, it becomes a King. A King checker
          can move forward or backward on the gameboard
        </p>
        <h4> HOW TO WIN</h4>
        <p>
          The first player to capture all opposing checkers from the gameboard
          wins the game, also if one player can't move automatically loses.
        </p>
      </Rules>
    </CheckersContent>
  );
};

export default Checkers;
