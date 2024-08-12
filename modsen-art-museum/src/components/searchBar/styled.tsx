import styled from 'styled-components';

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  width: clamp(600px, 53vw, 762px);
  height: 64px;
  padding: 16px;
  gap: 0px;
  border-radius: 16px;
  justify-content: space-between;
  background-color: #3939390d;
  background-image: url('/src/assets/search.png');
  background-repeat: no-repeat;
  background-position: right 16px center;
  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  font-size: ${({ theme }) => theme.fonts.size.secondary};

  margin-top: 40px;

  &::placeholder {
    font-size: 14px;
    line-height: 16.94px;
    color: #39393980;
  }

  @media (max-width: 768px) {
    height: 48px;
    width: 100%;
    background-size: 25px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 8px;
  margin-left: 5px;
`;

export { ErrorText, FormContainer, InputContainer, StyledInput };
