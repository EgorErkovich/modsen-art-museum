import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailedImg, DetailedInfo, ErrorBoundary, IDetailedInfoProps, IRootState } from '@index';
import { setFavoriteIds, removeFavoriteId, addFavoriteId } from '@store';
import {
  StyledDetailInfoPage,
  Loader,
  LoaderBox,
  LoadingText,
  Spinner,
} from '@pages/detailInfoPage/styled';

const DetailInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artData, setArtData] = useState<IDetailedInfoProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const defaultImageSrc =
    'https://yt3.googleusercontent.com/iRLpuvr-WoAkDmOmXQiVnk7Gf4knJ6_OmIqZRmal4FeFxwbPLkMwIWm4QZlvH9t2GojQWZ4P=s900-c-k-c0x00ffffff-no-rj';

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
    const fetchArtData = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_display,date_display,dimensions,credit_line,category_titles,is_public_domain,nationality`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.data) {
          const {
            title,
            artist_display: artistDisplay,
            date_display: years,
            dimensions,
            credit_line: creditLine,
            is_public_domain: isPublic,
            image_id: imageId,
            nationality,
          } = data.data;

          let formattedDimensions = 'Unknown dimensions';

          const sheetIndex = dimensions.indexOf('Sheet:');
          const framedIndex = dimensions.indexOf('; Framed:');
          let slicedDimensions = '';

          if (sheetIndex === -1) {
            slicedDimensions = `Sheet: ${dimensions
              .split('\n')[0]
              .slice(dimensions.split('\n')[0].indexOf(':') + 2, framedIndex)
              .trim()}`;
          } else {
            slicedDimensions = dimensions.split('\n')[0].slice(sheetIndex, framedIndex).trim();
          }

          const cmPart = slicedDimensions
            .split('(')[0]
            .replace('Sheet:', '')
            .replace('a)', '')
            .trim();
          const inPart = slicedDimensions.split('(')[1].replace(')', '').trim();

          formattedDimensions = `Sheet: ${inPart} (${cmPart})`;

          const convertedData: IDetailedInfoProps = {
            id: Number(id),
            src: `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`,
            artName: title,
            artist: artistDisplay,
            years,
            nationality: nationality || 'Unknown',
            dimensions: formattedDimensions,
            creditLine,
            repository: 'Art Institute of Chicago',
            isPublic,
            isFavorite: !!favoriteImageIds.includes(Number(id)),
          };

          setArtData(convertedData);
        }
      } catch (error) {
        console.error('Loading error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtData();
  }, [favoriteImageIds, id]);

  const handleToggleFavorite = (cardId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const updatedFavorites = favoriteImageIds.includes(cardId)
      ? favoriteImageIds.filter((itemId) => itemId !== cardId)
      : [...favoriteImageIds, cardId];

    if (favoriteImageIds.includes(cardId)) {
      dispatch(removeFavoriteId(cardId));
    } else {
      dispatch(addFavoriteId(cardId));
    }

    localStorage.setItem('favoriteImageIds', JSON.stringify(updatedFavorites));
  };

  if (loading) {
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
    <StyledDetailInfoPage>
      <ErrorBoundary>
        <DetailedImg
          src={artData ? artData.src : defaultImageSrc}
          id={artData ? artData.id : 0}
          isFavorite={artData ? artData.isFavorite : false}
          onToggleFavorite={handleToggleFavorite}
        />
      </ErrorBoundary>
      <ErrorBoundary>
        <DetailedInfo artDetails={artData as IDetailedInfoProps} />
      </ErrorBoundary>
    </StyledDetailInfoPage>
  );
};

export default DetailInfoPage;
