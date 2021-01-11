import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/styles.css'

import Header from './components/Header'
import Form from './components/Form'
import Main from './components/Main'
import Footer from './components/Footer'


library.add(fab)

const AppWrapper = styled.div`
  width:100vw;
  height:100vh;
`;

class App2 extends Component {
    render() {
        return (
            <div>
                <AppWrapper>
                    <Header />
                    <Main />
                    <Footer />
                </AppWrapper>
            </div>   
        )
    }
}

export default App2;