import { Card, CoverDiv, PokemonDiv } from './styles';
import { useActive } from '../../hooks/useActive';
import { useItemClick } from '../../hooks/useItemClick';
import { useState } from 'react';

export const PokeCard = (props: {
  alt: string;
  cover: string;
  img: string;
}) => {
  const onClick = useItemClick();
  const { alt, cover, img } = props;
  const { active, setActive } = useActive();
  const [flip, setFlip] = useState(0);

  return (
    <Card
      onClick={(e) => {
        onClick(e);
        setFlip(1);
        setTimeout(() => {
          setFlip(0);
          setActive(!active);
        }, 400);
      }}
      disabled={flip === 1}
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
