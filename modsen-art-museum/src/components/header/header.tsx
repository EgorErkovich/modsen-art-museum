import StyledHeader from '@components/header/styled';
import HeaderFooterContentBox from '@components/shared/styled';
import { HeaderOptions, Logo } from '@index';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderFooterContentBox>
        <Logo museumTextColor="white" />
        <HeaderOptions />
      </HeaderFooterContentBox>
    </StyledHeader>
  );
};

export default Header;
