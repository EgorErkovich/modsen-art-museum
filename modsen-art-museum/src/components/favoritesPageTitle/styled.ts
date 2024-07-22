import styled from 'styled-components';

const StyledFavoritesPageTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: Lexend Deca;
  font-size: clamp(48px, 4.5vw, 64px);
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: #393939;
  width: clamp(500px, 47.5vw, 684px);
  margin-top: 120px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f17900;
  }

  @media (max-width: 768px) {
    font-size: clamp(38px, 6.25vw, 48px);
    width: 80%;
    line-height: 48px;
    margin-top: 80px;
  }
`;

const FavoritesImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 74px;
`;

const FavoritesImg = styled.svg`
  width: 38px;
  height: 49px;
  fill: none;

  path {
    stroke: #f17900;
    stroke-width: 4.69765;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export { StyledFavoritesPageTitle, FavoritesImgBox, FavoritesImg };
