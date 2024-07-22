import styled from 'styled-components';

const StyledMainPageTitle = styled.h1`
  font-family: Lexend Deca;
  font-size: clamp(48px, 4.5vw, 64px);
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: #393939;
  width: clamp(500px, 47.5vw, 684px);

  span {
    color: #f17900;
  }

  @media (max-width: 768px) {
    font-size: clamp(32px, 6.25vw, 48px);
    width: 80%;
    line-height: 48px;
  }
`;

export default StyledMainPageTitle;
