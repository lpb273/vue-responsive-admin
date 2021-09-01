import http from './axios';
import api from './api';

export const login = (params) => http.post(api.login, params);