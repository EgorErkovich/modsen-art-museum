import {
  BlockTitle,
  IRootState,
  MainGallery,
  MainPageTitle,
  OtherWorks,
  Pagination,
  SearchBar,
  SortBlock,
} from '@index';
import { setSortBy, setSortOrder } from '@store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const sortOrder = useSelector((state: IRootState) => state.pagination.sortOrder);
  const sortBy = useSelector((state: IRootState) => state.pagination.sortBy);

  const titleGallery = 'Our special gallery';
  const subtitleGallery = 'Topics for you';
  const titleOther = 'Other works for you';
  const subtitleOther = 'Here some more';

  const handleSortAlphabetically = () => {
    const newSortOrder =
      sortBy === 'date_start' && sortOrder !== ''
        ? 'asc'
        : sortOrder === ''
          ? 'asc'
          : sortOrder === 'asc'
            ? 'desc'
            : '';
    dispatch(setSortOrder(newSortOrder));
    dispatch(setSortBy('title.keyword'));
  };

  const handleSortByDateFunc = () => {
    const newSortOrder =
      sortBy === 'title.keyword' && sortOrder !== ''
        ? 'asc'
        : sortOrder === ''
          ? 'asc'
          : sortOrder === 'asc'
            ? 'desc'
            : '';
    dispatch(setSortOrder(newSortOrder));
    dispatch(setSortBy('date_start'));
  };

  return (
    <>
      <MainPageTitle />
      <SearchBar />
      <BlockTitle title={titleGallery} subtitle={subtitleGallery} />
      <SortBlock onSortByAlphabet={handleSortAlphabetically} onSortByDate={handleSortByDateFunc} />
      <MainGallery isLoading={isLoading} />
      <Pagination setIsLoading={setIsLoading} />
      <BlockTitle title={titleOther} subtitle={subtitleOther} />
      <OtherWorks />
    </>
  );
};

export default HomePage;
