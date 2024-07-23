import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiCardData } from '../index';

interface IPaginationState {
  currentPage: number;
  cards: IApiCardData[];
}

const initialState: IPaginationState = {
  currentPage: 1,
  cards: [],
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      return { ...state, currentPage: action.payload };
    },
    setCards: (state, action: PayloadAction<IApiCardData[]>) => {
      return { ...state, cards: action.payload };
    },
  },
});

export const { setCurrentPage, setCards } = paginationSlice.actions;

const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
  },
});

export default store;
