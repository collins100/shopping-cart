import React from 'react';

const Header = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Shopping-cart</h1>
            <Link className="white" to="/cart">Cart</Link>
        </div>
    );
}

export default Header;