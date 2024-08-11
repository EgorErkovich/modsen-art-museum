import { SortBlockContainer, SortButton } from '@components/sortBlock/styled';
import { ISortBlockProps } from '@index';
import React from 'react';

const SortBlock: React.FC<ISortBlockProps> = ({ onSortByAlphabet, onSortByDate }) => {
  return (
    <SortBlockContainer>
      <SortButton onClick={onSortByAlphabet}>Sort by Alphabet</SortButton>
      <SortButton onClick={onSortByDate}>Sort by Date</SortButton>
    </SortBlockContainer>
  );
};

export default SortBlock;
