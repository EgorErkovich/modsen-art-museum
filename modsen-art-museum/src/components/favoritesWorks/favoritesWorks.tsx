import { IsEmptyText, StyledFavoritesWorks } from '@components/favoritesWorks/styled';
import { Card, IMainCardData, IRootState, Loader } from '@index';
import { addFavoriteId, removeFavoriteId } from '@store';
import { fetchFavoritesData } from '@utils/api';
import { LOADER_HEIGHT, LOCAL_STORAGE_FAVORITES_KEY, MIN_LOADER_HEIGHT } from '@utils/constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FavoritesWorks = () => {
  const [worksData, setWorksData] = useState<IMainCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  useEffect(() => {
    fetchFavoritesData(setWorksData, setIsLoading);
  }, [dispatch]);

  const handleToggleFavorite = (cardId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const isFavorite = favoriteImageIds.includes(cardId);
    const updatedFavorites = isFavorite
      ? favoriteImageIds.filter((id) => id !== cardId)
      : [...favoriteImageIds, cardId];

    if (isFavorite) {
      dispatch(removeFavoriteId(cardId));
    } else {
      dispatch(addFavoriteId(cardId));
    }

    localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(updatedFavorites));
    setWorksData((prevWorks) => prevWorks.filter((work) => work.id !== cardId));
  };

  if (isLoading) {
    return <Loader height={LOADER_HEIGHT} minHeight={MIN_LOADER_HEIGHT} />;
  }

  return (
    <StyledFavoritesWorks>
      {worksData.length === 0 ? (
        <IsEmptyText>
          Your favorites list is empty. <span>Add some artworks to your favorites!</span>
        </IsEmptyText>
      ) : (
        worksData.map((work) => (
          <Card
            key={work.id}
            cardData={work}
            onToggleFavorite={handleToggleFavorite}
            isSmall={true}
          />
        ))
      )}
    </StyledFavoritesWorks>
  );
};

export default FavoritesWorks;
