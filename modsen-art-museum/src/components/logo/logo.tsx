import {
  LogoArtText,
  LogoBox,
  LogoColumn,
  LogoColumnBox,
  LogoFoundation,
  LogoImgBox,
  LogoMuseumText,
  LogoRoof,
  LogoTextBox,
} from '@components/logo/styled';
import { ART_TEXT, COLUMN_ICON, FOUNDATION_ICON, MUSEUM_TEXT, ROOF_ICON } from '@utils/constants';

const Logo = ({ museumTextColor }: { museumTextColor?: string }) => {
  return (
    <LogoBox>
      <LogoImgBox>
        <LogoRoof>
          <path d={ROOF_ICON} />
        </LogoRoof>
        <LogoColumnBox>
          {[...Array(4)].map((_, index) => (
            <LogoColumn key={index}>
              <path d={COLUMN_ICON} />
            </LogoColumn>
          ))}
        </LogoColumnBox>
        <LogoFoundation>
          <path d={FOUNDATION_ICON} />
        </LogoFoundation>
      </LogoImgBox>
      <LogoTextBox>
        <LogoMuseumText color={museumTextColor}>
          <path d={MUSEUM_TEXT} />
        </LogoMuseumText>
        <LogoArtText>
          <path d={ART_TEXT} />
        </LogoArtText>
      </LogoTextBox>
    </LogoBox>
  );
};

export default Logo;
