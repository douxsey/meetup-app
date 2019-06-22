import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './shared/Header';
import { Home } from './pages/Home';
import { Footer } from './shared/Footer';
import { DetailEvent } from './pages/Detail';

function App() {
  return (
    <div className="light" id="body">
      <Header />
      <main>
        <Router>
          <Route component={Home} exact path="/" />
          <Route component={DetailEvent} exact path="/details/:id" />
        </Router>
      </main>
      <Footer/>
    </div>
    
  );
}

export default App;
