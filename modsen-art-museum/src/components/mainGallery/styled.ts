import styled from 'styled-components';

const StyledMainGallery = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledMainGalleryBox = styled.div`
  width: clamp(700px, 90vw, 1280px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export { StyledMainGallery, StyledMainGalleryBox };
