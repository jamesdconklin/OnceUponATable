import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer.jsx';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div className="App">
    <HeaderContainer />
    <section className="content center-horiz">
      <section className="content-center">
        {children}
      </section>
    </section>
    <Footer />
  </div>
);

export default App;
