import axios from 'axios';

const api = axios.create({
    baseURL: '/api',      // прокси → http://localhost:8080
    timeout: 15000,
});

// Добавляем токен ко всем запросам
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Обрабатываем 401 — токен истёк или недействителен
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('access_token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;