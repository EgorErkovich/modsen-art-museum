import { IApiCardData, IPaginationState } from '@index';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const initialPaginationState: IPaginationState = {
  currentPage: 1,
  totalPages: 1,
  cards: [],
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialPaginationState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      return { ...state, currentPage: action.payload };
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      return { ...state, totalPages: action.payload };
    },
    setCards: (state, action: PayloadAction<IApiCardData[]>) => {
      return { ...state, cards: action.payload };
    },
  },
});

interface IInputState {
  value: string;
}

const initialInputState: IInputState = {
  value: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState: initialInputState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      return { ...state, value: action.payload };
    },
    clearInputValue: (state) => {
      return { ...state, value: '' };
    },
  },
});

export const { addFavoriteId, removeFavoriteId, setFavoriteIds } = favoritesSlice.actions;
export const { setCurrentPage, setTotalPages, setCards } = paginationSlice.actions;
export const { setInputValue, clearInputValue } = inputSlice.actions;

const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    favorites: favoritesSlice.reducer,
    input: inputSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
