import React, { useState } from 'react'

export default function App() {
    const [status, setStatus] = useState(null)
    const checkHealth = async () => {
        try {
            const res = await fetch('/health')
            const json = await res.json()
            setStatus(JSON.stringify(json))
        } catch (err) {
            setStatus('error: ' + err.message)
        }
    }
    return (
        <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
            <h1>Сельский Портал — Frontend</h1>
            <p>Пример: проверка health API</p>
            <button onClick={checkHealth}>Проверить /health</button>
            <pre style={{ marginTop: 12 }}>{status}</pre>
        </div>
    )
}
