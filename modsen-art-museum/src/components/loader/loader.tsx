import { LoaderBox, LoadingSpinnerText, LoadingText, Spinner } from '@components/loader/styled';

const Loader = () => {
  return (
    <LoaderBox>
      <LoadingSpinnerText>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </LoadingSpinnerText>
    </LoaderBox>
  );
};

export default Loader;
