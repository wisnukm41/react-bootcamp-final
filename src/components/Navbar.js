import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// komponen Navbar
export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <div>
                    <Link to='/'>
                        AnimeList
                    </Link>
                </div>
                <ul className='nav-links'>
                    <li className='nav-item'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
