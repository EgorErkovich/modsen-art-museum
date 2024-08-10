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
  const dimensionsArray = artDetails.dimensions.split(' ');
  const sheetWord = dimensionsArray.shift();
  const dimensions = dimensionsArray.join(' ');

  const overviewItems = [
    { label: 'Artist nationality:', value: artDetails.nationality },
    {
      label: 'Dimensions:',
      value: (
        <>
          <DimensionsTitle>{sheetWord}</DimensionsTitle> <span>{dimensions}</span>
        </>
      ),
    },
    { label: 'Credit Line:', value: artDetails.creditLine },
    { label: 'Repository:', value: artDetails.repository },
    { label: 'Availability:', value: artDetails.isPublic ? 'Public' : 'Private' },
  ];

  return (
    <StyledDetailedInfo>
      <ArtInfo>
        <ArtInfoOverviewTitle>{artDetails.artName}</ArtInfoOverviewTitle>
        <ArtInfoArtist>{artDetails.artist}</ArtInfoArtist>
        <ArtInfoYears>{artDetails.years}</ArtInfoYears>
      </ArtInfo>

      <Overview>
        <ArtInfoOverviewTitle>Overview</ArtInfoOverviewTitle>
        {overviewItems.map((item, index) => (
          <OverviewData key={index}>
            {item.label} <span>{item.value}</span>
          </OverviewData>
        ))}
      </Overview>
    </StyledDetailedInfo>
  );
};

export default DetailedInfo;
