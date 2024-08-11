import {
  DetailedImg,
  DetailedInfo,
  formatDimensions,
  IDetailedInfoProps,
  IRootState,
  Loader,
} from '@index';
import StyledDetailInfoPage from '@pages/detailInfoPage/styled';
import { addFavoriteId, removeFavoriteId, setFavoriteIds } from '@store';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const defaultImageSrc =
  'https://yt3.googleusercontent.com/iRLpuvr-WoAkDmOmXQiVnk7Gf4knJ6_OmIqZRmal4FeFxwbPLkMwIWm4QZlvH9t2GojQWZ4P=s900-c-k-c0x00ffffff-no-rj';

const fetchArtData = async (id: string) => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_display,date_display,dimensions,credit_line,category_titles,is_public_domain,nationality`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data.data;
};

const DetailInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artData, setArtData] = useState<IDetailedInfoProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteImageIds');
    if (storedFavorites) {
      const favoriteIds = JSON.parse(storedFavorites) as number[];
      dispatch(setFavoriteIds(favoriteIds));
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchAndSetArtData = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await fetchArtData(id);
        const formattedData: IDetailedInfoProps = {
          id: Number(id),
          src: `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`,
          artName: data.title,
          artist: data.artist_display,
          years: data.date_display,
          nationality: data.nationality || 'Unknown',
          dimensions: formatDimensions(data.dimensions),
          creditLine: data.credit_line,
          repository: 'Art Institute of Chicago',
          isPublic: data.is_public_domain,
          isFavorite: favoriteImageIds.includes(Number(id)),
        };

        setArtData(formattedData);
      } catch (error) {
        console.error('Loading error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetArtData();
  }, [id, favoriteImageIds, dispatch]);

  const handleToggleFavorite = useCallback(
    (cardId: number, event: React.MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();

      const isFavorite = favoriteImageIds.includes(cardId);
      const updatedFavorites = isFavorite
        ? favoriteImageIds.filter((itemId) => itemId !== cardId)
        : [...favoriteImageIds, cardId];

      if (isFavorite) {
        dispatch(removeFavoriteId(cardId));
      } else {
        dispatch(addFavoriteId(cardId));
      }

      localStorage.setItem('favoriteImageIds', JSON.stringify(updatedFavorites));
    },
    [dispatch, favoriteImageIds]
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <StyledDetailInfoPage>
      <DetailedImg
        src={artData ? artData.src : defaultImageSrc}
        id={artData ? artData.id : 0}
        isFavorite={artData ? artData.isFavorite : false}
        onToggleFavorite={handleToggleFavorite}
      />
      <DetailedInfo artDetails={artData as IDetailedInfoProps} />
    </StyledDetailInfoPage>
  );
};

export default DetailInfoPage;
