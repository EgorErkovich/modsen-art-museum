import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import { vi } from 'vitest';
import SearchBar from '@components/searchBar/searchBar';
import { IRootState } from '@index';

const mockStore = configureStore([]);

const initialState: IRootState = {
  pagination: {
    currentPage: 1,
    totalPages: 0,
    cards: [],
  },
  favorites: {
    favoriteIds: [],
  },
  input: { value: '' },
};

describe('SearchBar Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = vi.fn();
    vi.clearAllMocks();
  });

  it('renders the search input', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText(/search art, artist, work.../i);
    expect(input).toBeInTheDocument();
  });

  it('updates input value correctly', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText(/search art, artist, work.../i);

    await act(async () => {
      fireEvent.change(input, { target: { value: 'New Art' } });
    });

    expect(input).toHaveValue('New Art');
  });

  it('validates input based on regex', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText(/search art, artist, work.../i);

    await act(async () => {
      fireEvent.change(input, { target: { value: '!!!' } });
    });

    const errorMessage = screen.queryByText(/only latin letters, spaces, and dashes are allowed/i);

    expect(errorMessage).toBeNull();
  });
});
