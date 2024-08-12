import { ArrowDown, ArrowUp, SortBlockContainer, SortButton } from '@components/sortBlock/styled';
import { ISortBlockProps } from '@src/index';
import React, { useState } from 'react';

const SortBlock: React.FC<ISortBlockProps> = ({ onSortByAlphabet, onSortByDate }) => {
  const [alphabetSortOrder, setAlphabetSortOrder] = useState<string>('');
  const [dateSortOrder, setDateSortOrder] = useState<string>('');

  const toggleAlphabetSortOrder = () => {
    setAlphabetSortOrder((prevOrder) => {
      const newOrder = prevOrder === '' ? 'asc' : prevOrder === 'asc' ? 'desc' : '';
      setDateSortOrder('');

      return newOrder;
    });
  };

  const toggleDateSortOrder = () => {
    setDateSortOrder((prevOrder) => {
      const newOrder = prevOrder === '' ? 'asc' : prevOrder === 'asc' ? 'desc' : '';
      setAlphabetSortOrder('');

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
