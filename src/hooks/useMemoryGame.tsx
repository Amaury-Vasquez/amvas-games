import { useEffect, useState } from 'react';

export const useMemoryGame = () => {
  // Const vars
  const limit = 12;

  // State
  const [loadCount, setCount] = useState(0);
  const [cover, setCover] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [score, setScore] = useState(0);

  // Functions
  const reset = () => {
    setCount(0);
    setLoaded(false);
    setImages(() => []);
    setScore(0);
  };

  // Effects
  useEffect(() => {
    let render = true;
    if (render == true) {
      if (!loaded) {
        (async () => {
          const url =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

          const shuffleArray = (arr: string[]) => {
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
          const promiseArr = randomArr.map(async (id) => {
            const res = await fetch(url + id + '.png', {
              cache: 'default',
              credentials: 'omit',
              referrerPolicy: 'strict-origin-when-cross-origin',
            });
            return await res.blob().then((img) => {
              setCount((loadCount) => loadCount + 1);
              return URL.createObjectURL(img);
            });
          });
          Promise.all(promiseArr).then((arr) => {
            setImages(() => shuffleArray(arr.concat(arr)));
          });
        })();
      }
    }
    return () => {
      render = false;
    };
  }, [loaded, setImages]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://i.imgur.com/UYQhEzt.jpg', {
        cache: 'default',
        credentials: 'omit',
        referrerPolicy: 'strict-origin-when-cross-origin',
      });
      await res
        .blob()
        .then((coverImage) => setCover(URL.createObjectURL(coverImage)));
    })();
  }, []);

  useEffect(() => {
    if (loadCount === limit) setTimeout(() => setLoaded(true), 1000);
  }, [loadCount, setLoaded]);

  return { loadCount, cover, images, limit, loaded, reset, score };
};
