import styled from 'styled-components';

const StyledFavoritesPageTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: clamp(48px, 4.5vw, ${({ theme }) => theme.fonts.size.title});
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: 80px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  width: clamp(500px, 47.5vw, 684px);
  margin-top: 120px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.title};
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
    stroke: ${({ theme }) => theme.colors.title};
    stroke-width: 4.69765;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export { FavoritesImg, FavoritesImgBox, StyledFavoritesPageTitle };
