import {
  FavoritesImg,
  FavoritesImgBox,
  StyledFavoritesPageTitle,
} from '@components/favoritesPageTitle/styled';
import { TITLE_FAVORITE_ICON } from '@src/utils/constants';

const FavoritesPageTitle = () => {
  return (
    <StyledFavoritesPageTitle>
      Here are your
      <span>
        <FavoritesImgBox>
          <FavoritesImg>
            <path d={TITLE_FAVORITE_ICON} />
          </FavoritesImg>
        </FavoritesImgBox>
        Favorites
      </span>
    </StyledFavoritesPageTitle>
  );
};

export default FavoritesPageTitle;
