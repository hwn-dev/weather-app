import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

import './App.css';
import Header from './styles/HeaderStyle';
import Heading from './styles/HeadingStyle';
import Form from './styles/Form';
import Footer from './styles/FooterStyle';
import SocialLinkContainer from './styles/SocialLinkContainerStyle';
import SocialLinkUl from './styles/SocialLinkUl';
import SocialLinkLi from './styles/SocialLinkLi';

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
        <SocialLinkContainer>
            <SocialLinkLi>
              <p>A</p>
            </SocialLinkLi>
            <SocialLinkLi>
              <p>B</p>
            </SocialLinkLi>
            <SocialLinkLi>
              <p>C</p>
            </SocialLinkLi>
            <SocialLinkLi>
              <p>D</p>
            </SocialLinkLi>
        </SocialLinkContainer>
    </AppWrapper>
    );
  }
}

export default App;
