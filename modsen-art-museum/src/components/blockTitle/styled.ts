import styled from 'styled-components';

const StyledBlockTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

const BlockTitleTitle = styled.h2`
  font-family: Lexend Deca;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: #393939;
`;

const BlockTitleSubtitle = styled.h3`
  font-family: Lexend Deca;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #e0a449;
`;

export { BlockTitleSubtitle, BlockTitleTitle, StyledBlockTitle };
