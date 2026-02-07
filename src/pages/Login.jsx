export default function Login() {
    const handleYandexLogin = () => {
        window.location.href = 'http://localhost:8080/api/auth/yandex';
    };

    const handleVkLogin = () => {
        window.location.href = 'http://localhost:8080/api/auth/vk';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-indigo-600">Сельский портал</h1>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-900">Вход</h2>
                    <p className="mt-2 text-gray-600">Войдите через Яндекс или ВКонтакте</p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={handleYandexLogin}
                        className="w-full py-4 px-6 rounded-xl bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition shadow-md active:scale-98"
                    >
                        Войти через Яндекс
                    </button>

                    <button
                        onClick={handleVkLogin}
                        className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md active:scale-98"
                    >
                        Войти через ВКонтакте
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-8">
                    Нет аккаунта? Просто войдите — регистрация автоматическая
                </p>
            </div>
        </div>
    );
}