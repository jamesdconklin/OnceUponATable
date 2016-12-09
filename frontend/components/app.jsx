import React from 'react';
import Footer from 'Footer';
import HeaderContainer from 'HeaderContainer';

const App = ({ children }) => (
  <div className="App">
    <HeaderContainer />
    {children}
    <Footer />
  </div>
);

export default App;
