import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.div<{ $isSmall: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};

  ${({ $isSmall }) =>
    $isSmall
      ? `
      width: 100%;
      height: 100%;
      padding: 16px;
      justify-content: space-between;
      gap: clamp(12px, 1.11vw, 16px);
      background-color: #ffffff;
    `
      : `
      flex-direction: column;
      position: relative;
      width: clamp(220px, 27.1vw, 387px);
      height: clamp(300px, 36vw, 514px);
      aspect-ratio: 1 / 1.3;

      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    `}
`;

const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;

const CardImg = styled.div<{ $isSmall?: boolean; $backgroundImage: string }>`
  aspect-ratio: ${({ $isSmall }) => ($isSmall ? '1 / 1' : '1 / 1.15')};
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ $isSmall, $backgroundImage }) =>
    $isSmall
      ? `
        width: 80px;
        background-image: url(${$backgroundImage});
      `
      : `
        width: 100%;
        max-height: 444px;
        background-image: url(${$backgroundImage});
        
        @media (max-width: 768px) {
          max-height: none;
        }
      `}
`;

const CardInfo = styled.div<{ $isSmall: boolean }>`
  ${({ $isSmall }) =>
    $isSmall
      ? `
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
      `
      : `
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 86%;
        max-width: 334px;
        max-height: 132px;
        height: auto;
        aspect-ratio: 1 / 0.4;
        position: absolute;
        bottom: 0;
        margin-bottom: calc((5 / 112) * 100vw - (240 / 7) * 1px);
        padding: clamp(16px, 2.22vw, 32px) clamp(12px, 1.67vw, 24px) clamp(16px, 2.22vw, 32px) clamp(12px, 1.67vw, 24px);
        gap: 8px;
        background-color: white;
        border: 1px solid #f0f1f1;

        @media (max-width: 768px) {
          max-width: none;
          max-height: none;
          margin-bottom: 0px;
        }
    `}
`;

const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: space-between;
  min-height: clamp(0px, 6.81vw, 98px);

  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: clamp(11px, 1.07vw, 15.35px);
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: 26.32px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: clamp(14px, 2.34vw, 18px);
    line-height: 26.32px;
  }
`;

const UserArtArtistBox = styled.div`
  padding: 4px 0px 4px 0px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoUserArt = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: clamp(14px, 1.22vw, 17.54px);
  font-weight: ${({ theme }) => theme.fonts.weight.extraRegular};
  line-height: clamp(18px, 1.83vw, 26.32px);
  letter-spacing: -0.03em;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: clamp(16px, 2.86vw, 22px);
    line-height: 26.32px;
  }
`;

const InfoUserArtist = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: clamp(11px, 1.07vw, 15.35px);
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: clamp(18px, 1.83vw, 26.32px);
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: clamp(14px, 2.34vw, 18px);
    line-height: 26.32px;
  }
`;

const FavoritesImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 24px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
`;

const FavoritesImg = styled.svg`
  width: 17px;
  height: 21px;

  path {
    stroke: ${({ theme }) => theme.colors.secondary};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

const CardInfoIcon = styled.div<{ $isFavorite: boolean }>`
  width: clamp(45px, 4.1vw, 59px);
  height: clamp(45px, 4.1vw, 59px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17.54px;
  gap: 10.97px;
  border-radius: 35.09px;
  background-color: ${({ $isFavorite, theme }) =>
    $isFavorite ? theme.colors.isFavorite : theme.colors.isNotFavorite};
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: ${({ $isFavorite, theme }) =>
      $isFavorite ? theme.colors.isFavorite : theme.colors.favoriteHover};
    transition: 300ms;
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    width: 59px;
    height: 59px;
  }
`;

export {
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
};
