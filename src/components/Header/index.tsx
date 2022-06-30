import { MdVideogameAsset } from 'react-icons/md';
import { HiOutlineBackspace } from 'react-icons/hi';

import { Head, LeftLink, NavBar, RightLink } from './styles';
import { useLinkClick } from '../../hooks/useLinkClick';

export const Header = () => {
  const handleClick = useLinkClick();

  return (
    <Head>
      <NavBar>
        <LeftLink onClick={handleClick} to="/">
          <HiOutlineBackspace />
          Game selection
        </LeftLink>
        <RightLink onClick={handleClick} to="/about">
          About
          <MdVideogameAsset />
        </RightLink>
      </NavBar>
    </Head>
  );
};
