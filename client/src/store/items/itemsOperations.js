import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'servises/api';

export const fetchItemsThunk = createAsyncThunk(
  'items/fetchItems',
  async (_, thunkAPI) => {
    try {
      return await API.fetchItems();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addItemThunk = createAsyncThunk(
  'items/addItem',
  async (item, thunkAPI) => {
    try {
      return await API.addItem(item);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateItemThunk = createAsyncThunk(
  'items/updateItem',
  async (item, thunkAPI) => {
    try {
      return await API.updateItem(item);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteItemThunk = createAsyncThunk(
  'items/deleteItem',
  async (id, thunkAPI) => {
    try {
      return await API.deleteItem(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
