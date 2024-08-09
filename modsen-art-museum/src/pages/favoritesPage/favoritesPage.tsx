import { BlockTitle, ErrorBoundary, FavoritesPageTitle, FavoritesWorks } from '@index';

const FavoritesPage = () => {
  const titleSaved = 'Your favorites list';
  const subtitleSaved = 'Saved by you';

  return (
    <>
      <FavoritesPageTitle />
      <ErrorBoundary>
        <BlockTitle title={titleSaved} subtitle={subtitleSaved} />
      </ErrorBoundary>
      <FavoritesWorks />
    </>
  );
};

export default FavoritesPage;
