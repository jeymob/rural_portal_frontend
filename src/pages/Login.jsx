import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    // Обработка токена после редиректа от Яндекса или ВК
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('access_token');

        if (token) {
            localStorage.setItem('access_token', token);
            login(token);
            navigate('/', { replace: true }); // убираем параметры из URL
        }
    }, [login, navigate]);

    const handleYandexLogin = () => {
        window.location.href = 'http://localhost:8080/api/auth/yandex';
    };

    const handleVkLogin = () => {
        window.location.href = 'http://localhost:8080/api/auth/vk';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-indigo-600">Сельский портал</h1>
                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        Вход в аккаунт
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Выберите способ входа
                    </p>
                </div>

                <div className="mt-8 space-y-4">
                    <button
                        type="button"
                        onClick={handleYandexLogin}
                        className="w-full py-4 px-6 rounded-xl bg-yellow-500 text-white font-semibold text-lg hover:bg-yellow-600 transition-all shadow-md active:scale-[0.98]"
                    >
                        Войти через Яндекс
                    </button>

                    <button
                        type="button"
                        onClick={handleVkLogin}
                        className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-[0.98]"
                    >
                        Войти через ВКонтакте
                    </button>
                </div>

                <div className="text-center text-sm text-gray-600 pt-6">
                    Нет аккаунта? Просто выберите любой способ выше — регистрация автоматическая
                </div>
            </div>
        </div>
    );
}