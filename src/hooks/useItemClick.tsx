export const useItemClick = () => {
  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => e.currentTarget && e.currentTarget.blur();

  return handleClick;
};
