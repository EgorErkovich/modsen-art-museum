import { BlockTitle, FavoritesPageTitle, FavoritesWorks } from '@index';
import { SUBTITLE_SAVED, TITLE_SAVED } from '@utils/constants';

const FavoritesPage = () => {
  return (
    <>
      <FavoritesPageTitle />
      <BlockTitle title={TITLE_SAVED} subtitle={SUBTITLE_SAVED} />
      <FavoritesWorks />
    </>
  );
};

export default FavoritesPage;
