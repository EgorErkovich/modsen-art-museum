export interface IMainCardData {
  id: number;
  src: string;
  artName: string;
  artist: string;
  isPublic: boolean;
  isFavorite: boolean;
}

export interface IMainGalleryCardProps {
  cardData: IMainCardData;
  onToggleFavorite: () => void;
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
  cards: IApiCardData[];
}

export interface IFavoritesState {
  favoriteIds: number[];
}

export interface IRootState {
  pagination: IPaginationState;
  favorites: IFavoritesState;
}
