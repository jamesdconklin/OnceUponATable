import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer.jsx';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div className="App">
    <HeaderContainer />
    {children}
    <Footer />
  </div>
);

export default App;
