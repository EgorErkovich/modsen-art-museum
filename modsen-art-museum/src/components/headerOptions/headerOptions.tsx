import {
  BurgerIcon,
  DesktopMenu,
  FavoritesImg,
  FavoritesImgBox,
  HeaderFavorites,
  HeaderHome,
  HeaderOptionsBox,
  HeaderOptionsText,
  HomeImgBox,
  HomeImgDoor,
  HomeImgHome,
  MobileMenu,
} from '@components/headerOptions/styled';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  to: string;
  text: string;
  renderIcon: JSX.Element;
  isVisible: boolean;
  isMobile: boolean;
}

const HeaderOptions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems: MenuItem[] = [
    {
      to: '/home',
      text: 'Home',
      renderIcon: (
        <HomeImgBox>
          <HomeImgHome>
            <path d="M1 8.5L10 1.5L19 8.5V19.5C19 20.0304 18.7893 20.5391 18.4142 20.9142C18.0391 21.2893 17.5304 21.5 17 21.5H3C2.46957 21.5 1.96086 21.2893 1.58579 20.9142C1.21071 20.5391 1 20.0304 1 19.5V8.5Z" />
          </HomeImgHome>
          <HomeImgDoor>
            <path d="M1 11.5V1.5H7V11.5" />
          </HomeImgDoor>
        </HomeImgBox>
      ),
      isVisible: location.pathname !== '/home',
      isMobile: true,
    },
    {
      to: '/favorites',
      text: 'Your favorites',
      renderIcon: (
        <FavoritesImgBox>
          <FavoritesImg>
            <path d="M15.5 19.5L8.375 15.5L1.25 19.5V3.5C1.25 2.96957 1.46448 2.46086 1.84625 2.08579C2.22802 1.71071 2.74581 1.5 3.28571 1.5H13.4643C14.0042 1.5 14.522 1.71071 14.9038 2.08579C15.2855 2.46086 15.5 2.96957 15.5 3.5V19.5Z" />
          </FavoritesImg>
        </FavoritesImgBox>
      ),
      isVisible: true,
      isMobile: true,
    },
  ];

  const renderMenuItem = ({ to, text, renderIcon, isMobile }: MenuItem) => (
    <Link key={to} to={to} style={{ textDecoration: 'none' }}>
      <div onClick={isMobile ? toggleMenu : undefined}>
        {isMobile ? (
          <HeaderHome>
            {renderIcon}
            <HeaderOptionsText>{text}</HeaderOptionsText>
          </HeaderHome>
        ) : (
          <HeaderFavorites>
            {renderIcon}
            <HeaderOptionsText>{text}</HeaderOptionsText>
          </HeaderFavorites>
        )}
      </div>
    </Link>
  );

  return (
    <HeaderOptionsBox>
      <BurgerIcon $isOpen={isMenuOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerIcon>

      {isMenuOpen && (
        <MobileMenu>
          {menuItems.map((item) => item.isVisible && renderMenuItem({ ...item, isMobile: true }))}
        </MobileMenu>
      )}

      <DesktopMenu>
        {menuItems.map((item) => item.isVisible && renderMenuItem({ ...item, isMobile: false }))}
      </DesktopMenu>
    </HeaderOptionsBox>
  );
};

export default HeaderOptions;
