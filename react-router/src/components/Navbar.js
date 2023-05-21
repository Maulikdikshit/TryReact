import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = (props) => {

    console.log('props',props);
    // setTimeout(() => {props.history.push('./about')},2000);


    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Gloria</a>
            <div className='ui right floated header'>
                <button className='ui button'>
                    <Link to="/">Home</Link>
                </button>
                <button className='ui button'>
                    <NavLink to="/about">About</NavLink>
                </button>
                <button className='ui button'>
                    <Link to="/contact">Contact</Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;