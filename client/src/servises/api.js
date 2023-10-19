import { apiClient, token } from './apiClient';

// Auth
export const register = async credentials => {
  const { data } = await apiClient.post('/auth/register', credentials);
  token.set(data.result.user.accessToken);
  return data;
};

export const login = async credentials => {
  const { data } = await apiClient.post('/auth/login', credentials);
  token.set(data.result.user.accessToken);
  return data;
};

export const logout = async () => {
  const { data } = await apiClient.post('/auth/logout');
  token.unset();
  return data;
};

export const refreshUser = async persistedToken => {
  token.set(persistedToken);
  const { data } = await apiClient.get('/auth/user');
  return data;
};

export const verifyEmail = async credentials => {
  const { data } = await apiClient.post('/auth/verify', credentials);
  return data;
};

export const forgotPass = async credentials => {
  const { data } = await apiClient.post('/auth/forgot', credentials);
  return data;
};

export const resetPass = async credentials => {
  const { data } = await apiClient.post('/auth/reset', credentials);
  return data;
};

// Items
export const fetchItems = async () => {
  const { data } = await apiClient.get('/items');
  return data;
};

export const addItem = async item => {
  const { data } = await apiClient.post('/items', item);
  return data;
};

export const updateItem = async ({ id, item }) => {
  const { data } = await apiClient.put(`/items/${id}`, item);
  return data;
};

export const deleteItem = async id => {
  const { data } = await apiClient.delete(`/items/${id}`);
  return data;
};
