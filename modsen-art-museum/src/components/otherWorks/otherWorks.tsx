import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApiCardData, IMainCardData, IRootState, SmallCard } from '../../index';
import { addFavoriteId, removeFavoriteId } from '../../store/store';
import { LoaderBox, Loader, Spinner, LoadingText, StyledOtherWorks } from './styled';

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

  const handleToggleFavorite = (cardId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
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
    return (
      <LoaderBox>
        <Loader>
          <Spinner />
          <LoadingText>Loading...</LoadingText>
        </Loader>
      </LoaderBox>
    );
  }

  return (
    <StyledOtherWorks>
      {worksData.map((work) => {
        const isFavorite = favoriteImageIds.includes(work.id);

        return (
          <SmallCard
            key={work.id}
            cardData={{ ...work, isFavorite }}
            onToggleFavorite={handleToggleFavorite}
          />
        );
      })}
    </StyledOtherWorks>
  );
};

export default OtherWorks;
