// external dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// internal dependencies
import './App.css'
import Home from './components/HomePage';
import ManageSpacePage from './components/ManageSpacePage';
import DisplaySpacePage from './components/DisplaySpacePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import DisplayUserPage from './components/DisplayUserPage';

const Wrapper = styled.div({
  height: '100vh',
  width: '100vw',
})

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Home} />
          <Route path="/signup" exact component={Home} />
          <Route path="/spaces/:id" exact component={ManageSpacePage} />
          <Route path="/spaces/view/:id" component={DisplaySpacePage} />
          <Route path="/users/:id" component={DisplayUserPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
