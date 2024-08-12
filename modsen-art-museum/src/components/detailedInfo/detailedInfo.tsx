import {
  ArtInfo,
  ArtInfoArtist,
  ArtInfoOverviewTitle,
  ArtInfoYears,
  DimensionsTitle,
  Overview,
  OverviewData,
  StyledDetailedInfo,
} from '@components/detailedInfo/styled';
import { IDetailedInfoProps } from '@index';

const DetailedInfo: React.FC<{ artDetails: IDetailedInfoProps }> = ({ artDetails }) => {
  const checkedArtDetails = artDetails || {
    artName: 'No name',
    artist: 'No name',
    years: 'unknown',
    nationality: 'unknown',
    creditLine: 'unknown',
    repository: 'unknown',
    isPublic: false,
    dimensions: 'unknown',
  };
  const { artName, artist, years, nationality, creditLine, repository, isPublic, dimensions } =
    checkedArtDetails;
  const dimensionsArray = dimensions.split(' ');
  const sheetWord = dimensionsArray.shift();
  const dimensionsFormatted = dimensionsArray.join(' ');

  const overviewItems = [
    { label: 'Artist nationality:', value: nationality },
    {
      label: 'Dimensions:',
      value: (
        <>
          <DimensionsTitle>{sheetWord}</DimensionsTitle> <span>{dimensionsFormatted}</span>
        </>
      ),
    },
    { label: 'Credit Line:', value: creditLine },
    { label: 'Repository:', value: repository },
    { label: 'Availability:', value: isPublic ? 'Public' : 'Private' },
  ];

  return (
    <StyledDetailedInfo>
      <ArtInfo>
        <ArtInfoOverviewTitle>{artName}</ArtInfoOverviewTitle>
        <ArtInfoArtist>{artist}</ArtInfoArtist>
        <ArtInfoYears>{years}</ArtInfoYears>
      </ArtInfo>

      <Overview>
        <ArtInfoOverviewTitle>Overview</ArtInfoOverviewTitle>
        {overviewItems.map(({ label, value }, index) => (
          <OverviewData key={index}>
            {label} <span>{value}</span>
          </OverviewData>
        ))}
      </Overview>
    </StyledDetailedInfo>
  );
};

export default DetailedInfo;
