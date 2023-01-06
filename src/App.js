import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import ReadBook from './Components/ReadBook';
import Save from './Components/Save';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/readbook' element={<ReadBook />}/>
          <Route path='/save' element={<Save />}/>
          <Route path='/signin' element={<SignUp />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </Router>
  );
};

export default App;