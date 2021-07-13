import React from 'react';

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

const NavBar = () => {

    return (

        <div clanssName="nav">
            <Menu>

                <Link to='/' className='item'>
                    Home
                </Link>

                <Link to='/books' className='book'>
                    View All Book Reviews
                </Link>

                <Link to='/myStuff'> 
                    View My Book Reviews
                </Link>

                <Link to='/about'>
                    About
                </Link>


            </Menu>
        </div>

    )

}

export default NavBar;