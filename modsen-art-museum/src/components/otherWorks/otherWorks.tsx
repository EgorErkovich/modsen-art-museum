import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApiCardData, IMainCardData, IRootState, SmallCard } from '../../index';
import StyledOtherWorks from './styled';
import { addFavoriteId, removeFavoriteId } from '../../store/store';

const OtherWorks = () => {
  const [worksData, setWorksData] = useState<IMainCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.artic.edu/api/v1/artworks?page=1&limit=9&fields=id,title,artist_display,image_id,is_public_domain'
      );
      const data = await response.json();
      const artworks: IMainCardData[] = data.data.map((work: IApiCardData) => ({
        id: work.id,
        src: `https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`,
        artName: work.title,
        artist: work.artist_display,
        isPublic: work.is_public_domain,
        isFavorite: favoriteImageIds.includes(work.id),
      }));

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

  const handleToggleFavorite = (cardId: number) => {
    const updatedFavorites = favoriteImageIds.includes(cardId)
      ? favoriteImageIds.filter((id) => id !== cardId)
      : [...favoriteImageIds, cardId];

    if (favoriteImageIds.includes(cardId)) {
      dispatch(removeFavoriteId(cardId));
    } else {
      dispatch(addFavoriteId(cardId));
    }

    localStorage.setItem('favoriteImageIds', JSON.stringify(updatedFavorites));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledOtherWorks>
      {worksData.map((work) => {
        const isFavorite = favoriteImageIds.includes(work.id);

        return (
          <SmallCard
            key={work.id}
            cardData={{ ...work, isFavorite }}
            onToggleFavorite={() => handleToggleFavorite(work.id)}
          />
        );
      })}
    </StyledOtherWorks>
  );
};

export default OtherWorks;
