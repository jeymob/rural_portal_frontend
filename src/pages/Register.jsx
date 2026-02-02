// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Register() {
    // Все поля, которые отправляем на бэкенд
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [region, setRegion] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('/api/register', {
                username: username.trim(),
                email: email.trim(),
                password,
                phone: phone.trim() || null,      // если пусто → null (необязательное)
                region: region.trim() || null,    // если пусто → null
            });

            // Успех
            if (response.data.token) {
                login(response.data.token);
                navigate('/');
            } else {
                navigate('/login');
            }
        } catch (err) {
            if (err.response) {
                // Ошибка от бэкенда (400, 409 и т.д.)
                setError(err.response.data.message || 'Ошибка регистрации');
            } else if (err.request) {
                setError('Нет ответа от сервера. Бэкенд запущен?');
            } else {
                setError('Произошла ошибка: ' + err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                {/* Заголовок */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-indigo-600">Сельский портал</h1>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                        Создать аккаунт
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Заполните данные, чтобы начать пользоваться порталом
                    </p>
                </div>

                {/* Блок ошибки */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl text-sm">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        {/* Имя пользователя */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Имя пользователя
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="block w-full px-5 py-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                placeholder="ivanov123"
                                required
                                autoFocus
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-5 py-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                placeholder="example@rural.local"
                                required
                                autoComplete="email"
                            />
                        </div>

                        {/* Пароль */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Пароль
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-5 py-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                placeholder="••••••••"
                                required
                                autoComplete="new-password"
                            />
                        </div>

                        {/* Телефон (необязательно) */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Телефон (необязательно)
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="block w-full px-5 py-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                placeholder="+79991234567"
                            />
                        </div>

                        {/* Регион / село (необязательно) */}
                        <div>
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                                Регион / село (необязательно)
                            </label>
                            <input
                                id="region"
                                type="text"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                className="block w-full px-5 py-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                placeholder="Московская область, д. Ивановка"
                            />
                        </div>
                    </div>

                    {/* Кнопка */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all duration-200 shadow-md ${loading
                                    ? 'bg-indigo-400 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]'
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                        </button>
                    </div>

                    {/* Ссылка на вход */}
                    <div className="text-center text-sm text-gray-600 pt-4">
                        Уже есть аккаунт?{' '}
                        <a
                            href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                        >
                            Войти
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}