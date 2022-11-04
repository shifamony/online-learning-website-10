import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';


const Login = () => {

     const {signIn} = useContext(AuthContext);
     const navigate = useNavigate();
     
     const location = useLocation();
     const from = location.state?.from?.pathname || '/';


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace:true});
        })
        .catch(error => {
          console.error(error);
          toast.success(error.message)
        })
    }

    return (

      <div  style={{marginTop:'80px',marginBottom:'150px'}}>
      <div className='container border border-2 w-75 p-3'>
       <Form onSubmit={ handleSubmit}>

      <Form.Group className="mb-3">
          <Form.Label className='fs-5 fw-bold'>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your email" required />
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label className='fs-5 fw-bold'>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter your Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
          Login
      </Button>
      <Form.Text className="text-muted ms-3">
      <p className='text-dark fw-bold'>Are you new here? <Link to='/register'>Signup</Link></p>
   </Form.Text>
</Form>

</div>
 
</div>
      
    );
};

export default Login;