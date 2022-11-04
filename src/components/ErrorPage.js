import React from 'react';
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
          <div className='text-center my-5 py-5'>
            <h1 className='display-4 fw-bold'>Oops! You seem to be lost.</h1>
            <h4>404 Page is not found</h4>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </div>


    );
};

export default ErrorPage;