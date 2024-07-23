import { useEffect, useState } from 'react';
import { IApiCardData, IMainCardData, SmallCard } from '../../index';
import StyledOtherWorks from './styled';

const OtherWorks = () => {
  const [worksData, setWorksData] = useState<IMainCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.artic.edu/api/v1/artworks?page=100&limit=9&fields=id,title,artist_display,image_id,is_public_domain'
      );
      const data = await response.json();
      const artworks = data.data.map((work: IApiCardData) => ({
        artName: work.title,
        artist: work.artist_display,
        isPublic: work.is_public_domain,
        src: `https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`,
      }));
      setWorksData(artworks);
    } catch (error) {
      console.error('Loading error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledOtherWorks>
      {worksData.map((work, index) => (
        <SmallCard key={index} cardData={work} />
      ))}
    </StyledOtherWorks>
  );
};

export default OtherWorks;
