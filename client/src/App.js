import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoutes from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';

function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      {loading ? <Spinner />
        :
        (
          <BrowserRouter>
            <Routes>
              <Route path='/'
                element={
                  <ProtectedRoutes>
                    <HomePage />
                  </ProtectedRoutes>
                }
              />
              <Route path='/login' element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } />
              <Route path='/register' element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              } />
            </Routes>
          </BrowserRouter>
        )
      }
    </>
  );
}

export default App;
