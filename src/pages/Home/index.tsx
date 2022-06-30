import { Content, Games, Message } from './styles';
import { GameBoard } from '../../components/GameBoard';

const Home = () => {
  return (
    <Content>
      <Message>
        <h1>Hello, welcome to my game page!</h1>
        <p>
          This is a project created with the intention to recolect and show some
          basic games I created in React, so they can be played by whoever with
          the intention to. <br />
        </p>
      </Message>
      <Games>
        <h2> game list </h2>
        <GameBoard />
      </Games>
    </Content>
  );
};

export default Home;
