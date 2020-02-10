import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Expectations from './components/Expectations';
import Contact from './components/Contact';
import FreeLessons from './components/FreeLessons';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/main.scss';

const App = props => {

  const currentPage = props.location.pathname.replace('/', '');
  
  return (
    <div className="app">
      <Navbar currRoute={currentPage} />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={3000} classNames="fade">
            <Switch location={location}>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/about"><About /></Route>
              <Route exact path="/expectations"><Expectations /></Route>
              <Route exact path="/contact"><Contact /></Route>
              <Route exact path="/freelessons"><FreeLessons /></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
};

export default withRouter(App);
