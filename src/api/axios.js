import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // потом заменишь на продакшен URL
    withCredentials: true, // ← САМОЕ ВАЖНОЕ! Браузер отправляет cookie автоматически
});

export default api;