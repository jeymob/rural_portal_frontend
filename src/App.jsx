import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

const Announcements = () => (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Объявления</h1>
        <p>Здесь будут все объявления (когда добавим)</p>
    </div>
);

export default function App() {
    const { login, user } = useAuth(); // добавили user для лога
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('App: location изменился →', location.pathname, location.search);

        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('access_token');

        console.log('App: токен в URL →', token);

        if (token) {
            console.log('App: сохраняем токен →', token);
            localStorage.setItem('access_token', token);
            login(token);
            navigate('/', { replace: true });
        }
    }, [location.search, login, navigate]);

    useEffect(() => {
        console.log('App: текущий user в контексте →', user);
    }, [user]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/announcements" element={<Announcements />} />
                    </Route>

                    <Route path="*" element={<div className="text-center py-20">404 — страница не найдена</div>} />
                </Routes>
            </main>
        </div>
    );
}