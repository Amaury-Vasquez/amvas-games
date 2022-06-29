import { Page } from '../styles/templates';

export const Layout = (props: { children: JSX.Element }) => {
  return <Page>{props.children}</Page>;
};
