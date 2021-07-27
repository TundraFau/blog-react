import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Footer } from './componens/Footer';
import { Nav } from './componens/Nav';
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
