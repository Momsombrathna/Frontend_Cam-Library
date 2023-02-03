import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Views/Home';
import ErrorPage from './Views/ErrorPage';
import ReadBook from './Views/ReadBook';
import Save from './Views/Save';
import WelcomePage from './Views/WelcomePage';
import SignUp from './Views/SignUp';
import LogIn from './Views/Login';
import HomeLogin from './Views/HomeLogin';
import AboutPage from './Views/AboutPage';
import FeedBack from './Components/Feedback';

const App = () => {
  return (
    <>
    <ToastContainer theme='colored' limit={2} autoClose={1000} pauseOnHover
    draggable={false}
    pauseOnFocusLoss={false}></ToastContainer>
    <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/readbook' element={<ReadBook />}/>
          <Route path='/save' element={<Save />}/>
          <Route path='/homelogin' element={<HomeLogin />}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </Router>
    </>
  );
};

export default App;