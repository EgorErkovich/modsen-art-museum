import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 127px;
  width: 100%;
  margin-top: clamp(100px, 8.33vw, 120px);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100px;
    margin-top: clamp(0px, 13vw, 100px);
  }

  @media (max-width: 390px) {
    height: 80px;
  }
`;

export default StyledFooter;
