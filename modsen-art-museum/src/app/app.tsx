import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { DetailInfoPage, FavoritesPage, HomePage, Layout, NotFoundPage } from '../index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="details/:id" element={<DetailInfoPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
