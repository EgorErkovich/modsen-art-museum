import Layout from '@app/layout/layout';
import DetailInfoPage from '@pages/detailInfoPage/detailInfoPage';
import FavoritesPage from '@pages/favoritesPage/favoritesPage';
import HomePage from '@pages/homePage/homePage';
import NotFoundPage from '@pages/notFoundPage/notFoundPage';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const routes = [
  { path: 'home', element: <HomePage /> },
  { path: 'details/:id', element: <DetailInfoPage /> },
  { path: 'favorites', element: <FavoritesPage /> },
  { path: '*', element: <NotFoundPage /> },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
