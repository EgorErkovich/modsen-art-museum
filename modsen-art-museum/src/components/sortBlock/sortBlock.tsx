import { ArrowDown, ArrowUp, SortBlockContainer, SortButton } from '@components/sortBlock/styled';
import { ISortBlockProps } from '@src/index';
import { DEFAULT_SORT_ORDER } from '@utils/constants';
import React, { useState } from 'react';

const SortBlock: React.FC<ISortBlockProps> = ({ onSortByAlphabet, onSortByDate }) => {
  const [alphabetSortOrder, setAlphabetSortOrder] = useState<string>('');
  const [dateSortOrder, setDateSortOrder] = useState<string>('');

  const toggleAlphabetSortOrder = () => {
    setAlphabetSortOrder((prevOrder) => {
      const newOrder = prevOrder === DEFAULT_SORT_ORDER ? 'asc' : prevOrder === 'asc' ? 'desc' : '';
      setDateSortOrder(DEFAULT_SORT_ORDER);

      return newOrder;
    });
  };

  const toggleDateSortOrder = () => {
    setDateSortOrder((prevOrder) => {
      const newOrder = prevOrder === DEFAULT_SORT_ORDER ? 'asc' : prevOrder === 'asc' ? 'desc' : '';
      setAlphabetSortOrder(DEFAULT_SORT_ORDER);

      return newOrder;
    });
  };

  const handleAlphabetClick = () => {
    toggleAlphabetSortOrder();
    onSortByAlphabet();
  };

  const handleDateClick = () => {
    toggleDateSortOrder();
    onSortByDate();
  };

  return (
    <SortBlockContainer>
      <SortButton onClick={handleAlphabetClick}>
        Sort by Alphabet
        {alphabetSortOrder === 'asc' && <ArrowUp />}
        {alphabetSortOrder === 'desc' && <ArrowDown />}
      </SortButton>
      <SortButton onClick={handleDateClick}>
        Sort by Date
        {dateSortOrder === 'asc' && <ArrowUp />}
        {dateSortOrder === 'desc' && <ArrowDown />}
      </SortButton>
    </SortBlockContainer>
  );
};

export default SortBlock;
