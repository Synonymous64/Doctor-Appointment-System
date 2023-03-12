import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';

function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      {loading ? <Spinner />
        :
        (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </BrowserRouter>
        )
      }
    </>
  );
}

export default App;
