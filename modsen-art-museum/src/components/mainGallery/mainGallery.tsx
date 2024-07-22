import { MainGalleryCard, Pagination } from '../../index';
import { StyledMainGallery, StyledMainGalleryBox } from './styled';

const MainGallery = () => {
  return (
    <StyledMainGalleryBox>
      <StyledMainGallery>
        <MainGalleryCard />
        <MainGalleryCard />
        <MainGalleryCard />
      </StyledMainGallery>
      <Pagination />
    </StyledMainGalleryBox>
  );
};

export default MainGallery;
