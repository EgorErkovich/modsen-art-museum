export { default as App } from '@app/app';
export { default as Layout } from '@app/layout/layout';
export { default as BlockTitle } from '@components/blockTitle/blockTitle';
export { default as DetailedImg } from '@components/detailedImg/detailedImg';
export { default as DetailedInfo } from '@components/detailedInfo/detailedInfo';
export { default as FavoritesPageTitle } from '@components/favoritesPageTitle/favoritesPageTitle';
export { default as FavoritesWorks } from '@components/favoritesWorks/favoritesWorks';
export { default as Footer } from '@components/footer/footer';
export { default as Header } from '@components/header/header';
export { default as HeaderOptions } from '@components/headerOptions/headerOptions';
export { default as Loader } from '@components/loader/loader';
export { default as Logo } from '@components/logo/logo';
export { default as MainGallery } from '@components/mainGallery/mainGallery';
export { default as MainGalleryCard } from '@components/mainGalleryCard/mainGalleryCard';
export { default as MainPageTitle } from '@components/mainPageTitle/mainPageTitle';
export { default as OtherWorks } from '@components/otherWorks/otherWorks';
export { default as Pagination } from '@components/pagination/pagination';
export { default as SearchBar } from '@components/searchBar/searchBar';
export { default as SmallCard } from '@components/smallCard/smallCard';
export { default as SortBlock } from '@components/sortBlock/sortBlock';
export { default as DetailInfoPage } from '@pages/detailInfoPage/detailInfoPage';
export { default as FavoritesPage } from '@pages/favoritesPage/favoritesPage';
export { default as HomePage } from '@pages/homePage/homePage';
export { default as NotFoundPage } from '@pages/notFoundPage/notFoundPage';
export { default as ErrorBoundary } from '@utils/errorBoundary';
export type {
  IApiCardData,
  IDetailedInfoProps,
  IMainCardData,
  IMainGalleryCardProps,
  IMenuItem,
  IPaginationState,
  IRootState,
  ISortBlockProps,
} from '@utils/interfaces';
export {
  formatDimensions,
  handleSortByAlphabet,
  handleSortByDate,
  trimArtistName,
  trimArtName,
  validationSchema,
} from '@utils/utils';
