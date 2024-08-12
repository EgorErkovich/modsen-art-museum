import { IsEmptyText, StyledFavoritesWorks } from '@components/favoritesWorks/styled';
import { Card, IApiCardData, IMainCardData, IRootState, Loader } from '@index';
import { addFavoriteId, removeFavoriteId } from '@store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const fetchFavoritesData = async (
  setWorksData: React.Dispatch<React.SetStateAction<IMainCardData[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const storedFavorites = localStorage.getItem('favoriteImageIds');
    if (storedFavorites) {
      const favoriteIds = JSON.parse(storedFavorites) as number[];

      if (favoriteIds.length > 0) {
        const idsParam = favoriteIds.join(',');
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?ids=${idsParam}&fields=id,title,artist_display,image_id,is_public_domain`
        );
        const data = await response.json();

        const artworks: IMainCardData[] = data.data.map((work: IApiCardData) => ({
          id: work.id,
          src: `https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`,
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

    localStorage.setItem('favoriteImageIds', JSON.stringify(updatedFavorites));
    setWorksData((prevWorks) => prevWorks.filter((work) => work.id !== cardId));
  };

  if (isLoading) {
    return <Loader height={400} minHeight={400} />;
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
