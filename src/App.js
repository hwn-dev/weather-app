import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Header from './styles/HeaderStyle';
import Heading from './styles/HeadingStyle';
import Form from './styles/Form';

const AppWrapper = styled.div`
  width:100vw;
  height:100vh;
`;

class App extends Component {
  render() {
  return (
    <AppWrapper>
      <Header>
        <Heading>
          WEATHER TODAY
        <Form>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search town..."
            />
        </Form>
      </Header>
          



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boo
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          text="Yo"
        >
         Yo mumma
        </a>
      </header> */}
    </AppWrapper>
  );
}
}

export default App;
