import { formatDimensions, IDetailedInfoProps } from '@index';
import { useEffect, useState } from 'react';

const useFetchArtData = (id: string | undefined, favoriteImageIds: number[]) => {
  const [artData, setArtData] = useState<IDetailedInfoProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);

      return;
    }

    const fetchArtData = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_display,date_display,dimensions,credit_line,category_titles,is_public_domain,nationality`
        );

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        if (data.data) {
          const {
            title,
            artist_display: artistDisplay,
            date_display: years,
            dimensions,
            credit_line: creditLine,
            is_public_domain: isPublic,
            image_id: imageId,
            nationality,
          } = data.data;

          const formattedDimensions = formatDimensions(dimensions);

          const convertedData: IDetailedInfoProps = {
            id: Number(id),
            src: `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`,
            artName: title,
            artist: artistDisplay,
            years,
            nationality: nationality || 'Unknown',
            dimensions: formattedDimensions,
            creditLine,
            repository: 'Art Institute of Chicago',
            isPublic,
            isFavorite: !!favoriteImageIds.includes(Number(id)),
          };

          setArtData(convertedData);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArtData();
  }, [id, favoriteImageIds]);

  return { artData, loading };
};

export default useFetchArtData;
