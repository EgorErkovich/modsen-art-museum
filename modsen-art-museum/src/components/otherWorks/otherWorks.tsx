import StyledOtherWorks from '@components/otherWorks/styled';
import { IApiCardData, IMainCardData, IRootState, Loader, SmallCard } from '@index';
import { addFavoriteId, removeFavoriteId } from '@store';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const fetchArtworks = async () => {
  const response = await fetch(
    'https://api.artic.edu/api/v1/artworks?page=1&limit=9&fields=id,title,artist_display,image_id,is_public_domain'
  );
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

      localStorage.setItem('favoriteImageIds', JSON.stringify(updatedFavorites));
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
    return <Loader />;
  }

  return (
    <StyledOtherWorks>
      {worksData.map((work) => (
        <SmallCard key={work.id} cardData={work} onToggleFavorite={handleToggleFavorite} />
      ))}
    </StyledOtherWorks>
  );
};

export default OtherWorks;
