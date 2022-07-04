import { useEffect, useState } from 'react';

export interface CardState {
  active: boolean;
  img: string;
  index: number;
  mutable: boolean;
}

export interface PokeCardData {
  alt: string;
  flipCard: Function;
  img: string;
  index: number;
}

export const useMemoryGame = () => {
  // Const vars
  const limit = 12;
  const time = 400;
  // State
  const [activeCard, setActive] = useState<PokeCardData | null>(null);
  const [prevCard, setPrev] = useState<PokeCardData | null>(null);
  const [cards, setCards] = useState<CardState[]>([]);
  const [cover, setCover] = useState('');
  const [gameEnded, setEnd] = useState(false);
  const [gameTime, setTime] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const [loadCount, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [score, setScore] = useState(0);
  const [turns, setTurns] = useState(0);
  // Functions
  const callback = (pokeCard: PokeCardData) => {
    // Starts timer
    if (!gameTime) setTime({ start: Date.now(), end: 0 });
    // Set active card if there's no current
    if (!activeCard) {
      setActive(pokeCard);
      setTurns((turns) => turns + 1);
    } else if (!prevCard) {
      setPrev(activeCard);
      setActive(pokeCard);
    }
  };

  const getTime = () => {
    let timeCount = 0;
    if (gameTime)
      timeCount = Math.floor((gameTime.end - gameTime.start) / 1000);
    return timeCount;
  };

  const reset = () => {
    setActive(null);
    setPrev(null);
    setCards(() => []);
    setCount(0);
    setEnd(false);
    setLoaded(false);
    setScore(0);
    setTime(null);
    setTurns(0);
  };

  // Effects

  // Effect used to download pokemon imgaes
  useEffect(() => {
    let render = true;
    if (render == true) {
      if (!loaded) {
        (async () => {
          const url =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

          const shuffleArray = (arr: any[]) => {
            for (let i = arr.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
            return arr;
          };
          // Random array for pokemon ids
          const randomArr = Array.from(
            { length: limit },
            () => Math.floor(Math.random() * 493) + 1
          );
          // Creation of promises array
          const promiseArr = randomArr.map(async (id) => {
            try {
              const res = await fetch(url + id + '.png', {
                cache: 'default',
                credentials: 'omit',
                referrerPolicy: 'strict-origin-when-cross-origin',
              });
              return await res.blob().then((img) => {
                setCount((loadCount) => loadCount + 1);
                return URL.createObjectURL(img);
              });
            } catch (e) {
              console.log(e);
            }
          });
          Promise.all(promiseArr).then((arr) => {
            const tmpArr: CardState[] = shuffleArray(arr.concat(arr)).map(
              (img, i) => {
                return {
                  active: false,
                  img,
                  index: i,
                  mutable: true,
                };
              }
            );
            setCards(() => tmpArr);
          });
        })();
      }
    }
    return () => {
      render = false;
    };
  }, [loaded, setCards]);

  // Effect used to download cover for pokemon cards
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://i.imgur.com/UYQhEzt.jpg', {
          cache: 'default',
          credentials: 'omit',
          referrerPolicy: 'strict-origin-when-cross-origin',
        });
        await res
          .blob()
          .then((coverImage) => setCover(URL.createObjectURL(coverImage)));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // Effect used to notify when all images have been downloaded
  useEffect(() => {
    if (loadCount === limit) setTimeout(() => setLoaded(true), 1000);
  }, [loadCount, setLoaded]);

  // Effect used for game handling when a card is clicked
  useEffect(() => {
    const arr = [...cards];

    if (!prevCard && activeCard) {
      activeCard.flipCard();
      const { index } = activeCard;

      setTimeout(() => {
        arr[index].active = true;
        arr[index].mutable = false;
        setCards(arr);
      }, time);
    } else if (prevCard && activeCard) {
      activeCard.flipCard();

      setTimeout(() => {
        const i = prevCard.index,
          j = activeCard.index;

        arr[j].active = true;
        arr[j].mutable = false;
        setCards(arr);

        if (!(i !== j && activeCard.img === prevCard.img)) {
          setTimeout(() => {
            arr[j].active = false;
            arr[j].mutable = true;
            arr[i].active = false;
            arr[i].mutable = true;
            setCards(arr);
            setActive(null);
            setPrev(null);
          }, 1000);
        } else {
          setActive(null);
          setScore((score) => score + 1);
          setPrev(null);
        }
      }, time);
    }
  }, [activeCard, prevCard, setActive, setCards, setPrev, setScore]);

  // Effect used to check if game has ended
  useEffect(() => {
    if (score === limit) {
      setEnd(true);
      gameTime && setTime({ start: gameTime.start, end: Date.now() });
    }
  }, [score, setEnd, setTime]);
  return {
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
  };
};
