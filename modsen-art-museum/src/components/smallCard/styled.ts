import styled from 'styled-components';

const StyledSmallCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 1.11vw, 16px);
  border: 1px 0px 0px 0px;
  background-color: #ffffff;
  border: 1px solid #f0f1f1;
`;

const CardImg = styled.div`
  width: 80px;
  aspect-ratio: 1 / 1;
  height: auto;
  background-image: url('https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  CardInfoIcon,
  FavoritesImg,
  FavoritesImgBox,
  InfoUser,
  InfoUserArt,
  InfoUserArtist,
  StyledSmallCard,
  UserArtArtistBox,
};
