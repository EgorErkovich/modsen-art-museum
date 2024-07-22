import { useState } from 'react';
import { PaginationContainer, Button, Arrow, PageNumbers, PageNumber } from './styled';

const Pagination = () => {
  const totalPages = 10;
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

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
    console.log(pageNumber);
  };

  const isVisibleLeft = startPage > 1;
  const isVisibleRight = startPage < totalPages - 3;

  return (
    <PaginationContainer>
      <Button onClick={handlePrev} disabled={!isVisibleLeft}>
        <Arrow $direction="left" $isVisible={isVisibleLeft} />
      </Button>
      <PageNumbers>
        {Array.from({ length: 4 }, (_, index) => {
          const pageNumber = startPage + index;

          return (
            <PageNumber
              key={index}
              onClick={() => handlePageClick(pageNumber)}
              $active={pageNumber === activePage}
            >
              {pageNumber}
            </PageNumber>
          );
        })}
      </PageNumbers>
      <Button onClick={handleNext} disabled={!isVisibleRight}>
        <Arrow $direction="right" $isVisible={isVisibleRight} />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
