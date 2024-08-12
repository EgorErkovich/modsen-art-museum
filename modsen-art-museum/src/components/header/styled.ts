import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 127px;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 390px) {
    height: 80px;
  }
`;

export default StyledHeader;
