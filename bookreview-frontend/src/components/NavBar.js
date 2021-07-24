import React from 'react';

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

import '../App.css';

const NavBar = () => {

    return (

        <div className="nav">
            <Menu>

                <Link style={{ marginRight: 20, textDecoration: 'none' }} to='/' className='item'>
                    Home
                </Link>

                <Link style={{ marginRight: 20, textDecoration: 'none' }} to='/books' className='book'>
                    View All Book Reviews
                </Link>

                <Link style={{ marginRight: 20, textDecoration: 'none' }} to='/myStuff'> 
                    View My Book Reviews
                </Link>

                <Link style={{ marginRight: 20, textDecoration: 'none' }} to='/about'>
                    About
                </Link>


            </Menu>
        </div>

    )

}

export default NavBar;