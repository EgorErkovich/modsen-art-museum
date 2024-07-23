import styled, { keyframes } from 'styled-components';

const StyledOtherWorks = styled.div`
  display: grid;
  width: clamp(700px, 90vw, 1280px);
  height: auto;
  aspect-ratio: 3.03 / 1;
  gap: clamp(12px, 1.11vw, 16px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 60px;

  @media (max-width: 768px) {
    width: 85%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }

  @media (max-width: 600px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: none;
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
  justify-content: flex-end;

  height: 200px;
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
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #393939;
`;

export { StyledOtherWorks, Loader, Spinner, LoadingText, LoaderBox };
