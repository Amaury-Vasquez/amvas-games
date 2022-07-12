import { FC } from 'react';

import { Hand } from './styles';
import { RpsCardProps } from '../../hooks/useRps';
import { hoverableProp } from '../../styles/templates';
import { useItemClick } from '../../hooks/useItemClick';

export const RpsHand = (props: {
  callback?: Function;
  color: string;
  data?: RpsCardProps;
  Icon: FC;
}) => {
  const { callback, color, data, Icon } = props;
  const handleClick = useItemClick();
  return (
    <Hand
      onClick={(e) => {
        handleClick(e);
        callback && data && callback(data);
      }}
      color={color}
      hoverable={hoverableProp}
    >
      <Icon />
    </Hand>
  );
};
