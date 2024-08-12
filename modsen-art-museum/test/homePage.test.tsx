import HomePage from '@pages/homePage/homePage';
import { setCards, setFavoriteIds, setSortBy, setSortOrder } from '@store';
import { render, screen } from '@testing-library/react';
import { DEFAULT_SORT_BY_DATE, DEFAULT_SORT_ORDER } from '@utils/constants';
import theme from '@utils/theme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';

const mockStore = configureStore([]);

const initialState = {
  pagination: {
    currentPage: 1,
    sortOrder: DEFAULT_SORT_ORDER,
    sortBy: DEFAULT_SORT_BY_DATE,
    cards: [],
  },
  input: { value: '' },
  favorites: {
    favoriteIds: [], // Убедитесь, что Это состояние инициализировано
  },
};

describe('HomePage Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch(
      setCards([
        {
          id: 1,
          title: 'Artwork 1',
          artist_display: 'Artist 1',
          image_id: 'img1',
          is_public_domain: true,
        },
      ])
    );
    store.dispatch(setSortOrder(DEFAULT_SORT_ORDER));
    store.dispatch(setSortBy(DEFAULT_SORT_BY_DATE));
    store.dispatch(setFavoriteIds([])); // Для инициализации избранного если необходимо
  });

  it('renders main components correctly', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText(/Our special gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/Topics for you/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders other works section', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText(/Other Works/i)).toBeInTheDocument();
  });
});
