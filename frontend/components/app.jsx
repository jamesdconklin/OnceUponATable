import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div className="App">
    <h1>PLACEHOLDER</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
