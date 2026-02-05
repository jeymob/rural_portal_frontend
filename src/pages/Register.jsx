import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        // Редирект на страницу входа — отдельной регистрации нет
        navigate('/login', { replace: true });
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-xl text-gray-600">
                Перенаправление на страницу входа...
            </div>
        </div>
    );
}