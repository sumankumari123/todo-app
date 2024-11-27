import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProviders } from './component/store/Todos.tsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <TodosProviders>
    <App />
    </TodosProviders>
    </BrowserRouter>
  </StrictMode>,
)
