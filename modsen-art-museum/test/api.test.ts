import {
  fetchArtworks,
  fetchArtworksSearchBar,
  fetchFavoritesData,
  fetchPaginationArtworks,
} from '@src/utils/api';
import { API_MAIN_DATA, API_URL } from '@src/utils/constants';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('API Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetchArtworks should return artworks data', async () => {
    const mockData = {
      data: [{ id: 1, title: 'Artwork 1' }],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValue(mockData),
    });

    const artworks = await fetchArtworks();
    expect(artworks).toEqual(mockData.data);
    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}?page=1&limit=9&${API_MAIN_DATA}`);
  });

  it('fetchArtworksSearchBar should call fetch and return artwork data', async () => {
    const mockData = {
      pagination: { total_pages: 1 },
      data: [{ id: 1, title: 'Artwork 1' }],
    };

    mockFetch.mockResolvedValueOnce({ ok: true, json: vi.fn().mockResolvedValue(mockData) });

    const dispatch = vi.fn();
    await fetchArtworksSearchBar('Artwork', 1, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  it('fetchFavoritesData should load favorite artworks', async () => {
    const mockFavorites = [1];
    const mockResponse = {
      data: [{ id: 1, title: 'Artwork 1' }],
    };

    Object.defineProperty(global, 'localStorage', {
      value: {
        getItem: vi.fn().mockReturnValue(JSON.stringify(mockFavorites)),
      },
      writable: true,
    });

    mockFetch.mockResolvedValueOnce({ ok: true, json: vi.fn().mockResolvedValue(mockResponse) });

    const setWorksData = vi.fn();

    await fetchFavoritesData(setWorksData, vi.fn());

    expect(setWorksData).toHaveBeenCalled();
  });

  it('fetchPaginationArtworks should set loading state and dispatch actions', async () => {
    const mockResponse = {
      data: [{ id: 1, title: 'Artwork 1' }],
      pagination: { total_pages: 2 },
    };

    const setIsLoading = vi.fn();
    const dispatch = vi.fn();

    mockFetch.mockResolvedValueOnce({ ok: true, json: vi.fn().mockResolvedValue(mockResponse) });

    await fetchPaginationArtworks(1, '', 'asc', 'title', setIsLoading, dispatch);

    expect(setIsLoading).toHaveBeenCalledWith(true);
    expect(dispatch).toHaveBeenCalled();
    expect(setIsLoading).toHaveBeenCalledWith(false);
  });
});
