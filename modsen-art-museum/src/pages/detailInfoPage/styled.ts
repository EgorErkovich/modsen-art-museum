import styled from 'styled-components';

const StyledDetailInfoPage = styled.div`
  margin-top: clamp(100px, 8.33vw, 120px);
  display: flex;
  gap: clamp(50px, 6.95vw, 100px);

  @media (max-width: 768px) {
    margin-top: clamp(60px, 13vw, 100px);
    flex-direction: column;
    width: 70%;
  }
`;

export default StyledDetailInfoPage;
