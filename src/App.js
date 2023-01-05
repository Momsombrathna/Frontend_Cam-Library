import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import ReadBook from './Components/ReadBook';
import Save from './Components/Save';
import SignIn from './Components/SignIn';
import WelcomePage from './Components/WelcomePage';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/readbook' element={<ReadBook />}/>
          <Route path='/save' element={<Save />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </Router>
  );
};

export default App;