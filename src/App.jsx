import './App.css';

import Main from './main.jsx';
import Header from './components/header';
import React from 'react';

import api from './lib/api.js'

import cookie from 'js-cookie'
import { useNavigate, useLocation } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  const location = useLocation()
  React.useEffect(() => {
    const authRoutes = ['/auth', '/reg', '/kod'];
    const token = cookie.get('token');
    if (!authRoutes.includes(location.pathname.toString())){
      if (!token) {
        navigate("/auth");
      } else {
        api.get('/protected').then((res) => {
            // navigate("/");
        }).catch((e)=> {
            if (e.response.status === 401) {
              // cookie.remove('token')
              // navigate("/auth");
            }
        })
      }
    } else {
      if (token) {
        api.get('/protected').then((res) => {
            // navigate("/");
        }).catch((e)=> {
            if (e.response.status === 401) {
              // cookie.remove('token')
            }
        })
      }
    }
  }, [location])


  return (
    <div>
      <Header />
      <div className='content-main'> 
        <Main />
      </div>
    </div>

  );
}

export default App;
