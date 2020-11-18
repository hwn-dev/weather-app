import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from './logo.svg';

import './App.css';
import Header from './styles/HeaderStyle';
import Heading from './styles/HeadingStyle';
import Form from './styles/Form';
import Footer from './styles/FooterStyle';
import SocialLinkContainer from './styles/SocialLinkContainerStyle';
import SocialLinkUl from './styles/SocialLinkUl';
import SocialLinkLi from './styles/SocialLinkLi';
import SocialButton from './styles/SocialButton';

library.add(fab)

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
              <SocialButton href="https://www.facebook.com/harryjwneale" target="_blank">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </SocialButton>
            </SocialLinkLi>
            <SocialLinkLi>
              <SocialButton href="https://twitter.com/HWN_Dev" target="_blank">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </SocialButton>
            </SocialLinkLi>
            <SocialLinkLi>
              <SocialButton href="https://www.linkedin.com/in/harry-neale-092976125/" target="_blank">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </SocialButton>
            </SocialLinkLi>
            <SocialLinkLi>
              <SocialButton href="https://github.com/hwn-dev" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </SocialButton>
            </SocialLinkLi>
        </SocialLinkContainer>
    </AppWrapper>
    );
  }
}

export default App;
