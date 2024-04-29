import React from 'react';
import ReactDOM from 'react-dom/client';
import { FruitProvider } from './providers/FruitContext.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FruitProvider>
      <App />
    </FruitProvider>
  </React.StrictMode>,
);
