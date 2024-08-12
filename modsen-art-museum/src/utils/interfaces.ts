export interface IMainCardData {
  id: number;
  src: string;
  artName: string;
  artist: string;
  isPublic: boolean;
  isFavorite: boolean;
}

export interface IDetailedInfoProps extends IMainCardData {
  years: string;
  nationality: string;
  dimensions: string;
  creditLine: string;
  repository: string;
}

export interface IMainGalleryCardProps {
  cardData: IMainCardData;
  onToggleFavorite: (id: number, event: React.MouseEvent) => void;
  isSmall: boolean;
}

export interface IApiCardData {
  id: number;
  title: string;
  artist_display: string;
  image_id: string;
  is_public_domain: boolean;
}

export interface IPaginationState {
  currentPage: number;
  totalPages: number;
  cards: IApiCardData[];
  sortOrder: 'asc' | 'desc' | '';
  sortBy: string;
}

export interface IFavoritesState {
  favoriteIds: number[];
}

export interface IInputSearch {
  value: string;
}

export interface IRootState {
  pagination: IPaginationState;
  favorites: IFavoritesState;
  input: IInputSearch;
}

export interface IMenuItem {
  to: string;
  text: string;
  renderIcon: JSX.Element;
  isVisible: boolean;
  isMobile: boolean;
}

export interface ISortBlockProps {
  onSortByAlphabet: () => void;
  onSortByDate: () => void;
}

export interface Theme {
  colors: {
    background: string;
    border: string;
    darkPrimary: string;
    primary: string;
    header: string;
    secondary: string;
    title: string;
    isFavorite: string;
    isNotFavorite: string;
    favoriteHover: string;
  };
  fonts: {
    family: {
      regular: string;
      secondary: string;
    };
    size: {
      title: string;
      primary: string;
      secondary: string;
    };
    weight: {
      regular: string;
      extraRegular: string;
      bold: string;
    };
  };
}
