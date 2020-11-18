import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

import './App.css';
import Header from './styles/HeaderStyle';
import Heading from './styles/HeadingStyle';
import Form from './styles/Form';
import Footer from './styles/FooterStyle';


const AppWrapper = styled.div`
  width:100vw;
  height:100vh;
`;

class App extends Component {
  render() {
  return (
    <AppWrapper>
      <Header />
        <Heading>
          WEATHER TODAY
        </Heading>
          <Form>
              <input
                type="text"
                name="search"
                placeholder="Search town..."
              />
          </Form>
      <Footer />
    </AppWrapper>
    );
  }
}

export default App;
