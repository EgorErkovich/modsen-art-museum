import {
  LoaderBox,
  LoaderContainer,
  LoadingSpinnerText,
  LoadingText,
  Spinner,
} from '@components/loader/styled';

interface LoaderProps {
  height: number;
  minHeight: number;
}

const Loader: React.FC<LoaderProps> = ({ height, minHeight }) => {
  return (
    <LoaderContainer height={height} $minHeight={minHeight}>
      <LoaderBox>
        <LoadingSpinnerText>
          <Spinner />
          <LoadingText>Loading...</LoadingText>
        </LoadingSpinnerText>
      </LoaderBox>
    </LoaderContainer>
  );
};

export default Loader;
