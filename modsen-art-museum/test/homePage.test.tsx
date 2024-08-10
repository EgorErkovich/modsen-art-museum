import HomePage from '@pages/homePage/homePage';
import { setCards } from '@store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const initialState = {
  pagination: { currentPage: 1 },
  input: { value: '' },
  cards: [],
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
  });

  it('renders main components', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(screen.getByText(/Our special gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/Topics for you/i)).toBeInTheDocument();
  });
});
