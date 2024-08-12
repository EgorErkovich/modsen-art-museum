import {
  CardInfoIcon,
  FavoritesImg,
  FavoritesImgBox,
  StyledDetailedImg,
} from '@components/detailedImg/styled';
import { FAVORITE_ICON } from '@utils/constants';

const handleFavoriteToggle =
  (id: number, onToggleFavorite: (idFav: number, event: React.MouseEvent) => void) =>
  (event: React.MouseEvent) => {
    onToggleFavorite(id, event);
  };

const DetailedImg = ({
  id,
  src,
  isFavorite,
  onToggleFavorite,
}: {
  id: number;
  src: string;
  isFavorite: boolean;
  onToggleFavorite: (idFav: number, event: React.MouseEvent) => void;
}) => {
  return (
    <StyledDetailedImg data-testid="styled-detailed-img" $backgroundImage={src}>
      <CardInfoIcon $isFavorite={isFavorite} onClick={handleFavoriteToggle(id, onToggleFavorite)}>
        <FavoritesImgBox>
          <FavoritesImg>
            <path d={FAVORITE_ICON} />
          </FavoritesImg>
        </FavoritesImgBox>
      </CardInfoIcon>
    </StyledDetailedImg>
  );
};

export default DetailedImg;
