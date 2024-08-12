import StyledOtherWorks from '@components/otherWorks/styled';
import { Card, IMainCardData, IRootState, Loader } from '@index';
import { fetchArtworks, mapArtworks } from '@src/utils/api';
import { addFavoriteId, removeFavoriteId } from '@store';
import { LOADER_HEIGHT, LOCAL_STORAGE_FAVORITES_KEY, MIN_LOADER_HEIGHT } from '@utils/constants';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const OtherWorks = () => {
  const [worksData, setWorksData] = useState<IMainCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchArtworks();
      const artworks = mapArtworks(data, favoriteImageIds);
      setWorksData(artworks);
    } catch (error) {
      console.error('Loading error', error);
    } finally {
      setIsLoading(false);
    }
  }, [favoriteImageIds]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleFavorite = useCallback(
    (cardId: number) => {
      const isFavorite = favoriteImageIds.includes(cardId);

      if (isFavorite) {
        dispatch(removeFavoriteId(cardId));
      } else {
        dispatch(addFavoriteId(cardId));
      }

      const updatedFavorites = isFavorite
        ? favoriteImageIds.filter((id) => id !== cardId)
        : [...favoriteImageIds, cardId];

      localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(updatedFavorites));
    },
    [favoriteImageIds, dispatch]
  );

  const handleToggleFavorite = useCallback(
    (cardId: number, event: React.MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      toggleFavorite(cardId);
    },
    [toggleFavorite]
  );

  if (isLoading) {
    return <Loader height={LOADER_HEIGHT} minHeight={MIN_LOADER_HEIGHT} />;
  }

  return (
    <StyledOtherWorks>
      {worksData.map((work) => (
        <Card
          key={work.id}
          cardData={work}
          onToggleFavorite={handleToggleFavorite}
          isSmall={true}
        />
      ))}
    </StyledOtherWorks>
  );
};

export default OtherWorks;
