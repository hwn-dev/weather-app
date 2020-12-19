import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from './logo.svg';

import './App.css';
import Header from './styles/HeaderStyle';
import Heading from './styles/HeadingStyle';
import FormStyle from './styles/FormStyle';
import MainStyle from './styles/MainStyle';
import ControlStyle from './styles/ControlStyle';
import ControlButtonStyle from './styles/ControlButtonStyle';
import TempStyle from './styles/TempStyle';
import DividerStyle from './styles/DividerStyle';
import Footer from './styles/FooterStyle';
import SocialLinkContainerStyle from './styles/SocialLinkContainerStyle';
import SocialLinkUlStyle from './styles/SocialLinkUlStyle';
import SocialLinkLiStyle from './styles/SocialLinkLiStyle';
import SocialButtonStyle from './styles/SocialButtonStyle';

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
          WEATHER
        </Heading>
          <FormStyle>
              <input
                type="text"
                name="search"
                placeholder="Search town..."
              />
          </FormStyle>
      <MainStyle>
        <ControlStyle>
          <ControlButtonStyle>
            Andover
          </ControlButtonStyle>
          <ControlButtonStyle>
            Woking
          </ControlButtonStyle>
          <TempStyle>
            10&deg;
          </TempStyle>
          <TempStyle>
            20&deg;
          </TempStyle>
        </ControlStyle>
      </MainStyle>
      <Footer />
        <SocialLinkContainerStyle>
            <SocialLinkLiStyle>
              <SocialButtonStyle href="https://www.facebook.com/harryjwneale" target="_blank">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </SocialButtonStyle>
            </SocialLinkLiStyle>
            <SocialLinkLiStyle>
              <SocialButtonStyle href="https://twitter.com/HWN_Dev" target="_blank">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </SocialButtonStyle>
            </SocialLinkLiStyle>
            <SocialLinkLiStyle>
              <SocialButtonStyle href="https://www.linkedin.com/in/harry-neale-092976125/" target="_blank">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </SocialButtonStyle>
            </SocialLinkLiStyle>
            <SocialLinkLiStyle>
              <SocialButtonStyle href="https://github.com/hwn-dev" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </SocialButtonStyle>
            </SocialLinkLiStyle>
        </SocialLinkContainerStyle>
    </AppWrapper>
    );
  }
}

export default App;
