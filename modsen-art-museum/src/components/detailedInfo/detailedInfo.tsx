import {
  ArtInfo,
  ArtInfoArtist,
  ArtInfoOverviewTitle,
  ArtInfoYears,
  Overview,
  OverviewData,
  StyledDetailedInfo,
} from './styled';

const DetailedInfo = () => {
  return (
    <StyledDetailedInfo>
      <ArtInfo>
        <ArtInfoOverviewTitle>
          Charles V, bust length, holding a sword, facing right
        </ArtInfoOverviewTitle>
        <ArtInfoArtist>Giovanni Britto</ArtInfoArtist>
        <ArtInfoYears>1535–45</ArtInfoYears>
      </ArtInfo>

      <Overview>
        <ArtInfoOverviewTitle>Overview</ArtInfoOverviewTitle>
        <OverviewData>
          Artist nacionality: <span>German</span>
        </OverviewData>
        <OverviewData>
          Dimensions: <span>Sheet: 19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)</span>
        </OverviewData>
        <OverviewData>
          Credit Line: <span>Rogers Fund, 1917</span>
        </OverviewData>
        <OverviewData>
          Repository: <span>Metropolitan Museum of Art, New York, NY</span>
        </OverviewData>
        <OverviewData>
          <span>Public</span>
        </OverviewData>
      </Overview>
    </StyledDetailedInfo>
  );
};

export default DetailedInfo;
