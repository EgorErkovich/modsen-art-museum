import {
  FavoritesImg,
  FavoritesImgBox,
  StyledFavoritesPageTitle,
} from '@components/favoritesPageTitle/styled';

const FavoritesPageTitle = () => {
  return (
    <StyledFavoritesPageTitle>
      Here are your
      <span>
        <FavoritesImgBox>
          <FavoritesImg>
            <path d="M35.2573 45.9032L18.9993 36.4409L2.74121 45.9032V8.05375C2.74121 6.79897 3.23061 5.59557 4.10175 4.7083C4.97288 3.82103 6.1544 3.32257 7.38637 3.32257H30.6122C31.8442 3.32257 33.0257 3.82103 33.8968 4.7083C34.7679 5.59557 35.2573 6.79897 35.2573 8.05375V45.9032Z" />
          </FavoritesImg>
        </FavoritesImgBox>
        Favorites
      </span>
    </StyledFavoritesPageTitle>
  );
};

export default FavoritesPageTitle;
