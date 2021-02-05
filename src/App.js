import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Navbars />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;