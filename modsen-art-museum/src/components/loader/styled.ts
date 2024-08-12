import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LoaderContainer = styled.div<{ height: number; $minHeight: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ $minHeight }) => `${$minHeight}px`};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinnerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 200px;
  aspect-ratio: 1 / 1.3;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.border};
  border-top: 8px solid ${({ theme }) => theme.colors.title};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.span`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: 18px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export { LoaderBox, LoaderContainer, LoadingSpinnerText, LoadingText, Spinner };
