import React from 'react';
import Home from './components/home';
import LoginPage from './components/auth/login';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/utils/router/privateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute/>} >
          <Route path='' element={<Home/>} />
        </Route>
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
