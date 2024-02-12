import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import RegisterPage from 'pages/register/RegisterPage';
import LoginPage from './../pages/login/LoginPage';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
