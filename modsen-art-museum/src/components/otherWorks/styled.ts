import styled from 'styled-components';

const StyledOtherWorks = styled.div`
  display: grid;
  width: clamp(700px, 90vw, 1280px);
  height: auto;
  aspect-ratio: 3.03 / 1;
  gap: clamp(12px, 1.11vw, 16px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 60px;

  @media (max-width: 768px) {
    width: 85%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }

  @media (max-width: 600px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: none;
  }
`;

export default StyledOtherWorks;
