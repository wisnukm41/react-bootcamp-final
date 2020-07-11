import React, { Component } from 'react';

import './App.css';

// import komponen
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Details from './components/Details';
import Search from './components/Search';

// import react router dom elemen
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        {/* menggunakan react-router */}
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/s/:name' exact component={Search} />
              <Route path='/details/:id' exact component={Details} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    )
  }
}

