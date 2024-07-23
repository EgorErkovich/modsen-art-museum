import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationContainer, Button, Arrow, PageNumbers, PageNumber } from './styled';
import { setCurrentPage, setCards } from '../../store/store';
import { IRootState } from '../../index';

interface PaginationProps {
  setIsLoading: (loading: boolean) => void;
}

const Pagination: React.FC<PaginationProps> = ({ setIsLoading }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: IRootState) => state.pagination.currentPage);

  const [totalPages, setTotalPages] = useState(0);
  const [startPage, setStartPage] = useState(currentPage);
  const [activePage, setActivePage] = useState(currentPage);

  const ITEMS_PER_PAGE = 3;

  const fetchData = useCallback(
    async (page: number) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?limit=${ITEMS_PER_PAGE}&page=${page}&fields=id,title,artist_display,image_id,is_public_domain`
        );
        const data = await response.json();

        dispatch(setCards(data.data));
        setTotalPages(data.pagination.total_pages);
      } catch (error) {
        console.error('Loading error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, setIsLoading]
  );

  useEffect(() => {
    fetchData(activePage);
  }, [fetchData, activePage]);

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
  };

  const isVisibleLeft = startPage > 1;
  const isVisibleRight = startPage < totalPages - 3;

  const visiblePages = Array.from({ length: 4 }, (_, index) => startPage + index);

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
