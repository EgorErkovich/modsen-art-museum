import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationContainer, Button, Arrow, PageNumbers, PageNumber } from './styled';
import { setCurrentPage, setCards, setTotalPages } from '../../store/store';
import { IRootState } from '../../index';

interface PaginationProps {
  setIsLoading: (loading: boolean) => void;
}

const Pagination: React.FC<PaginationProps> = ({ setIsLoading }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: IRootState) => state.pagination.currentPage);
  const totalPages = useSelector((state: IRootState) => state.pagination.totalPages);
  const inputValue = useSelector((state: IRootState) => state.input.value);

  const [startPage, setStartPage] = useState(Math.floor((currentPage - 1) / 4) * 4 + 1);
  const [activePage, setActivePage] = useState(currentPage);

  const ITEMS_PER_PAGE = 3;

  const fetchData = useCallback(
    async (page: number) => {
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

  const handleNext = () => {
    if (startPage < totalPages - 3) {
      setStartPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startPage > 1) {
      setStartPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
    dispatch(setCurrentPage(pageNumber));

    if (pageNumber < startPage || pageNumber >= startPage + 4) {
      setStartPage(Math.floor((pageNumber - 1) / 4) * 4 + 1);
    }
  };

  const isVisibleLeft = startPage > 1;
  const isVisibleRight = startPage < totalPages - 3;

  const visiblePages = Array.from({ length: 4 }, (_, index) => startPage + index).filter(
    (page) => page <= totalPages
  );

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
