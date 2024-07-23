import { useSelector } from 'react-redux';
import {
  IApiCardData,
  IRootState,
  MainGalleryCard,
  trimArtistName,
  trimArtName,
} from '../../index';
import { Loader, LoadingText, Spinner, StyledMainGallery, StyledMainGalleryBox } from './styled';

const MainGallery = ({ isLoading }: { isLoading: boolean }) => {
  const cards = useSelector((state: IRootState) => state.pagination.cards);

  const defaultImageSrc =
    'https://yt3.googleusercontent.com/iRLpuvr-WoAkDmOmXQiVnk7Gf4knJ6_OmIqZRmal4FeFxwbPLkMwIWm4QZlvH9t2GojQWZ4P=s900-c-k-c0x00ffffff-no-rj';

  return (
    <StyledMainGalleryBox>
      <StyledMainGallery>
        {isLoading ? (
          <Loader>
            <Spinner />
            <LoadingText>Loading...</LoadingText>
          </Loader>
        ) : (
          cards.map((cardData: IApiCardData) => {
            const imageSrc = cardData.image_id
              ? `https://www.artic.edu/iiif/2/${cardData.image_id}/full/843,/0/default.jpg`
              : null;

            return (
              <MainGalleryCard
                key={cardData.id}
                cardData={{
                  src: imageSrc || defaultImageSrc,
                  artName: trimArtName(cardData.title, 25),
                  artist: trimArtistName(cardData.artist_display),
                  isPublic: cardData.is_public_domain,
                }}
              />
            );
          })
        )}
      </StyledMainGallery>
    </StyledMainGalleryBox>
  );
};

export default MainGallery;
