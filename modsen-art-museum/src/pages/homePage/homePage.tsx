import { BlockTitle, MainGallery, MainPageTitle, OtherWorks, SearchBar } from '../../index';

const HomePage = () => {
  const titleGallery = 'Our special gallery';
  const subtitleGallery = 'Topics for you';

  const titleOther = 'Other works for you';
  const subtitleOther = 'Here some more';

  return (
    <>
      <MainPageTitle />
      <SearchBar />
      <BlockTitle title={titleGallery} subtitle={subtitleGallery} />
      <MainGallery />
      <BlockTitle title={titleOther} subtitle={subtitleOther} />
      <OtherWorks />
    </>
  );
};

export default HomePage;
