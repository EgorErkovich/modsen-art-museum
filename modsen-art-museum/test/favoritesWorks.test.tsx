import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FavoritesWorks from '../src/components/favoritesWorks/favoritesWorks';

const mockStore = configureStore([]);

describe('FavoritesWorks Component', () => {
  const store = mockStore({
    favorites: {
      favoriteIds: [],
    },
  });

  test('renders empty favorites message', () => {
    render(
      <Provider store={store}>
        <FavoritesWorks />
      </Provider>
    );

    const emptyMessage = screen.getByText(/your favorites list is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
