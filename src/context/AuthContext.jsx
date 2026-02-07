import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // При загрузке страницы проверяем сессию через cookie
        api.get('/me')
            .then(res => {
                setUser(res.data);
                setLoading(false);
                console.log('Пользователь загружен из /me:', res.data);
            })
            .catch(err => {
                console.log('Нет активной сессии или ошибка /me:', err);
                setLoading(false);
            });
    }, []);

    const logout = () => {
        // Удаляем куку через бэкенд (или просто очищаем состояние)
        api.post('/logout') // если у тебя есть такой эндпоинт
            .finally(() => {
                setUser(null);
            });
    };

    return (
        <AuthContext.Provider value={{ user, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};