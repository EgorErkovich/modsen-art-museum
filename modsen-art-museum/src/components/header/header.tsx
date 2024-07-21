import { Logo, HeaderOptions } from '../../index';
import HeaderFooterContentBox from '../shared/styled';
import StyledHeader from './styled';

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
