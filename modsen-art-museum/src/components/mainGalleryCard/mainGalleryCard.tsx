import { IMainGalleryCardProps } from '../../index';
import {
  StyledMainGalleryCard,
  CardImg,
  CardInfo,
  UserArtArtistBox,
  InfoUser,
  InfoUserArt,
  InfoUserArtist,
  FavoritesImgBox,
  FavoritesImg,
  CardInfoIcon,
} from './styled';

const MainGalleryCard: React.FC<IMainGalleryCardProps> = ({ cardData, onToggleFavorite }) => {
  return (
    <StyledMainGalleryCard>
      <CardImg src={cardData.src} />
      <CardInfo>
        <InfoUser>
          <UserArtArtistBox>
            <InfoUserArt>{cardData.artName}</InfoUserArt>
            <InfoUserArtist>{cardData.artist}</InfoUserArtist>
          </UserArtArtistBox>
          {cardData.isPublic ? 'Public' : 'Private'}
        </InfoUser>

        <CardInfoIcon $isFavorite={cardData.isFavorite} onClick={onToggleFavorite}>
          <FavoritesImgBox>
            <FavoritesImg>
              <path d="M15.5 19.5L8.375 15.5L1.25 19.5V3.5C1.25 2.96957 1.46448 2.46086 1.84625 2.08579C2.22802 1.71071 2.74581 1.5 3.28571 1.5H13.4643C14.0042 1.5 14.522 1.71071 14.9038 2.08579C15.2855 2.46086 15.5 2.96957 15.5 3.5V19.5Z" />
            </FavoritesImg>
          </FavoritesImgBox>
        </CardInfoIcon>
      </CardInfo>
    </StyledMainGalleryCard>
  );
};

export default MainGalleryCard;
