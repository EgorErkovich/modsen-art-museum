import { StyledMainGallery, StyledMainGalleryBox } from '@components/mainGallery/styled';
import { Card, IApiCardData, IRootState, Loader, trimArtistName, trimArtName } from '@index';
import { addFavoriteId, AppDispatch, removeFavoriteId, setFavoriteIds } from '@store';
import {
  DEFAULT_IMAGE_SRC,
  IMAGE_BASE_URL,
  IMAGE_FULL_SIZE,
  LOCAL_STORAGE_FAVORITES_KEY,
  MAX_ART_NAME_LENGTH,
} from '@utils/constants';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const toggleFavorite = (cardId: number, favoriteImageIds: number[], dispatch: AppDispatch) => {
  const updatedFavorites = favoriteImageIds.includes(cardId)
    ? favoriteImageIds.filter((id) => id !== cardId)
    : [...favoriteImageIds, cardId];

  if (favoriteImageIds.includes(cardId)) {
    dispatch(removeFavoriteId(cardId));
  } else {
    dispatch(addFavoriteId(cardId));
  }

  localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

const MainGallery = ({ isLoading }: { isLoading: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: IRootState) => state.pagination.cards);
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  const galleryRef = useRef<HTMLDivElement>(null);
  const [galleryHeight, setGalleryHeight] = useState<number>(0);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);
    if (storedFavorites) {
      const favoriteIds = JSON.parse(storedFavorites) as number[];
      dispatch(setFavoriteIds(favoriteIds));
    }
  }, [dispatch]);

  useEffect(() => {
    if (galleryRef.current) {
      setGalleryHeight(galleryRef.current.clientHeight);
    }
  }, [cards, isLoading]);

  const handleToggleFavorite = (cardId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    toggleFavorite(cardId, favoriteImageIds, dispatch);
  };

  return (
    <StyledMainGalleryBox>
      <StyledMainGallery ref={galleryRef}>
        {isLoading ? (
          <Loader height={galleryHeight} minHeight={350} />
        ) : (
          cards.map((cardData: IApiCardData) => {
            const imageSrc = cardData.image_id
              ? `${IMAGE_BASE_URL}${cardData.image_id}${IMAGE_FULL_SIZE}`
              : null;

            const isFavorite = favoriteImageIds.includes(cardData.id);

            return (
              <Card
                key={cardData.id}
                cardData={{
                  id: cardData.id,
                  src: imageSrc || DEFAULT_IMAGE_SRC,
                  artName: cardData.title ? trimArtName(cardData.title, MAX_ART_NAME_LENGTH) : '',
                  artist: cardData.artist_display ? trimArtistName(cardData.artist_display) : '',
                  isPublic: cardData.is_public_domain,
                  isFavorite,
                }}
                onToggleFavorite={handleToggleFavorite}
                isSmall={false}
              />
            );
          })
        )}
      </StyledMainGallery>
    </StyledMainGalleryBox>
  );
};

export default MainGallery;
