import {
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
} from '@components/headerOptions/styled';
import { IMenuItem } from '@index';
import { DOOR_ICON, FAVORITE_ICON, HOME_ICON, ROUTE_FAVORITES, ROUTE_HOME } from '@utils/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const menuItems: IMenuItem[] = [
  {
    to: ROUTE_HOME,
    text: 'Home',
    renderIcon: (
      <HomeImgBox>
        <HomeImgHome>
          <path d={HOME_ICON} />
        </HomeImgHome>
        <HomeImgDoor>
          <path d={DOOR_ICON} />
        </HomeImgDoor>
      </HomeImgBox>
    ),
    isVisible: true,
    isMobile: true,
  },
  {
    to: ROUTE_FAVORITES,
    text: 'Your favorites',
    renderIcon: (
      <FavoritesImgBox>
        <FavoritesImg>
          <path d={FAVORITE_ICON} />
        </FavoritesImg>
      </FavoritesImgBox>
    ),
    isVisible: true,
    isMobile: true,
  },
];

const HeaderOptions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [visibleMenuItems, setVisibleMenuItems] = useState(menuItems);

  useEffect(() => {
    const updatedMenuItems = menuItems.map((item) => ({
      ...item,
      isVisible: item.to !== ROUTE_HOME || location.pathname !== ROUTE_HOME,
    }));
    setVisibleMenuItems(updatedMenuItems);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const renderMenuItem = ({ to, text, renderIcon, isMobile }: IMenuItem) => {
    const MenuContainer = isMobile ? MobileMenuItem : DesktopMenuItem;

    return (
      <StyledLink key={to} to={to}>
        <div onClick={isMobile ? toggleMenu : undefined}>
          <MenuContainer>
            {renderIcon}
            <HeaderOptionsText>{text}</HeaderOptionsText>
          </MenuContainer>
        </div>
      </StyledLink>
    );
  };

  return (
    <HeaderOptionsBox>
      <BurgerIcon $isOpen={isMenuOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerIcon>

      {isMenuOpen && (
        <MobileMenu>
          {visibleMenuItems.map(
            (item) => item.isVisible && renderMenuItem({ ...item, isMobile: true })
          )}
        </MobileMenu>
      )}

      <DesktopMenu>
        {visibleMenuItems.map(
          (item) => item.isVisible && renderMenuItem({ ...item, isMobile: false })
        )}
      </DesktopMenu>
    </HeaderOptionsBox>
  );
};

export default HeaderOptions;
