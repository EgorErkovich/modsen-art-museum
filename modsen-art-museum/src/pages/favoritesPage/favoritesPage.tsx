import { BlockTitle, FavoritesPageTitle, FavoritesWorks } from '../../index';

const FavoritesPage = () => {
  const titleSaved = 'Your favorites list';
  const subtitleSaved = 'Saved by you';

  return (
    <>
      <FavoritesPageTitle />
      <BlockTitle title={titleSaved} subtitle={subtitleSaved} />
      <FavoritesWorks />
    </>
  );
};

export default FavoritesPage;
