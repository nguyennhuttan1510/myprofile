import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div id="colorlib-page">
        <div className="container-wrap">
          <Routes />
        </div>
      </div>
    </Router>
  );
};

export default App;
