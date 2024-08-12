import Layout from '@app/layout/layout';
import DetailInfoPage from '@pages/detailInfoPage/detailInfoPage';
import FavoritesPage from '@pages/favoritesPage/favoritesPage';
import HomePage from '@pages/homePage/homePage';
import NotFoundPage from '@pages/notFoundPage/notFoundPage';
import { ROUTE_DETAILS, ROUTE_FAVORITES, ROUTE_HOME, ROUTE_NOT_FOUND } from '@utils/constants';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const routes = [
  { path: ROUTE_HOME, element: <HomePage /> },
  { path: ROUTE_DETAILS, element: <DetailInfoPage /> },
  { path: ROUTE_FAVORITES, element: <FavoritesPage /> },
  { path: ROUTE_NOT_FOUND, element: <NotFoundPage /> },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={ROUTE_HOME} />} />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
