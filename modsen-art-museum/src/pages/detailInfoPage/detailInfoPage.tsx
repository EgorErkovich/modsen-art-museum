import { DetailedImg, DetailedInfo, IDetailedInfoProps, IRootState, Loader } from '@index';
import StyledDetailInfoPage from '@pages/detailInfoPage/styled';
import { setFavoriteIds } from '@store';
import { DEFAULT_IMAGE_SRC, LOCAL_STORAGE_FAVORITES_KEY } from '@utils/constants';
import useFetchArtData from '@utils/hooks';
import { toggleFavorite } from '@utils/utils';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  const { artData, loading } = useFetchArtData(id, favoriteImageIds);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);
    if (storedFavorites) {
      const favoriteIds = JSON.parse(storedFavorites) as number[];
      dispatch(setFavoriteIds(favoriteIds));
    }
  }, [dispatch]);

  const handleToggleFavorite = (cardId: number, event: React.MouseEvent) => {
    toggleFavorite(cardId, event, favoriteImageIds, dispatch);
  };

  if (loading) {
    return <Loader height={450} minHeight={450} />;
  }

  return (
    <StyledDetailInfoPage>
      <DetailedImg
        src={artData ? artData.src : DEFAULT_IMAGE_SRC}
        id={artData ? artData.id : 0}
        isFavorite={artData ? artData.isFavorite : false}
        onToggleFavorite={handleToggleFavorite}
      />
      <DetailedInfo artDetails={artData as IDetailedInfoProps} />
    </StyledDetailInfoPage>
  );
};

export default DetailInfoPage;
