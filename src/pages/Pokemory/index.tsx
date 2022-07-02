import { Helmet } from 'react-helmet-async';

import { PokeGame } from '../../components/PokeGame';

const Pokemory = () => {
  return (
    <>
      <Helmet>
        <title> Pokemory | Amvas games </title>
      </Helmet>
      <PokeGame />
    </>
  );
};

export default Pokemory;
