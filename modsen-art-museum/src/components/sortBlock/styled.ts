import styled from 'styled-components';

const SortBlockContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  margin: 40px 0 0px;
`;

const SortButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:hover {
    background-color: #b58c2e;
  }
`;

export { SortBlockContainer, SortButton };
