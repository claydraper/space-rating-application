// external dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// internal dependencies
import './App.css'
import Home from './components/HomePage';
import CreateSpacePage from './components/CreateSpacePage';

const Wrapper = styled.div({
  height: '100vh',
  width: '100vw',
})

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Home} />
          <Route path="/signup" exact component={Home} />
          <Route path="/spaces/:id" component={CreateSpacePage} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
