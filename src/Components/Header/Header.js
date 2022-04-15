import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'> Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </nav>
        </div>
    );
};

export default Header;