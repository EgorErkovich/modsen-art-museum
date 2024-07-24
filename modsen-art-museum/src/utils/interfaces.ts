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
