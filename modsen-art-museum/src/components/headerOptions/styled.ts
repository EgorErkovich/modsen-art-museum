import styled from 'styled-components';

const HeaderOptionsBox = styled.div`
  display: flex;
  gap: 16px;
`;

const HeaderHomeFavorites = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const HeaderOptionsText = styled.span`
  top: 2px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const HeaderHome = styled(HeaderHomeFavorites)``;

const HeaderFavorites = styled(HeaderHomeFavorites)``;

const HomeFavoritesImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 24px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
`;

const HomeImgBox = styled(HomeFavoritesImgBox)`
  position: relative;
`;

const FavoritesImgBox = styled(HomeFavoritesImgBox)``;

const FavoritesImg = styled.svg`
  width: 17px;
  height: 21px;

  path {
    stroke: #e0a449;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

const HomeImgHome = styled.svg`
  width: 20px;
  height: 23px;

  path {
    stroke: #e0a449;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

const HomeImgDoor = styled.svg`
  width: 8px;
  height: 13px;
  position: absolute;

  path {
    stroke: #e0a449;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

export {
  HeaderOptionsBox,
  HeaderHome,
  HeaderFavorites,
  HomeImgBox,
  FavoritesImgBox,
  FavoritesImg,
  HomeImgHome,
  HomeImgDoor,
  HeaderOptionsText,
};
