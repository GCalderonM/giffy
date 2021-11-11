import React from 'react';
import { Link, Route } from 'wouter'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import getGifs from './services/getGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link to="/gif/panda">Ver pandas</Link>
        <Link to="/gif/food">Ver comida</Link>
        <Link to="/gif/matrix">Ver matrix</Link>
        <Link to="/gif/programming">Ver programacion</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
