import { Logo } from '@index';
import HeaderFooterContentBox from '@components/shared/styled';
import StyledFooter from '@components/footer/styled';
import logo from '@assets/logo modsen.png';

const Footer = () => {
  return (
    <StyledFooter>
      <HeaderFooterContentBox>
        <Logo museumTextColor="black" />
        <img src={logo} alt="Modsen logo" />
      </HeaderFooterContentBox>
    </StyledFooter>
  );
};

export default Footer;
