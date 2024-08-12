import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;

const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.title};
  margin: 0;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export { Container, Message, Title };
