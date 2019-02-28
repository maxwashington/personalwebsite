// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills/index';
import black from './assets/themes/black';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer/index';

const StyledDiv = styled.div``;

const MiddlePart = styled.div`
  background: ${black};
  height: auto;

  @media (min-width: 1000px) {
    padding-bottom: 10px;
  }

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export default () => (
  <StyledDiv>
    <AboutMe />
    <MiddlePart>
      <Skills />
      <Portfolio />
    </MiddlePart>
    <Footer />
  </StyledDiv>
);
