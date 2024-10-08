import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderOptionsBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 3px 0;
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    display: none;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    div:nth-child(1) { transform: rotate(45deg) translate(8px, 5px); }
    div:nth-child(2) { opacity: 0; }
    div:nth-child(3) { transform: rotate(-45deg) translate(8px, -5px); }
  `}
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75px;
  right: 30px;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  padding: 16px;
  border-radius: 8px;
  z-index: 10;

  a {
    margin: 8px 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    gap: 16px;
  }
`;

const HeaderHomeFavorites = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const HeaderOptionsText = styled.span`
  position: relative;
  top: 2px;
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-size: 18px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: ${({ theme }) => theme.colors.background};

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const MobileMenuItem = styled(HeaderHomeFavorites)``;

const DesktopMenuItem = styled(HeaderHomeFavorites)``;

const HomeFavoritesImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 24px;
  height: 24px;
`;

const HomeImgBox = styled(HomeFavoritesImgBox)`
  position: relative;
`;

const FavoritesImgBox = styled(HomeFavoritesImgBox)``;

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

const HomeImgHome = styled.svg`
  width: 20px;
  height: 23px;

  path {
    stroke: ${({ theme }) => theme.colors.secondary};
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
    stroke: ${({ theme }) => theme.colors.secondary};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;

export {
  BurgerIcon,
  DesktopMenu,
  DesktopMenuItem,
  FavoritesImg,
  FavoritesImgBox,
  HeaderOptionsBox,
  HeaderOptionsText,
  HomeImgBox,
  HomeImgDoor,
  HomeImgHome,
  MobileMenu,
  MobileMenuItem,
  StyledLink,
};
