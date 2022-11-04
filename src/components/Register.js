import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext';


const Register = () => {
    const {createUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState('');


    const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(fullName, photoURL, email, password);

    //USER FUNCTION

    createUser(email,password)
     .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(fullName,photoURL);
        toast.success('success your registration');
       
     })
     .catch(error => {
      console.error(error)
       setError(error.message)
    });


    };

    //GOOGLE SIGN IN
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('success your registration');
           })
       .catch(error => {
        console.error(error);
        setError(error.message);
    })
    }

//UPDATE PROFILE 
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {

    })
    .catch(error => console.error(error));
  }


    return (
        <div  style={{marginTop:'80px',marginBottom:'150px'}}>
            <div className='container border border-2 w-75 p-3'>
             <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" >
                <Form.Label className='fs-5 fw-bold'>Your full Name</Form.Label>
                <Form.Control type="text"  name="fullName" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Photo Url</Form.Label>
               <Form.Control type="text" name="photoURL" placeholder=" photoURL" />
          </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='fs-5 fw-bold'>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='fs-5 fw-bold'>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Signup
            </Button>
            <Form.Text className="text-danger ms-3">
            {error}
           </Form.Text>
      </Form>
      
     
       <div className='d-flex'>
         <Button onClick={handleGoogleSignIn} variant="outline-primary mb-4"><FaGoogle></FaGoogle> Signup with google</Button>
        <p className='ms-2 text-dark fw-bold'>Already have an account? <Link to='/login'>Login</Link></p>
            
     </div>
     
  </div>
       
</div>
    );
};

export default Register;