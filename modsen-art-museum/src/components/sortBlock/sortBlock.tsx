import { SortBlockContainer, SortButton } from '@components/sortBlock/styled';
import React from 'react';

interface SortBlockProps {
  onSortByAlphabet: () => void;
  onSortByDate: () => void;
}

const SortBlock: React.FC<SortBlockProps> = ({ onSortByAlphabet, onSortByDate }) => {
  return (
    <SortBlockContainer>
      <SortButton onClick={onSortByAlphabet}>Sort by Alphabet</SortButton>
      <SortButton onClick={onSortByDate}>Sort by Date</SortButton>
    </SortBlockContainer>
  );
};

export default SortBlock;
