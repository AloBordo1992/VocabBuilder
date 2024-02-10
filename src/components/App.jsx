import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import RegisterPage from 'pages/register/RegisterPage';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};
