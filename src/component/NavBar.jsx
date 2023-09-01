import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

const NavBar = () => {
    const {user , logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
       logOut()
        .then(() => {})
        .catch(error => console.error(error));
    }
    return (
        <div>
         <div className="navbar bg-neutral text-neutral-content">
 
  <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
 
  <Link to="/product" className='m-3'>Products</Link>
  <Link to="/order" className='m-3'>Order</Link>
  <Link to="/register" className='m-3'>Register</Link>
  {
    user ? <div><span className='m-3'>Welcome {user.email}<button className='m-3' onClick={handleLogOut}>Log Out</button></span></div> : <Link to="/login">Login</Link> 
  }
</div>
        </div>
    );
};

export default NavBar;