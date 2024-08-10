import {
  BlockTitle,
  IApiCardData,
  IRootState,
  MainGallery,
  MainPageTitle,
  OtherWorks,
  Pagination,
  SearchBar,
  SortBlock,
} from '@index';
import { setCards } from '@store';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortByDate, setSortByDate] = useState<'asc' | 'desc' | null>(null);

  const currentPage = useSelector((state: IRootState) => state.pagination.currentPage);
  const inputValue = useSelector((state: IRootState) => state.input.value);

  const titleGallery = 'Our special gallery';
  const subtitleGallery = 'Topics for you';
  const titleOther = 'Other works for you';
  const subtitleOther = 'Here some more';

  const fetchSortedData = useCallback(
    async (order: 'asc' | 'desc', sortBy: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/search?sort[${sortBy}][order]=${order}&page=${currentPage}&limit=3&fields=id,title,artist_display,image_id,is_public_domain,date_start${inputValue ? `&q=${inputValue}` : ''}`
        );
        const data = await response.json();

        const artworkIds = data.data.map((artwork: IApiCardData) => artwork.id).join(',');

        if (artworkIds) {
          const artworksResponse = await fetch(
            `https://api.artic.edu/api/v1/artworks?ids=${artworkIds}&fields=id,title,artist_display,image_id,is_public_domain,date_start`
          );

          if (!artworksResponse.ok) {
            throw new Error('Network response was not ok for artwork details');
          }

          const artworksData = await artworksResponse.json();
          const artworks = artworksData.data.map((artwork: IApiCardData) => ({
            id: artwork.id,
            title: artwork.title,
            artist_display: artwork.artist_display,
            image_id: artwork.image_id,
            is_public_domain: artwork.is_public_domain,
          }));

          dispatch(setCards(artworks));
        }
      } catch (error) {
        console.error('Loading error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [currentPage, inputValue, dispatch]
  );

  useEffect(() => {
    const sortBy = sortByDate === null ? 'title.keyword' : 'date_start';
    fetchSortedData(sortOrder, sortBy);
  }, [currentPage, sortOrder, sortByDate, fetchSortedData]);

  const handleSortByAlphabet = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    setSortByDate(null);
  };

  const handleSortByDate = () => {
    const newDateOrder = sortByDate === 'asc' ? 'desc' : 'asc';
    setSortByDate(newDateOrder);

    setSortOrder(newDateOrder === 'asc' ? 'asc' : 'desc');
    fetchSortedData(newDateOrder, 'date_start');
  };

  return (
    <>
      <MainPageTitle />
      <SearchBar />
      <BlockTitle title={titleGallery} subtitle={subtitleGallery} />
      <SortBlock onSortByAlphabet={handleSortByAlphabet} onSortByDate={handleSortByDate} />
      <MainGallery isLoading={isLoading} />
      <Pagination setIsLoading={setIsLoading} />
      <BlockTitle title={titleOther} subtitle={subtitleOther} />
      <OtherWorks />
    </>
  );
};

export default HomePage;
