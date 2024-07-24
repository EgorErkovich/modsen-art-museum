import styled, { keyframes } from 'styled-components';

const StyledDetailInfoPage = styled.div`
  margin-top: clamp(100px, 8.33vw, 120px);
  display: flex;
  gap: clamp(50px, 6.95vw, 100px);

  @media (max-width: 768px) {
    margin-top: clamp(60px, 13vw, 100px);
    flex-direction: column;
    width: 70%;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: clamp(220px, 27.1vw, 387px);
  height: clamp(300px, 36vw, 514px);
  aspect-ratio: 1 / 1.3;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #f17900;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.span`
  margin-top: 10px;
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #393939;
`;

export { StyledDetailInfoPage, Loader, Spinner, LoadingText, LoaderBox };
