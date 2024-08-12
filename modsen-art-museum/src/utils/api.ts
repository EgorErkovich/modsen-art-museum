import { AppDispatch, setCards, setTotalPages } from '@store';
import {
  API_MAIN_DATA,
  API_URL,
  IMAGE_BASE_URL,
  IMAGE_FULL_SIZE,
  ITEMS_PER_PAGE,
  LOCAL_STORAGE_FAVORITES_KEY,
} from '@utils/constants';
import { IApiCardData, IMainCardData } from '@utils/interfaces';

const fetchPaginationArtworks = async (
  page: number,
  inputValue: string,
  sortOrder: 'asc' | 'desc' | '',
  sortBy: string,
  setIsLoading: (loading: boolean) => void,
  dispatch: AppDispatch
) => {
  setIsLoading(true);
  try {
    const sortParam = sortOrder ? `&sort[${sortBy}][order]=${sortOrder}` : '';

    const response = await fetch(
      `${API_URL}/search?limit=${ITEMS_PER_PAGE}&page=${page}&${API_MAIN_DATA},date_start${inputValue ? `&q=${inputValue}` : ''}${sortParam}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(setCards(data.data));
    dispatch(setTotalPages(data.pagination.total_pages));
  } catch (error) {
    console.error('Loading error:', error);
  } finally {
    setIsLoading(false);
  }
};

const fetchFavoritesData = async (
  setWorksData: React.Dispatch<React.SetStateAction<IMainCardData[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);
    if (storedFavorites) {
      const favoriteIds = JSON.parse(storedFavorites) as number[];

      if (favoriteIds.length > 0) {
        const idsParam = favoriteIds.join(',');
        const response = await fetch(`${API_URL}?ids=${idsParam}&${API_MAIN_DATA}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const artworks: IMainCardData[] = data.data.map((work: IApiCardData) => ({
          id: work.id,
          src: `${IMAGE_BASE_URL}${work.image_id}${IMAGE_FULL_SIZE}`,
          artName: work.title,
          artist: work.artist_display,
          isPublic: work.is_public_domain,
          isFavorite: true,
        }));

        setWorksData(artworks);
      }
    }
  } catch (error) {
    console.error('Loading error', error);
  } finally {
    setIsLoading(false);
  }
};

const fetchArtworksSearchBar = async (
  debouncedInputValue: string,
  currentPage: number,
  dispatch: AppDispatch
) => {
  try {
    const response = await fetch(
      `${API_URL}/search?q=${debouncedInputValue.replace(' ', '%20')}&page=${currentPage}&limit=${ITEMS_PER_PAGE}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const totalPages = data.pagination.total_pages;
    dispatch(setTotalPages(totalPages));

    const artworkIds = data.data.map((artwork: IApiCardData) => artwork.id).join(',');

    if (artworkIds) {
      const artworksResponse = await fetch(`${API_URL}?ids=${artworkIds}&${API_MAIN_DATA}`);

      if (!artworksResponse.ok) {
        throw new Error('Network response was not ok for artwork details');
      }

      const artworksData = await artworksResponse.json();
      const artworks = artworksData.data.map((artwork: IApiCardData) => ({
        id: artwork.id,
        title: artwork.title,
        artist_display: artwork.artist_display,
        image_id: artwork.image_id,
        is_public_domain: artwork.is_public_domain,
      }));

      dispatch(setCards(artworks));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchArtworks = async () => {
  const response = await fetch(`${API_URL}?page=1&limit=9&${API_MAIN_DATA}`);
  const data = await response.json();

  return data.data;
};

const mapArtworks = (data: IApiCardData[], favoriteImageIds: number[]): IMainCardData[] => {
  return data.map((work: IApiCardData) => ({
    id: work.id,
    src: `https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`,
    artName: work.title,
    artist: work.artist_display,
    isPublic: work.is_public_domain,
    isFavorite: favoriteImageIds.includes(work.id),
  }));
};

export {
  fetchArtworks,
  fetchArtworksSearchBar,
  fetchFavoritesData,
  fetchPaginationArtworks,
  mapArtworks,
};
