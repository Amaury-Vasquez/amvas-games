import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from './Layout';
import { FallbackScreen } from './FallbackScreen';
import { useAppRoutes } from '../hooks/useAppRoutes';
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  const mapRoutes = useAppRoutes();

  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<FallbackScreen />}>{mapRoutes()}</Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
