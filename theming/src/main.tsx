import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const html = document.querySelector('html');
html?.setAttribute('data-theme', 'light');

createRoot(document.getElementById('root')!).render(
    <App />
)
