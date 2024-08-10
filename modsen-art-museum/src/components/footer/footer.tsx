import logo from '@assets/logo modsen.png';
import StyledFooter from '@components/footer/styled';
import HeaderFooterContentBox from '@components/shared/styled';
import { Logo } from '@index';

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
