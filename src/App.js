import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import ReadBook from './Components/ReadBook';
import Save from './Components/Save';
import WelcomePage from './Components/WelcomePage';
import SignUp from './Components/SignUp';
import LogIn from './Components/Login';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer theme='colored' limit={2}></ToastContainer>
    <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/readbook' element={<ReadBook />}/>
          <Route path='/save' element={<Save />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </Router>
    </>
  );
};

export default App;