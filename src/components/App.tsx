import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from '../Layout';
import { FallbackScreen } from '../FallbackScreen';
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<FallbackScreen />}>
            <Routes>
              <Route element={<FallbackScreen />} path="/" />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
