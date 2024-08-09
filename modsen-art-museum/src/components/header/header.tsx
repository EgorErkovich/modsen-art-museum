import { Logo, HeaderOptions } from '@index';
import HeaderFooterContentBox from '@components/shared/styled';
import StyledHeader from '@components/header/styled';

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
