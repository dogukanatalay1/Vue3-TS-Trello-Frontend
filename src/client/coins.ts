import api from '../api';

export const getCoinsAPI = async () => {
    return await api.get('/coins/list');
};
  