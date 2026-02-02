import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero секция */}
            <div className="relative overflow-hidden">
                {/* Фоновая градиентная заливка + лёгкий паттерн (опционально) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-70"></div>

                <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
                            <span className="block">Сельский портал</span>
                            <span className="block mt-2 text-indigo-600">Всё своё — рядом</span>
                        </h1>

                        <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Доска объявлений для жителей сёл, фермеров, покупателей натуральных продуктов
                            <br className="hidden sm:block" />
                            и тех, кто ищет отдых в деревне.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5 sm:gap-6">
                            {user ? (
                                <Link
                                    to="/ads"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Перейти к объявлениям
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        Зарегистрироваться бесплатно
                                    </Link>

                                    <Link
                                        to="/login"
                                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-indigo-700 bg-white border-2 border-indigo-200 rounded-xl hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg"
                                    >
                                        Войти в аккаунт
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Три карточки преимуществ */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Карточка 1 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                        <div className="p-8">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Объявления от соседей
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Продажа молока, мёда, овощей, мяса, саженцев, техники и услуг — всё рядом с вами.
                            </p>
                        </div>
                    </div>

                    {/* Карточка 2 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                        <div className="p-8">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 9.5a2.5 2.5 0 002.5-2.5V4.935M12 4.935v-.5a2.5 2.5 0 015 0v.5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Агротуризм и отдых
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Усадьбы, рыбалка, сбор ягод, мастер-классы по сыроделию и пчеловодству — всё в одном месте.
                            </p>
                        </div>
                    </div>

                    {/* Карточка 3 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-2 bg-gradient-to-r from-pink-500 to-rose-600"></div>
                        <div className="p-8">
                            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Работа и услуги
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Подработка, вспашка, ветеринар, ремонт техники, перевозки — ищите и предлагайте здесь.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Нижний призыв к действию */}
            <div className="bg-indigo-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Начните уже сегодня
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 opacity-90">
                        Размещайте объявления, находите нужное и общайтесь с соседями без посредников
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <Link
                            to={user ? "/ads" : "/register"}
                            className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium text-indigo-700 bg-white rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all shadow-xl hover:shadow-2xl"
                        >
                            {user ? 'Смотреть объявления' : 'Зарегистрироваться'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}