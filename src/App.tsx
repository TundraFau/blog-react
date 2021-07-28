import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App; 
