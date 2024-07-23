export interface IMainCardData {
  src: string;
  artName: string;
  artist: string;
  isPublic: boolean;
}

export interface IMainGalleryCardProps {
  cardData: IMainCardData;
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

export interface IRootState {
  pagination: IPaginationState;
}
