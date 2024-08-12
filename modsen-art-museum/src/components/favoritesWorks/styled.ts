import styled from 'styled-components';

const StyledFavoritesWorks = styled.div`
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

const IsEmptyText = styled.p`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.primary};
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.title};
  }
`;

export { IsEmptyText, StyledFavoritesWorks };
