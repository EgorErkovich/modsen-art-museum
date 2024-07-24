import { Link } from 'react-router-dom';
import { IMainGalleryCardProps, trimArtistName, trimArtName } from '../../index';
import {
  StyledSmallCard,
  CardImg,
  CardInfoIcon,
  FavoritesImg,
  FavoritesImgBox,
  InfoUser,
  InfoUserArt,
  InfoUserArtist,
  UserArtArtistBox,
} from './styled';

const SmallCard: React.FC<IMainGalleryCardProps> = ({ cardData, onToggleFavorite }) => {
  const handleFavoriteToggle = (event: React.MouseEvent) => {
    onToggleFavorite(cardData.id, event);
  };

  const defaultImageSrc =
    'https://yt3.googleusercontent.com/iRLpuvr-WoAkDmOmXQiVnk7Gf4knJ6_OmIqZRmal4FeFxwbPLkMwIWm4QZlvH9t2GojQWZ4P=s900-c-k-c0x00ffffff-no-rj';

  return (
    <Link to={`/details/${cardData.id}`} style={{ textDecoration: 'none' }}>
      <StyledSmallCard>
        <CardImg style={{ backgroundImage: `url(${cardData.src || defaultImageSrc})` }} />
        <InfoUser>
          <UserArtArtistBox>
            <InfoUserArt>{trimArtName(cardData.artName, 25)}</InfoUserArt>
            <InfoUserArtist>{trimArtistName(cardData.artist)}</InfoUserArtist>
          </UserArtArtistBox>
          {cardData.isPublic ? 'Public' : 'Private'}
        </InfoUser>
        <CardInfoIcon $isFavorite={cardData.isFavorite} onClick={handleFavoriteToggle}>
          <FavoritesImgBox>
            <FavoritesImg>
              <path d="M15.5 19.5L8.375 15.5L1.25 19.5V3.5C1.25 2.96957 1.46448 2.46086 1.84625 2.08579C2.22802 1.71071 2.74581 1.5 3.28571 1.5H13.4643C14.0042 1.5 14.522 1.71071 14.9038 2.08579C15.2855 2.46086 15.5 2.96957 15.5 3.5V19.5Z" />
            </FavoritesImg>
          </FavoritesImgBox>
        </CardInfoIcon>
      </StyledSmallCard>
    </Link>
  );
};

export default SmallCard;
