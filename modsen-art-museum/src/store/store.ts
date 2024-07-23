import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiCardData } from '../index';

interface IFavoritesState {
  favoriteIds: number[];
}

const initialFavoritesState: IFavoritesState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesState,
  reducers: {
    addFavoriteId: (state, action: PayloadAction<number>) => {
      if (!state.favoriteIds.includes(action.payload)) {
        state.favoriteIds.push(action.payload);
      }
    },
    removeFavoriteId: (state, action: PayloadAction<number>) => {
      return { ...state, favoriteIds: state.favoriteIds.filter((id) => id !== action.payload) };
    },
    setFavoriteIds: (state, action: PayloadAction<number[]>) => {
      return { ...state, favoriteIds: action.payload };
    },
  },
});

interface IPaginationState {
  currentPage: number;
  cards: IApiCardData[];
}

const initialPaginationState: IPaginationState = {
  currentPage: 1,
  cards: [],
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialPaginationState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      return { ...state, currentPage: action.payload };
    },
    setCards: (state, action: PayloadAction<IApiCardData[]>) => {
      return { ...state, cards: action.payload };
    },
  },
});

export const { addFavoriteId, removeFavoriteId, setFavoriteIds } = favoritesSlice.actions;

export const { setCurrentPage, setCards } = paginationSlice.actions;

const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export default store;
