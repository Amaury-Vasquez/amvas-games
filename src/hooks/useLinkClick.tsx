export const useLinkClick = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
    e.currentTarget && e.currentTarget.blur();

  return handleClick;
};
