import { Header } from '../Header';
import { Page } from '../../styles/templates';

export const Layout = (props: { children: JSX.Element }) => {
  return (
    <Page>
      <Header />
      {props.children}
    </Page>
  );
};
