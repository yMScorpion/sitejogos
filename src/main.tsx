
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Google Fonts
const fontsLink = document.createElement('link');
fontsLink.rel = 'stylesheet';
fontsLink.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@400;700;900&display=swap';
document.head.appendChild(fontsLink);

createRoot(document.getElementById("root")!).render(<App />);
