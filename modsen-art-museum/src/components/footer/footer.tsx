import HeaderFooterContentBox from '../shared/styled';
import StyledFooter from './styled';
import logo from '../../assets/logo modsen.png';
import { Logo } from '../../index';

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
