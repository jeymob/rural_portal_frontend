import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login');
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-xl text-gray-600">
                Перенаправление на страницу входа...
            </div>
        </div>
    );
}