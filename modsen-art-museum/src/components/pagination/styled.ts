import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  width: 182px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin: 0 10px;
`;

const PageNumbers = styled.div`
  display: flex;
  justify-content: center;
`;

const PageNumber = styled.button<{ $active?: boolean }>`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.$active ? '#F17900' : 'none')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: ${(props) => (props.$active ? 600 : 300)};
  line-height: 23px;
  text-align: center;
  color: ${(props) => (props.$active ? '#FFFFFF' : '#393939')};

  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.div<{ $direction: 'left' | 'right'; $isVisible: boolean }>`
  width: 10.65px;
  height: 10.03px;
  border-top: 2px solid #393939;
  border-right: 2px solid #393939;
  opacity: 1;
  transform: ${(props) => (props.$direction === 'right' ? 'rotate(45deg)' : 'rotate(-135deg)')};
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;

export { PaginationContainer, Button, PageNumbers, PageNumber, Arrow };
