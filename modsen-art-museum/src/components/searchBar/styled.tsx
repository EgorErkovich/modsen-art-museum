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
  color: #f17900;

  font-family: Inter;
  font-weight: 400;
  font-size: 16px;

  margin-top: 40px;

  &::placeholder {
    font-size: 14px;
    line-height: 16.94px;
    color: #39393980;
  }

  @media (max-width: 768px) {
    height: 48px;
    width: 80%;
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
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 8px;
  margin-left: 5px;
`;

export { ErrorText, FormContainer, InputContainer, StyledInput };
