import styled from 'styled-components';

const StyledBlockTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

const BlockTitleTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: 40px;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
`;

const BlockTitleSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondary};
`;

export { BlockTitleSubtitle, BlockTitleTitle, StyledBlockTitle };
