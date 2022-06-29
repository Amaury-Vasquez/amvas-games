import { Loader } from '../Loader';

import { Screen } from './styles';

export const FallbackScreen = () => {
  return (
    <Screen>
      <Loader />
    </Screen>
  );
};
