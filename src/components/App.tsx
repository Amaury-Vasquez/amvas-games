import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from './Layout';
import { FallbackScreen } from './FallbackScreen';
import { GlobalStyles } from '../styles/GlobalStyles';

//lazy imports
const Home = lazy(() => import('../pages/Home'));

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<FallbackScreen />}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<FallbackScreen />} path="*" />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
