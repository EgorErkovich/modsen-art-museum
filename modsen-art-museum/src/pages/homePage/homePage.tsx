import { useState } from 'react';
import {
  BlockTitle,
  MainGallery,
  MainPageTitle,
  OtherWorks,
  SearchBar,
  Pagination,
} from '../../index';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const titleGallery = 'Our special gallery';
  const subtitleGallery = 'Topics for you';
  const titleOther = 'Other works for you';
  const subtitleOther = 'Here some more';

  return (
    <>
      <MainPageTitle />
      <SearchBar />
      <BlockTitle title={titleGallery} subtitle={subtitleGallery} />
      <MainGallery isLoading={isLoading} />
      <Pagination setIsLoading={setIsLoading} />{' '}
      <BlockTitle title={titleOther} subtitle={subtitleOther} />
      <OtherWorks />
    </>
  );
};

export default HomePage;
