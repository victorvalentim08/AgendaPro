import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal (o que o cliente vê em seusite.com/) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rota isolada do admin (seusite.com/admin) */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;