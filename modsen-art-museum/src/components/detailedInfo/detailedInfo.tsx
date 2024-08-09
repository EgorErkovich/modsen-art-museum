import { IDetailedInfoProps } from '@index';
import {
  ArtInfo,
  ArtInfoArtist,
  ArtInfoOverviewTitle,
  ArtInfoYears,
  Overview,
  OverviewData,
  StyledDetailedInfo,
  DimensionsTitle,
} from '@components/detailedInfo/styled';

const DetailedInfo: React.FC<{ artDetails: IDetailedInfoProps }> = ({ artDetails }) => {
  const dimensionsArray = artDetails.dimensions.split(' ');
  const sheetWord = dimensionsArray.shift();
  const dimensions = dimensionsArray.join(' ');

  return (
    <StyledDetailedInfo>
      <ArtInfo>
        <ArtInfoOverviewTitle>{artDetails.artName}</ArtInfoOverviewTitle>
        <ArtInfoArtist>{artDetails.artist}</ArtInfoArtist>
        <ArtInfoYears>{artDetails.years}</ArtInfoYears>
      </ArtInfo>

      <Overview>
        <ArtInfoOverviewTitle>Overview</ArtInfoOverviewTitle>
        <OverviewData>
          Artist nationality: <span>{artDetails.nationality}</span>
        </OverviewData>
        <OverviewData>
          Dimensions: <DimensionsTitle>{sheetWord}</DimensionsTitle> <span>{dimensions}</span>
        </OverviewData>
        <OverviewData>
          Credit Line: <span>{artDetails.creditLine}</span>
        </OverviewData>
        <OverviewData>
          Repository: <span>{artDetails.repository}</span>
        </OverviewData>
        <OverviewData>
          <span>{artDetails.isPublic ? 'Public' : 'Private'}</span>
        </OverviewData>
      </Overview>
    </StyledDetailedInfo>
  );
};

export default DetailedInfo;
