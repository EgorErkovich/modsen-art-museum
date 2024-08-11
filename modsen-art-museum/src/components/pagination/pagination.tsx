import {
  Arrow,
  Button,
  PageNumber,
  PageNumbers,
  PaginationContainer,
} from '@components/pagination/styled';
import { IRootState } from '@index';
import { AppDispatch, setCards, setCurrentPage, setTotalPages } from '@store';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ITEMS_PER_PAGE = 3;
const MAX_VISIBLE_PAGES = 4;

const fetchArtworks = async (
  page: number,
  inputValue: string,
  setIsLoading: (loading: boolean) => void,
  dispatch: AppDispatch
) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?limit=${ITEMS_PER_PAGE}&page=${page}&fields=id,title,artist_display,image_id,is_public_domain${inputValue ? `&q=${inputValue}` : ''}`
    );
    const data = await response.json();

    dispatch(setCards(data.data));
    dispatch(setTotalPages(data.pagination.total_pages));
  } catch (error) {
    console.error('Loading error:', error);
  } finally {
    setIsLoading(false);
  }
};

const Pagination: React.FC<{ setIsLoading: (loading: boolean) => void }> = ({ setIsLoading }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: IRootState) => state.pagination.currentPage);
  const totalPages = useSelector((state: IRootState) => state.pagination.totalPages);
  const inputValue = useSelector((state: IRootState) => state.input.value);

  const [startPage, setStartPage] = useState(
    Math.floor((currentPage - 1) / MAX_VISIBLE_PAGES) * MAX_VISIBLE_PAGES + 1
  );
  const [activePage, setActivePage] = useState(currentPage);

  const fetchData = useCallback(
    (page: number) => {
      fetchArtworks(page, inputValue, setIsLoading, dispatch);
    },
    [dispatch, setIsLoading, inputValue]
  );

  useEffect(() => {
    fetchData(activePage);
  }, [fetchData, activePage]);

  useEffect(() => {
    if (inputValue) {
      setActivePage(1);
      setStartPage(1);
      fetchData(1);
    }
  }, [inputValue, fetchData]);

  const handleNext = useCallback(() => {
    if (startPage < totalPages - MAX_VISIBLE_PAGES + 1) {
      setStartPage((prev) => prev + 1);
    }
  }, [startPage, totalPages]);

  const handlePrev = useCallback(() => {
    if (startPage > 1) {
      setStartPage((prev) => prev - 1);
    }
  }, [startPage]);

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      setActivePage(pageNumber);
      dispatch(setCurrentPage(pageNumber));

      if (pageNumber < startPage || pageNumber >= startPage + MAX_VISIBLE_PAGES) {
        setStartPage(Math.floor((pageNumber - 1) / MAX_VISIBLE_PAGES) * MAX_VISIBLE_PAGES + 1);
      }
    },
    [dispatch, startPage]
  );

  const isVisibleLeft = startPage > 1;
  const isVisibleRight = startPage < totalPages - MAX_VISIBLE_PAGES + 1;

  const visiblePages = Array.from(
    { length: MAX_VISIBLE_PAGES },
    (_, index) => startPage + index
  ).filter((page) => page <= totalPages);

  return (
    <PaginationContainer>
      <Button onClick={handlePrev} disabled={!isVisibleLeft}>
        <Arrow $direction="left" $isVisible={isVisibleLeft} />
      </Button>
      <PageNumbers>
        {visiblePages.map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            $active={pageNumber === activePage}
          >
            {pageNumber}
          </PageNumber>
        ))}
      </PageNumbers>
      <Button onClick={handleNext} disabled={!isVisibleRight}>
        <Arrow $direction="right" $isVisible={isVisibleRight} />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
