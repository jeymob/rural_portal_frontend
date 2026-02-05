import { createContext, useState, useEffect, useContext } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Проверка токена при запуске приложения
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            api.get('/me')
                .then((res) => {
                    setUser(res.data);
                })
                .catch(() => {
                    localStorage.removeItem('access_token');
                    setUser(null);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = (accessToken) => {
        localStorage.setItem('access_token', accessToken);
        api.get('/me')
            .then((res) => setUser(res.data))
            .catch(() => localStorage.removeItem('access_token'));
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);