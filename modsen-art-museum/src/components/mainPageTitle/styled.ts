import styled from 'styled-components';

const StyledMainPageTitle = styled.h1`
  font-family: Lexend Deca;
  font-size: clamp(48px, 4.5vw, ${({ theme }) => theme.fonts.size.title});
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  width: clamp(500px, 47.5vw, 684px);
  margin-top: 120px;

  span {
    color: ${({ theme }) => theme.colors.title};
  }

  @media (max-width: 768px) {
    font-size: clamp(38px, 6.25vw, 48px);
    width: 80%;
    line-height: 48px;
    margin-top: 80px;
  }
`;

export default StyledMainPageTitle;
