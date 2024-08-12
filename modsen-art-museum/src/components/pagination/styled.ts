import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 25px;
  width: clamp(700px, 90vw, 1280px);

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
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
  margin: 0 10px;
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
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
  opacity: 1;
  transform: ${(props) => (props.$direction === 'right' ? 'rotate(45deg)' : 'rotate(-135deg)')};
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
  margin: 0 5px;
`;

export { Arrow, Button, PageNumber, PageNumbers, PaginationContainer };
