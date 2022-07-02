import { useState } from 'react';

export const useActive = () => {
  const [active, setActive] = useState(false);

  return { active, setActive };
};
