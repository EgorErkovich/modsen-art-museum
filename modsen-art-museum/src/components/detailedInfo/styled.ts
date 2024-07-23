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
  font-family: Lexend Deca;
  font-size: clamp(28px, 2.23vw, 32px);
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: #393939;
  margin-bottom: clamp(10px, 1.12vw, 16px);

  @media (max-width: 768px) {
    font-size: clamp(24px, 4.17vw, 32px);
    margin-bottom: clamp(10px, 2.09vw, 16px);
  }
`;

const ArtInfoArtist = styled.p`
  font-family: Lexend Deca;
  font-size: clamp(20px, 1.67vw, 24px);
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: #e0a449;

  @media (max-width: 768px) {
    font-size: clamp(18px, 3.125vw, 24px);
  }
`;

const ArtInfoYears = styled.p`
  font-family: Lexend Deca;
  font-size: clamp(14px, 1.12vw, 16px);
  font-weight: 700;
  line-height: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: clamp(12px, 2.09vw, 16px);
  }

  color: #393939;
`;

const Overview = styled.div`
  display: flex;
  gap: clamp(10px, 1.12vw, 16px);
  flex-direction: column;

  @media (max-width: 768px) {
    gap: clamp(10px, 2.09vw, 16px);
  }
`;

const OverviewData = styled.p`
  font-family: Lexend Deca;
  font-size: clamp(10px, 1.12vw, 16px);
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #e0a449;

  span {
    color: #393939;
  }

  @media (max-width: 768px) {
    font-size: clamp(12px, 2.09vw, 16px);
  }
`;

export {
  StyledDetailedInfo,
  ArtInfo,
  ArtInfoOverviewTitle,
  ArtInfoArtist,
  ArtInfoYears,
  Overview,
  OverviewData,
};
