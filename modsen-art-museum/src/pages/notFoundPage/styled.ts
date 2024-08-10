import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #f17900;
  margin: 0;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

export { Container, Message, Title };
