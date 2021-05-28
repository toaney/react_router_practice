import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Counter from './components/counter/counter.js';
import Input from './components/input/input.js';

function App() {
  return (
    <React.Fragment>
      {/* <div className="App">
        <Counter/>
        <Input/>
      </div> */}
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/" component={Input} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
