import styled from 'styled-components';

const StyledDetailedImg = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: clamp(300px, 34.6vw, 497px);
  aspect-ratio: 1 / 1.15;
  height: auto;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
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
  position: absolute;
  top: 10px;
  right: 10px;
  width: clamp(45px, 4.1vw, 59px);
  height: clamp(45px, 4.1vw, 59px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17.54px;
  gap: 10.97px;
  border-radius: 35.09px;
  opacity: 0px;
  background-color: ${({ $isFavorite }) => ($isFavorite ? '#fbd7b24d' : '#ffffff')};
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: ${({ $isFavorite }) => ($isFavorite ? '#fbd7b24d' : '#f9f9f9')};
    transition: 300ms;
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    width: clamp(45px, 7.68vw, 59px);
    height: clamp(45px, 7.68vw, 59px);
  }
`;

export { CardInfoIcon, FavoritesImg, FavoritesImgBox, StyledDetailedImg };
