import {
  CardImg,
  CardInfo,
  CardInfoIcon,
  FavoritesImg,
  FavoritesImgBox,
  InfoUser,
  InfoUserArt,
  InfoUserArtist,
  StyledCard,
  StyledLink,
  UserArtArtistBox,
} from '@components/card/styled';
import { IMainGalleryCardProps, trimArtistName, trimArtName } from '@index';
import { DEFAULT_IMAGE_SRC, FAVORITE_ICON, MAX_ART_NAME_LENGTH } from '@utils/constants';
import React from 'react';

const handleFavoriteToggle = (
  cardId: number,
  onToggleFavorite: (id: number, event: React.MouseEvent) => void,
  event: React.MouseEvent
) => {
  onToggleFavorite(cardId, event);
};

const Card: React.FC<IMainGalleryCardProps> = ({ cardData, onToggleFavorite, isSmall }) => {
  return (
    <StyledLink to={`/details/${cardData.id}`}>
      <StyledCard $isSmall={isSmall}>
        <CardImg $isSmall={isSmall} $backgroundImage={cardData.src || DEFAULT_IMAGE_SRC} />
        <CardInfo $isSmall={isSmall}>
          <InfoUser>
            <UserArtArtistBox>
              <InfoUserArt>{trimArtName(cardData.artName, MAX_ART_NAME_LENGTH)}</InfoUserArt>
              <InfoUserArtist>{trimArtistName(cardData.artist)}</InfoUserArtist>
            </UserArtArtistBox>
            {cardData.isPublic ? 'Public' : 'Private'}
          </InfoUser>

          <CardInfoIcon
            $isFavorite={cardData.isFavorite}
            onClick={(event) => handleFavoriteToggle(cardData.id, onToggleFavorite, event)}
          >
            <FavoritesImgBox>
              <FavoritesImg>
                <path d={FAVORITE_ICON} />
              </FavoritesImg>
            </FavoritesImgBox>
          </CardInfoIcon>
        </CardInfo>
      </StyledCard>
    </StyledLink>
  );
};

export default Card;
