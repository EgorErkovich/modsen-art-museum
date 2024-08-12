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
import {
  DEFAULT_SORT_BY_DATE,
  DEFAULT_SORT_BY_TITLE,
  DEFAULT_SORT_ORDER,
  SUBTITLE_GALLERY,
  SUBTITLE_OTHER,
  TITLE_GALLERY,
  TITLE_OTHER,
} from '@utils/constants';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const sortOrder = useSelector((state: IRootState) => state.pagination.sortOrder);
  const sortBy = useSelector((state: IRootState) => state.pagination.sortBy);

  const handleSortAlphabetically = () => {
    const newSortOrder =
      sortBy === DEFAULT_SORT_BY_DATE && sortOrder !== DEFAULT_SORT_ORDER
        ? 'asc'
        : sortOrder === DEFAULT_SORT_ORDER
          ? 'asc'
          : sortOrder === 'asc'
            ? 'desc'
            : '';
    dispatch(setSortOrder(newSortOrder));
    dispatch(setSortBy(DEFAULT_SORT_BY_TITLE));
  };

  const handleSortByDateFunc = () => {
    const newSortOrder =
      sortBy === DEFAULT_SORT_BY_TITLE && sortOrder !== DEFAULT_SORT_ORDER
        ? 'asc'
        : sortOrder === DEFAULT_SORT_ORDER
          ? 'asc'
          : sortOrder === 'asc'
            ? 'desc'
            : '';
    dispatch(setSortOrder(newSortOrder));
    dispatch(setSortBy(DEFAULT_SORT_BY_DATE));
  };

  return (
    <>
      <MainPageTitle />
      <SearchBar />
      <BlockTitle title={TITLE_GALLERY} subtitle={SUBTITLE_GALLERY} />
      <SortBlock onSortByAlphabet={handleSortAlphabetically} onSortByDate={handleSortByDateFunc} />
      <MainGallery isLoading={isLoading} />
      <Pagination setIsLoading={setIsLoading} />
      <BlockTitle title={TITLE_OTHER} subtitle={SUBTITLE_OTHER} />
      <OtherWorks />
    </>
  );
};

export default HomePage;
