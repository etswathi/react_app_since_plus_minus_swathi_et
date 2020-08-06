import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    state = {  }
    render() { 


const menuItem={


display:'inline'


}


        return ( 


<span>
    <ul style={{listStyleType:'none'}}>
        <li style={menuItem}>
            <Link to="/">Home</Link>
        </li>
        &nbsp;
        <li style={menuItem}>
            <Link to="/products">Products</Link>
        </li>
        &nbsp;
        <li style={menuItem}>
            <Link to="/register">Register</Link>
        </li>
        &nbsp;
        <li style={menuItem}>
            <Link to="/login">Login</Link>
        </li>
&nbsp;
        <li style={menuItem}>
            <Link to="/lifecycle">Lifecycle</Link>
        </li>
        &nbsp;
        <li style={menuItem}>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li style={menuItem}>
            <Link to="/friends">Friends</Link>
        </li>
    </ul>
</span>


         );
    }
}
 
export default Navbar;