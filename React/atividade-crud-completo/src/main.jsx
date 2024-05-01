import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TodoProvider } from './providers/TodoProvider';

const container = document.getElementById('root');
const root = createRoot(container); // Cria a raiz do aplicativo React

root.render(
  <React.StrictMode>
    <TodoProvider>       // Inclui TodoProvider aqui
      <App />
    </TodoProvider>
  </React.StrictMode>
);

