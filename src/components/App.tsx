import * as React from 'react';
import styled from 'react-emotion';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {colors, maxWidth} from '../styles/theme';
import CommercialAC from './CommercialAC';
import Contact from './Contact';
import Footer from './Footer';
import FreezerCooler from './FreezerCooler';
import Header from './Header';
import Home from './Home';
import MaintenancePlans from './MaintenancePlans';
import Nav from './Nav';

const Main = styled('div')({background: colors.background, margin: '0 auto', maxWidth})

const App = () => (
  <Router>
    <Main>
      <Header/>
      <Nav/>
      <Route exact path="/" component={Home}/>
      <Route path="/commercial-ac" component={CommercialAC}/>
      <Route path="/freezer-cooler" component={FreezerCooler}/>
      <Route path="/maintenance-plans" component={MaintenancePlans}/>
      <Route path="/contact" component={Contact}/>
      <Footer/>
    </Main>
  </Router>
);

export default App;
