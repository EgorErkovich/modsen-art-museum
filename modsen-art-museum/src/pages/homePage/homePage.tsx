import { BlockTitle, MainGallery, MainPageTitle, SearchBar } from '../../index';

const HomePage = () => {
  const title = 'Our special gallery';
  const subtitle = 'Topics for you';

  return (
    <>
      <MainPageTitle />
      <SearchBar />
      <BlockTitle title={title} subtitle={subtitle} />
      <MainGallery />
    </>
  );
};

export default HomePage;
