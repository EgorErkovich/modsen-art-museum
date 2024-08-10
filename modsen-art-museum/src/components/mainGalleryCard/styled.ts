import styled from 'styled-components';

const StyledMainGalleryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: clamp(220px, 27.1vw, 387px);
  height: clamp(300px, 36vw, 514px);
  border: 1px solid #f0f1f1;
  aspect-ratio: 1 / 1.3;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const CardImg = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 1 / 1.15;
  height: auto;
  max-height: 444px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    max-height: none;
  }
`;

const CardInfo = styled.div`
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
  padding: clamp(16px, 2.22vw, 32px) clamp(12px, 1.67vw, 24px) clamp(16px, 2.22vw, 32px)
    clamp(12px, 1.67vw, 24px);
  gap: 8px;
  background-color: white;
  border: 1px solid #f0f1f1;

  @media (max-width: 768px) {
    max-width: none;
    max-height: none;
    margin-bottom: 0px;
  }
`;

const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: space-between;
  min-height: clamp(0px, 6.81vw, 98px);

  font-family: Lexend Deca;
  font-size: clamp(11px, 1.07vw, 15.35px);
  font-weight: 700;
  line-height: 26.32px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #393939;

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
  font-family: Lexend Deca;
  font-size: clamp(14px, 1.22vw, 17.54px);
  font-weight: 500;
  line-height: clamp(18px, 1.83vw, 26.32px);
  letter-spacing: -0.03em;
  text-align: left;
  color: #393939;

  @media (max-width: 768px) {
    font-size: clamp(16px, 2.86vw, 22px);
    line-height: 26.32px;
  }
`;

const InfoUserArtist = styled.p`
  font-family: Lexend Deca;
  font-size: clamp(11px, 1.07vw, 15.35px);
  font-weight: 400;
  line-height: clamp(18px, 1.83vw, 26.32px);
  letter-spacing: -0.01em;
  text-align: left;
  color: #e0a449;

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
    stroke: #e0a449;
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
  background-color: ${({ $isFavorite }) => ($isFavorite ? '#fbd7b24d' : '#f9f9f9')};
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: ${({ $isFavorite }) => ($isFavorite ? '#fbd7b24d' : '#f8f8f8')};
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
  StyledMainGalleryCard,
  UserArtArtistBox,
};
