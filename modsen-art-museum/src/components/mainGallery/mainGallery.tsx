import { StyledMainGallery, StyledMainGalleryBox } from '@components/mainGallery/styled';
import { Card, IApiCardData, IRootState, Loader, trimArtistName, trimArtName } from '@index';
import { addFavoriteId, AppDispatch, removeFavoriteId, setFavoriteIds } from '@store';
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

  localStorage.setItem('favoriteImageIds', JSON.stringify(updatedFavorites));
};

const MainGallery = ({ isLoading }: { isLoading: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: IRootState) => state.pagination.cards);
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  const defaultImageSrc =
    'https://yt3.googleusercontent.com/iRLpuvr-WoAkDmOmXQiVnk7Gf4knJ6_OmIqZRmal4FeFxwbPLkMwIWm4QZlvH9t2GojQWZ4P=s900-c-k-c0x00ffffff-no-rj';

  const galleryRef = useRef<HTMLDivElement>(null);
  const [galleryHeight, setGalleryHeight] = useState<number>(0);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteImageIds');
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
              ? `https://www.artic.edu/iiif/2/${cardData.image_id}/full/843,/0/default.jpg`
              : null;

            const isFavorite = favoriteImageIds.includes(cardData.id);

            return (
              <Card
                key={cardData.id}
                cardData={{
                  id: cardData.id,
                  src: imageSrc || defaultImageSrc,
                  artName: cardData.title ? trimArtName(cardData.title, 25) : '',
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
