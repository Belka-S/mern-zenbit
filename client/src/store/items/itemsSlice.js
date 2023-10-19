import { combineReducers, createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as OPS from './itemsOperations';

const thunkArr = [
  OPS.fetchItemsThunk,
  OPS.addItemThunk,
  OPS.updateItemThunk,
  OPS.deleteItemThunk,
];
const fn = type => thunkArr.map(el => el[type]);

// items
const handleFetchItems = (_, action) => {
  return action.payload.result.items;
};
const handleAddItem = (state, action) => {
  state.unshift(action.payload.result.item);
};
const handleUpdateItem = (state, action) => {
  const { item } = action.payload.result;
  const index = state.findIndex(el => el._id === item._id);
  state.splice(index, 1, item);
};
const handleDeleteItem = (state, action) => {
  const { item } = action.payload.result;
  return state.filter(el => el._id !== item._id);
};

// fulfilled slice
const itemsDataSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    cleanItems: state => [],
  },
  extraReducers: builder => {
    builder
      .addCase(OPS.fetchItemsThunk.fulfilled, handleFetchItems)
      .addCase(OPS.addItemThunk.fulfilled, handleAddItem)
      .addCase(OPS.updateItemThunk.fulfilled, handleUpdateItem)
      .addCase(OPS.deleteItemThunk.fulfilled, handleDeleteItem);
  },
});

// loading slice
const itemsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => false)
      .addMatcher(isAnyOf(...fn('rejected')), state => false);
  },
});

// error slice
const itemsErrorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => null)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => null)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

// filter slice
const itemsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (_, action) => action.payload,
  },
});

export const itemsReducer = combineReducers({
  data: itemsDataSlice.reducer,
  isLoading: itemsLoadingSlice.reducer,
  error: itemsErrorSlice.reducer,
  filter: itemsFilterSlice.reducer,
});

export const { cleanItems } = itemsDataSlice.actions;
export const { setFilterValue } = itemsFilterSlice.actions;
