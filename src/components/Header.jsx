import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Отображаем имя (Name или fallback)
    const displayName = user?.Name || user?.username || user?.email?.split('@')[0] || 'Пользователь';

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Логотип */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-indigo-600">
                            Зиан
                        </Link>
                    </div>

                    {/* Навигация */}
                    <nav className="flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-indigo-600">
                            Главная
                        </Link>
                        <Link to="/announcements" className="text-gray-700 hover:text-indigo-600">
                            Объявления
                        </Link>

                        {/* Правая часть */}
                        {user ? (
                            <div className="flex items-center space-x-6">
                                <span className="text-gray-700 font-medium">
                                    {displayName}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="text-red-600 hover:text-red-800 font-medium transition"
                                >
                                    Выйти
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-6">
                                <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                                    Войти
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}