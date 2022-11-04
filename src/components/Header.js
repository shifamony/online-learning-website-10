import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logo from '../img/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
      .then(() => {})
      .catch(error => console.error(error))
    }


//TOGGLE THEME

const [theme,setTheme] = useState("light-theme")
const handleToggle = () => {
  theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  
}

useEffect(() => {
  document.body.className =theme;
},[theme])

    return (
        <>

     <Navbar collapseOnSelect expand="lg" bg="" variant="info" className="my-clr">
      <Container>
        <Navbar.Brand><Link to='/' class="navbar-brand text-white d-flex align-items-center fw-bold fs-2"><img src={logo} alt="" style={{width:'50px', marginRight:'8px'}} /> Learners</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            
            <Link to='/' class="nav-link text-white fw-bold fs-5" aria-current="page"> Courses</Link>
            <Link to='/faq' class="nav-link text-white fw-bold fs-5" aria-current="page"> FAQ</Link>
            <Link to='/blog' class="nav-link text-white fw-bold fs-5" href="#">Blog</Link>
            <Link onClick={() => handleToggle()} class="nav-link text-white fw-bold fs-5" href="#">Toggle</Link>
          </Nav>
          <Nav className='align-items-center'> 
            <>
              {
                user?.uid 
                ?
               <>
                <span>{user?.displayName} </span>
                <Button variant="success" onClick={handleLogOut}>Logout</Button>
               </>
                :
                <>
                 <Link to='/login' className='ms-3 text-decoration-none bg-danger text-white p-2 rounded fw-bold'>Login</Link>
                 <Link to='/register' className='ms-3 me-2 text-decoration-none bg-warning text-white p-2 rounded fw-bold'>Register</Link>
                </>
              }
              
            
            </>
            <Link to='/profile'>
              {
                user?.photoURL ?
                <Image style={{height:'70px'}} roundedCircle src={user.photoURL}></Image>
                :
                <FaUser></FaUser>
              }
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
        
    );
};

export default Header;