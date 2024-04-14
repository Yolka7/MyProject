import './App.css';

import Main from './main.jsx';
import Header from './components/header';
import React from 'react';

function App() {
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
