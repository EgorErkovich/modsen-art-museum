import styled from 'styled-components';

const StyledMainGallery = styled.div`
  display: flex;
  justify-content: space-between;
  width: clamp(700px, 90vw, 1280px);
  background-color: grey;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    width: 70%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
    width: 80%;
  }
`;

export default StyledMainGallery;
