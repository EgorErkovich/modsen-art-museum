import styled from 'styled-components';

const StyledDetailedInfo = styled.div`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: clamp(20px, 2.09vw, 30px);

  @media (max-width: 768px) {
    gap: clamp(20px, 3.91vw, 30px);
  }
`;

const ArtInfo = styled.div`
  width: clamp(400px, 44.45vw, 640px);
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.12vw, 16px);

  @media (max-width: 768px) {
    width: 100%;
    gap: clamp(10px, 2.09vw, 16px);
  }
`;

const ArtInfoOverviewTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-align: left;
  font-size: clamp(28px, 2.23vw, ${({ theme }) => theme.fonts.size.primary});
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: 40px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: clamp(10px, 1.12vw, ${({ theme }) => theme.fonts.size.secondary});

  @media (max-width: 768px) {
    font-size: clamp(24px, 4.17vw, ${({ theme }) => theme.fonts.size.primary});
    margin-bottom: clamp(10px, 2.09vw, ${({ theme }) => theme.fonts.size.secondary});
  }
`;

const ArtInfoArtist = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-align: left;
  font-size: clamp(20px, 1.67vw, 24px);
  line-height: 30px;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: clamp(18px, 3.125vw, 24px);
  }
`;

const ArtInfoYears = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-align: left;
  font-size: clamp(14px, 1.12vw, ${({ theme }) => theme.fonts.size.secondary});
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: clamp(12px, 2.09vw, ${({ theme }) => theme.fonts.size.secondary});
  }
`;

const Overview = styled.div`
  display: flex;
  gap: clamp(10px, 1.12vw, ${({ theme }) => theme.fonts.size.secondary});
  flex-direction: column;

  @media (max-width: 768px) {
    gap: clamp(10px, 2.09vw, ${({ theme }) => theme.fonts.size.secondary});
  }
`;

const DimensionsTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const OverviewData = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-align: left;
  font-size: clamp(10px, 1.12vw, ${({ theme }) => theme.fonts.size.secondary});
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${DimensionsTitle} {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: clamp(12px, 2.09vw, ${({ theme }) => theme.fonts.size.secondary});
  }
`;

export {
  ArtInfo,
  ArtInfoArtist,
  ArtInfoOverviewTitle,
  ArtInfoYears,
  DimensionsTitle,
  Overview,
  OverviewData,
  StyledDetailedInfo,
};
