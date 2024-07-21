import { Logo, HeaderOptions } from '../../index';
import { HeaderContentBox, StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContentBox>
        <Logo />
        <HeaderOptions />
      </HeaderContentBox>
    </StyledHeader>
  );
};

export default Header;
