import { AiFillCheckCircle } from 'react-icons/ai';
import { IoGameController } from 'react-icons/io5';
import { MdOutlineRestartAlt } from 'react-icons/md';

import { useItemClick } from '../../hooks/useItemClick';
import { End, EndMessage, Link, ResetButton } from './styles';

export const GameEnd = (props: {
  data: string;
  message: string;
  reset: Function;
}) => {
  const { data, message, reset } = props;
  const handleClick = useItemClick();

  return (
    <End>
      <EndMessage>
        <h3> {message} </h3>
        <span>
          {data} <AiFillCheckCircle />
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
