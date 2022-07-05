import { useState } from 'react';

import { Card, CoverDiv, PokemonDiv } from './styles';
import { hoverableProp } from '../../styles/templates';
import { useItemClick } from '../../hooks/useItemClick';
import { CardState, PokeCardData } from '../../hooks/useMemoryGame';

export const PokeCard = (props: {
  alt: string;
  callback: Function;
  cover: string;
  data: CardState;
}) => {
  // Component data / props / state
  const onClick = useItemClick();
  const [flip, setFlip] = useState(0);
  const { alt, callback, cover, data } = props;
  const { active, img, index, mutable } = data;

  return (
    <Card
      hoverable={hoverableProp}
      onClick={(e) => {
        onClick(e);
        const flipCard = () => {
          setFlip(1);
          setTimeout(() => {
            setFlip(0);
          }, 400);
        };
        const data: PokeCardData = { alt, flipCard, img, index };
        callback(data);
      }}
      disabled={flip === 1 || !mutable}
    >
      {active ? (
        <PokemonDiv willFlip={flip}>
          <div>
            <img alt={alt} src={img} />
          </div>
        </PokemonDiv>
      ) : (
        <CoverDiv willFlip={flip}>
          <img alt="pokecover" src={cover} />
        </CoverDiv>
      )}
    </Card>
  );
};
