import { BounceLoader } from '../BounceLoader';

import { Screen } from './styles';

export const FallbackScreen = () => {
  return (
    <Screen>
      <h3> Please wait a few seconds</h3>
      <BounceLoader />
    </Screen>
  );
};
