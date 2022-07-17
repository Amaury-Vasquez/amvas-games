import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

//lazy imports
const Home = lazy(() => import('../pages/Home'));
const Checkers = lazy(() => import('../pages/Checkers'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Pokemory = lazy(() => import('../pages/Pokemory'));
const TicTacToe = lazy(() => import('../pages/TicTacToe'));
const RockPaperScissors = lazy(() => import('../pages/RockPaperScissors'));

export const useAppRoutes = () => {
  const routes = [
    {
      element: <Home />,
      path: '/',
    },
    {
      element: <Checkers />,
      path: '/checkers',
    },
    {
      element: <NotFound />,
      path: '*',
    },
    {
      element: <Pokemory />,
      path: '/pokemory',
    },
    {
      element: <TicTacToe />,
      path: '/tic-tac-toe',
    },
    {
      element: <RockPaperScissors />,
      path: '/rock-paper-scissors',
    },
  ];
  const mapRoutes = () => {
    return (
      <Routes>
        {routes.map((item, i) => (
          <Route element={item.element} key={item.path + i} path={item.path} />
        ))}
      </Routes>
    );
  };

  return mapRoutes;
};
