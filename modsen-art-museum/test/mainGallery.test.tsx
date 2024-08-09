import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import MainGallery from '@components/mainGallery/mainGallery';

const mockStore = configureStore([]);

describe('MainGallery Component', () => {
  const store = mockStore({
    pagination: {
      cards: [
        {
          id: 1,
          title: 'Artwork 1',
          artist_display: 'Artist 1',
          image_id: '1',
          is_public_domain: true,
        },
        {
          id: 2,
          title: 'Artwork 2',
          artist_display: 'Artist 2',
          image_id: '2',
          is_public_domain: true,
        },
      ],
    },
    favorites: {
      favoriteIds: [],
    },
  });

  beforeEach(() => {
    vi.clearAllMocks();
    const mockLocalStorage = {
      getItem: vi.fn().mockReturnValue(JSON.stringify([])),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      key: vi.fn(),
      length: 0,
    };
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
    });
  });

  it('renders loading state', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainGallery isLoading={true} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders gallery cards', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainGallery isLoading={false} />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/artwork 1/i)).toBeInTheDocument();
      expect(screen.getByText(/artwork 2/i)).toBeInTheDocument();
    });
  });
});
