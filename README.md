# rural_portal_frontend

Минимальный фронтенд для проекта "Зиан" (React + Vite).

Local dev:

```bash
cd /path/to/rural_portal_frontend
npm install
npm run dev
```

По умолчанию dev сервер слушает на `http://localhost:5173` и проксирует запросы `/api` и `/health` на `http://localhost:8080`.

Build & serve (Docker):

```bash
docker build -t rural_portal_frontend:latest .
docker run -p 80:80 rural_portal_frontend:latest
```

Интеграция с основным репозиторием: можно хранить в отдельном репозитории `rural_portal_frontend`.
