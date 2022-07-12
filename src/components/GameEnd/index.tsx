import { FC } from 'react';
import { ImCross } from 'react-icons/im';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IoGameController } from 'react-icons/io5';
import { MdOutlineRestartAlt } from 'react-icons/md';

import { useItemClick } from '../../hooks/useItemClick';
import { End, EndMessage, Link, ResetButton } from './styles';

export const GameEnd = (props: {
  data: string;
  lost?: boolean;
  message: string;
  reset: Function;
}) => {
  const { data, lost, message, reset } = props;
  const handleClick = useItemClick();

  return (
    <End>
      <EndMessage lost={lost ? 1 : 0}>
        <h3> {message} </h3>
        <span>
          {data} {lost ? <ImCross /> : <AiFillCheckCircle />}
        </span>
        <ResetButton
          onClick={(e) => {
            handleClick(e);
            reset();
          }}
        >
          Play again <MdOutlineRestartAlt />
        </ResetButton>
        <Link to="/">
          Game selection <IoGameController />
        </Link>
      </EndMessage>
    </End>
  );
};
