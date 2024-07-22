import { MainGalleryCard } from '../../index';
import StyledMainGallery from './styled';

const MainGallery = () => {
  return (
    <StyledMainGallery>
      <MainGalleryCard />
      <MainGalleryCard />
      <MainGalleryCard />
    </StyledMainGallery>
  );
};

export default MainGallery;
