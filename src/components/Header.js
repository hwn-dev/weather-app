import React from 'react';
import Form from './Form';

const Header = () => {
    return (
        <div className="header-container">
            <div id="header">
                <h1 className="heading">WEATHER</h1>
                <Form />
            </div>
        </div>
    )
}

export default Header;