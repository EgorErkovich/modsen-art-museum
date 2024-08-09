import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteId, removeFavoriteId, setFavoriteIds } from '@store';
import { IApiCardData, IRootState, MainGalleryCard, trimArtistName, trimArtName } from '@index';
import {
  Loader,
  LoaderBox,
  LoadingText,
  Spinner,
  StyledMainGallery,
  StyledMainGalleryBox,
} from '@components/mainGallery/styled';

const MainGallery = ({ isLoading }: { isLoading: boolean }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state: IRootState) => state.pagination.cards);
  const favoriteImageIds = useSelector((state: IRootState) => state.favorites.favoriteIds);

  const defaultImageSrc =
    'https://yt3.googleusercontent.com/iRLpuvr-WoAkDmOmXQiVnk7Gf4knJ6_OmIqZRmal4FeFxwbPLkMwIWm4QZlvH9t2GojQWZ4P=s900-c-k-c0x00ffffff-no-rj';

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteImageIds');
    if (storedFavorites) {
      const favoriteIds = JSON.parse(storedFavorites) as number[];
      dispatch(setFavoriteIds(favoriteIds));
    }
  }, [dispatch]);

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

  return (
    <StyledMainGalleryBox>
      <StyledMainGallery>
        {isLoading ? (
          <LoaderBox>
            <Loader>
              <Spinner />
              <LoadingText>Loading...</LoadingText>
            </Loader>
          </LoaderBox>
        ) : (
          cards.map((cardData: IApiCardData) => {
            const imageSrc = cardData.image_id
              ? `https://www.artic.edu/iiif/2/${cardData.image_id}/full/843,/0/default.jpg`
              : null;

            const isFavorite = favoriteImageIds.includes(cardData.id);

            return (
              <MainGalleryCard
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
              />
            );
          })
        )}
      </StyledMainGallery>
    </StyledMainGalleryBox>
  );
};

export default MainGallery;
